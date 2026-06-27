let data = JsonIO.read("./kubejs/config/startmon.json")
function resetMonData(pNbt, pData) {
  let mon = pNbt.get("SynchroSavedTeam").get("slot_0")
  if (mon) {
    pData['monData'] = mon
  }
}

function reMon(player) {
  //Player has unsynched. time to reset it.
  console.log("Resetting " + player.getUsername())
  player.server.runCommandSilent("/synchro slot activate 1 " + player.getUsername())
  console.log("Player Unsynced.")
}

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event
  event.register(Commands.literal('setupMon')
    .requires(source => source.hasPermission(2))
    .executes(ctx => setupMon(ctx.source.player))
  )
  const setupMon = (player) => {
    let pData = player.persistentData
    if (pData.getBoolean('monSetup')) {
      let monName = pData.getString('monName')
      let region = pData.getInt('monRegion')
      let gender = pData.getInt('monGender')
      let shiny = pData.getBoolean('monShiny')
      let result = "/execute as " + player.username + " run synchro slot set 1 " + monName + " level=" + data.config.startingLevel
      for (const x in data.regions) {
        if (region == x + 1) {
          let regionName = data.regions[x]
          let mon = data.starterMons.find((element) => element.name == monName)
          let regionData = mon.regions.find((element) => element.region == regionName);
          if (regionData.species == "all") {
            result = result + " " + regionName + "=true"
          } else {
            pData.putString("regionSpecies", regionData.species)
          }
        }
      }
      switch (gender) {
        case 1:
          result = result + " gender=female"
          break;

        case 2:
          result = result + " gender=male"
          break;

        case 0:
          result = result + " gender=genderless"
          break;

        default:
          break;
      }

      if (shiny) {
        result = result + " shiny=true"
      }
      console.log(result)
      pData.remove('monData')
      player.server.runCommandSilent(result)
      pData.putBoolean('monSetup', false)
      pData.putBoolean('monStart', true)
      return 0
    }
  }
})

PlayerEvents.tick(event => {
  const pData = event.player.persistentData
  const pNbt = event.player.getNbt()
  if (pData.getBoolean('monStart')) {
    if (!pData['monData']) {
      resetMonData(pNbt, pData)
      console.log("Mon Data needs reset")
      return
    }
    if (pData['monData'].isEmpty()) {
      resetMonData(pNbt, pData)
      console.log("Mon Data needs reset2")
      return
    }
    if (!pNbt.get("SynchroSavedTeam").get("slot_0")) {
      //Player nuked slot 1 by accident. Reset it.
      pNbt["SynchroSavedTeam"]["slot_0"] = pData['monData']
      console.log("Slot Data needs reset")
      return
    }
    if (pNbt.get("SynchroSavedTeam").get("slot_0").isEmpty()) {
      //Player nuked slot 1 by accident. Reset it.
      pNbt["SynchroSavedTeam"]["slot_0"] = pData['monData']
      console.log("Slot Data needs reset2")
      return
    }
    if (pNbt.get("SynchroSavedTeam").get("slot_0").getUUID("UUID").toString() != pData.get('monData').getUUID("UUID").toString()) {
      pNbt["SynchroSavedTeam"]["slot_0"] = pData['monData']
      console.log("Team slot got overwritten.")
      return
    }
    if (pNbt.get("SynchroMorphData").isEmpty()) {
      reMon(event.player)
      return
    }
    if (pNbt.get("SynchroSavedTeam").getInt("active") == -1) {
      reMon(event.player)
      return
    }
    if (pData.getString("regionSpecies") != "") {
      const regionSpecies = pData.getString("regionSpecies")
      const currentSpecies = pNbt.get("SynchroSavedTeam").get("slot_0").getString("Species").split(":")[1]
      if (regionSpecies == currentSpecies) {
        if (pNbt.get("SynchroSavedTeam").getInt("active") == 0) {
          let result = "/execute as " + event.player.username + " run synchro edit"
          let region = pData.getInt('monRegion')
          for (const x in data.regions) {
            if (region == x + 1) {
              result = result + " " + data.regions[x] + "=true"
            }
          }
          event.player.server.runCommandSilent(result)
          pData.remove('regionSpecies')
          console.log("Set outstanding region change")
        }
      }
    }
    pData['monData'] = pNbt.get("SynchroSavedTeam").get("slot_0")
  } else {
    pData.remove('monData')
  }
})
