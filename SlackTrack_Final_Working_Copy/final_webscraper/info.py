from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import pickle
import sys
                        
'''
https://stackoverflow.com/questions/17751322/python-2-attributeerror-list-object-has-no-attribute-strip
^^ was used to get the strip and split to stop getting attribute error when strip wasn't working
A lot of errors were trying to get rid of &nbsp in the website which is a non-breaking space.

https://www.youtube.com/watch?v=XQgXKtPSzUI
^^^ this youtube video was to help me get started using BeautifulSoup

https://stackoverflow.com/questions/5850986/joining-pairs-of-elements-of-a-list-python
^^ this was to help join the creidts and information together 

https://stackoverflow.com/questions/50735626/typeerror-list-object-is-not-an-iterator/50735994
^^ to get rid of iterator error

'''
def scraper(url, major):
  '''
      This is similar to the courses file but now we want the information and amount of credits.
  '''
    my_url = url 

    #opening up conneciton, grabbing the page

    data = []

    uClient = uReq(my_url)
    page_html = uClient.read()
    uClient.close()

    page_soup = soup(page_html, "html.parser")

    #grabs containers
    containers = page_soup.findAll("div",{"class":"courseblock"})

    #for csv file 
    filename = major+"_info.txt"
    f = open(filename, "w")

    #headers = "Major" 
    #f.write(headers)

    l1 = []
    ex = []
    redo = []
    plz = []
    #USE APPEND TO GET AN ARRAY INSIDE AN ARRAY AND EXTEND TO PREVENT THAT 
    for container in containers:
      '''
          We go into the same container as the courses file and we split at the periods since there
          are 2 periods where the information we want is actually inside there. Then since we only
          want the number not the word 'Credits' we get rid of that. 
      '''
        #print(container)
        #newtext = container.replace("&nbsp", "")
        #print(newtext)
        final = container.p.text
        final = final.strip('\xa0').split(". ")    
        final = final[1:3]
        data.append(final)
        for word in final:
            #print(word)
            l1.append(word.strip().split("Credits"))
        #print(data[0])
        #print(data[0])
        ####print(final)
       
     
        #print(final)
        #print(final)
        #print(final)
        #data.append(final)
    #f.write(l1)
        #f.write(data[container]) 
        #print(final)
    #pickle.dump(l1, fileObject, protocol=2)
    #for line in data:
        #plz.extend(line.strip('').split('Credits'))

    for toop in l1:
      '''
          With the line we get rid of the elements we don't need so slice. 
      '''
        #toop = toop.split('.')
        toop = toop[:1] 
        #print(toop)
        ex.append(toop)
    #print(l1)

    si = iter(ex)
    for item in si:
      '''
          There were iteration errors and found with the link above on stackoverflow
          that we must turn it into an iterator itself so it can go into the for loop
          below to write to the file.
      '''
        values = item+next(si, '')
        redo.append(values)
        #print(values) 
        #print(item)
        #second = item[1]
        #print(second)
        #values = first + second
        #print (item)
        #values = ' '.join(str(ex))
        #' '.join(ex)
        #ex[:2] = [''.join(ex[:2])]
        #redo.append(item)
        #print(values)


    for item in redo:
        f.write("%s\n" % item)   
    #took out new line
    #print(data)
    #print(plz)
    print(redo)
    ##print(ex)
    f.close()
    #classInfo()
    #print(ex)

def main():
    cis_url = 'http://catalog.uoregon.edu/arts_sciences/computerandinfoscience/#courseinventory' 
    philo_url = 'http://catalog.uoregon.edu/arts_sciences/philosophy/#courseinventory'
    ta_url = 'http://catalog.uoregon.edu/arts_sciences/theaterarts/#courseinventory'
    j_url = 'http://catalog.uoregon.edu/journalism_comm/journalism/#courseinventory'
    
    scraper(cis_url, 'CIS')    
    scraper(philo_url, 'PHILO')
    scraper(ta_url, 'TA')
    scraper(j_url, 'J')



if __name__ == '__main__':
    main()




