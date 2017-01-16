import urllib.request
import os
import subprocess
from bs4 import BeautifulSoup

baseURL  = "http://www.talismanwiki.com/"
url = "http://www.talismanwiki.com/Category%3AAdventure_Card_(Revised_4th_Edition)"

content = urllib.request.urlopen(url).read()

soup = BeautifulSoup(content, 'html.parser')

routingURLs = list()


urlDivs = soup.findAll("div", { 'class' : 'mw-content-ltr'})
for tag in urlDivs:
    linkTags = tag.findAll({'a' : True})

for links in linkTags:
    routingURLs.append(links.get('href'))


for link in routingURLs:
    subPageContent = urllib.request.urlopen(baseURL + link).read()
    subPageSoup = BeautifulSoup(subPageContent, 'html.parser')
    for child in subPageSoup.find("div", {'class' : 'mw-content-ltr'}):
    # Even tho this child.find is wrong, it breaks the rest  if you remove it.
        if child.find("class=GameItemImage"):
            continue
        elif child.find(class_='mw-headline'):
            continue
        elif child.find('<a'):
            continue
        else:
            with open("./tacos.txt", "a+") as f:
                text = str(child.getText())
                if "Revised 4th Edition" in text:
                    break
                elif "Copies of this Card:" in text:
                    break
                elif "Encounter Number" in text:
                    break
                else:
                    text = text.replace(".", "\n")
                    text = text.replace("\t", "")
                    f.write(text)
                    f.write("\n")
                    f.close()
            print("Wrote: " + child.getText() + " to tacos.txt");
