ServerEvents.generateData("after_mods",event=>{
  let data = JsonIO.read("./kubejs/config/startmon.json")
  let monOriginNames = data.starterMons.map((x)=>"startmon:"+x.name)

  //generates the different startmon:origins/power/<mon>.json files
  let monOrigins = data.starterMons.map((x)=>{
    let regions = x.regions.map((region)=>{
      let regionName = region.region
      if (data.regions.indexOf(regionName) >= 0){
        return "startmon:"+regionName+"_able"
      }else{
        console.log("Region: "+regionName+" not available. "+x.name+" tried to add it.")
      }
    })
    let powers = regions.filter((x)=>x != undefined)
    powers.push("startmon:"+x.name)
    
    return {
      "powers":powers,
      "icon": {
        "id": "kubejs:"+x.name
      },
      "name": x.name,
      "description": x.description,
      "impact": 0
    }
  })
  let monPowers = data.starterMons.map((x)=>{
    return {
      "type": "origins:action_on_callback",
      "name": x.name,
      "hidden": true,
      "description": "",
      "entity_action_gained": {
        "type": "origins:execute_command",
        "command": "kubejs persistent-data entity @s merge {\"monName\":\""+x.name+"\"}"
      },
      "entity_action_lost": {
        "type": "origins:execute_command",
        "command": "kubejs persistent-data entity @s merge {\"monName\":\"\"}"
      }
    }
  })

  //generates the different startmon:origins/origin/<mon>.json files
  monOrigins.forEach((x)=>{
    event.json("startmon:origins/origin/"+x.name+".json",x)
  })
  monPowers.forEach((x)=>{
    event.json("startmon:origins/power/"+x.name+".json",x)
  })
  let monJson = {
    "order":2,
    "enabled": true,
    "name": "Cobblemon",
    "description": "You've elected to start as a cobblemon.  Pick what you're gonna start as.",
    "origins": [
      {
        "condition": {
          "type": "origins:origin",
          "origin": "startmon:mon"
        },
        "origins": monOriginNames
      },
      {
        "condition": {
          "type": "origins:not",
          "condition": {
            "type": "origins:origin",
            "origin": "startmon:mon"
          }
        },
        "origins": [
          "startmon:off"
        ]
      }
    ],
    "allow_random": true
  }


  let regionPowers = []
  let regionOrigins = []
  for(const i in data.regions){
    let x = data.regions[i]
    regionPowers.push({
      "type": "origins:action_on_callback",
      "name": x,
      "description": x+" Creature.  Only some mons have special forms.",
      "hidden": true,
      "entity_action_gained": {
        "type": "origins:execute_command",
        "command": "kubejs persistent-data entity @s merge {\"monRegion\":"+(parseInt(i)+1)+"}"
      },
      "entity_action_lost": {
        "type": "origins:execute_command",
        "command": "kubejs persistent-data entity @s merge {\"monRegion\":0}"
      }
    })
    regionOrigins.push({
      "powers": [
        "startmon:hisuian"
      ],
      "icon": {
        "id": "kubejs:hisuian"
      },
      "name": x,
      "description": x+" Creature.  Only some mons have special forms.",
      "order": 4,
      "impact": 1
    })
  }
  regionPowers.forEach((x)=>{
    event.json("startmon:origins/power/"+x.name+"_able.json",{
      "type": "origins:action_on_callback",
      "name": "",
      "hidden": true
    })
    event.json("startmon:origins/power/"+x.name+".json",x)
  })
  regionOrigins.forEach((x)=>{
    event.json("startmon:origins/origin/"+x.name+".json",x)
  })

  let regionLayerList = data.regions.map((x)=>{
    return {
      "condition": {
        "type": "origins:power_active",
        "power": "startmon:"+x+"_able"
      },
      "origins": [
        "startmon:regular",
        "startmon:"+x
      ]
    }
  })

  regionLayerList.push({
    "condition": {
      "type": "origins:not",
      "condition": {
        "type": "origins:origin",
        "origin": "startmon:mon"
      }
    },
    "origins": [
      "startmon:off"
    ]
  })

  event.json("startmon:origins/layer/region.json",{
    "order":3,
    "enabled": true,
    "name": "Region",
    "origins": regionLayerList,
    "allow_random": true
  })

  event.json("startmon:origins/layer/mons.json",monJson)
})
