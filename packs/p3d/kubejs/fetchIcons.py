import json
import urllib.request
from os import path
from time import sleep
from html.parser import HTMLParser

apiEndpoint = "https://pokeapi.co/api/v2/pokemon/{}"
imgEndpoint = "https://archives.bulbagarden.net/wiki/File:Shuffle{}.png"

class ImgFinder(HTMLParser):
    def __init__(self,id):
        super().__init__()
        self.id = id
        self.foundTag = ""
    def handle_starttag(self, tag, attrs):
        if tag == "a":
            href = ""
            valid = False
            for attr in attrs:
                if attr[0] == "title":
                    if attr[1] == "Shuffle{}.png".format(self.id):
                        valid = True
                if attr[0] == "href":
                    href = attr[1]
            if valid:
                self.foundTag = href

with open("./config/startmon.json","r") as startFile:
    startData = json.load(startFile)
    print(startData)
    for mon in startData['starterMons']:
        print(mon)
        iconPath = "./assets/kubejs/textures/item/{}.png".format(mon['name'])
        if path.exists(iconPath):
            continue
        if 'noshuffle' in mon:
            if mon['noshuffle']:
                continue
        apiUrl = apiEndpoint.format(mon['name'])
        apiReq = urllib.request.Request(apiUrl, headers={"User-Agent": "StartMonParser/1.0"})
        apiRes = json.loads(urllib.request.urlopen(apiReq).read())
        id = str(apiRes['id']).zfill(3)
        print(id)
        imgFile = imgEndpoint.format(id)
        print(imgFile)
        parser =  ImgFinder(id)
        imgSuperReq = urllib.request.Request(imgFile, headers={"User-Agent": "StartMonParser/1.0"})
        imgSuperRes = urllib.request.urlopen(imgSuperReq).read()
        parser.feed(imgSuperRes.decode('utf-8'))
        imgUrl = parser.foundTag
        print(imgUrl)
        imgReq = urllib.request.Request(imgUrl, headers={"User-Agent": "StartMonParser/1.0"})
        imgRes = urllib.request.urlopen(imgReq).read()
        with open("./assets/kubejs/textures/item/{}.png".format(mon['name']),"wb") as imgFile:
            imgFile.write(imgRes)
        sleep(1)
