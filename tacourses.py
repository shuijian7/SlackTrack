from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

my_url = 'http://catalog.uoregon.edu/arts_sciences/theaterarts/#courseinventory'

#opening up conneciton, grabbing the page

uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

page_soup = soup(page_html, "html.parser")

data = []

#grabs containers
containers = page_soup.findAll("div",{"class":"courseblock"})

filename = "tacourses.txt"
f = open(filename, "w")


for container in containers:
    final = container.p.text
    final.split(" ")
    data.append(final)
    line = str(data)
    ###f.write(line)
    #for i in range len of containers and then data [i]
#f.write(data)       # + "\n") 

for item in data:
    f.write("%s\n" % item)

print(data)
