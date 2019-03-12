from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import pickle
import sys
                        
def scraper(url, major):
    my_url = url 
  '''
      Passes in the URL for each major we are going to display along with the name.
      There are many functions in this file because instead of doing a regular strip
      to functions and calling them there were a lot more problems since you are 
      live pulling from the website. Along with that it would affect all the other
      data and the way it sometimes comes in we have to convert it to different types
      throughout the process for us to get our final results. 
  '''
    #opening up conneciton, grabbing the page

    data = []

    uClient = uReq(my_url)
    page_html = uClient.read()
    uClient.close()

    page_soup = soup(page_html, "html.parser")

    #grabs containers
    containers = page_soup.findAll("div",{"class":"courseblock"})

    #for csv file 
    filename = major+"_courses.txt"
    f = open(filename, "w")

    #headers = "Major" 
    #f.write(headers)

    l1 = []
    ex = []
    redo = []
    plz = []

    for container in containers:
       ''' 
          This for loop goes thorugh all the course containers so picks up all the classes where the 
          courses are stored. Then the variable final indexes into that container and grabs the course text.
       '''
        #print(container)
        #newtext = container.replace("&nbsp", "")
        #print(newtext)
        final = container.p.text
        final = final.strip('\xa0').split(" ")    
        data.append(final)
        #print(data[0])
        ####print(final)
        ex.append(final)
        for line in final:
          '''
              This takes final and extends to the list l1 (where it won't make it an array)
              and will get rid of the &nbsp which is a non breaking space in the HTML
              where it wouldn't originally let you strip. 
          '''
            #course = line[0]
            #print(course)
            #num = line[1]
            #print("inside for loop")
            l1.extend(line.strip('').split('\xa0'))
            #l1.append(course.strip('').split('\xa0'))
            #l1.append(num.strip('').split('\xa0'))
            #redo.append(ep[1:1])
        #line = str(l1)
        #f.write(line)
        first = final[0]
        #print(first)
        data.append(final)
       
        final.append(first)
     
        #print(final)
        #print(final)
        #print(final)
        #data.append(final)
    #f.write(l1)
        #f.write(data[container]) 
        #print(final)
    #pickle.dump(l1, fileObject, protocol=2)
    #for line in data:
        #l1.extend(line.strip('').split('\xa0'))
    #print(l1)
    def classInfo():
       '''
          This gets the specific part of the string
       '''
        #once get it ust write it an call this function after the for toop in ex
        for info in ex:
            info = info[3:7]
            print(info)
            
    #print(ex)
    for toop in ex:
      '''
         For each item in ex where ex has the original final variable string
         it will slice off everything we don't need since we just want
         the courses
      '''
        toop = toop[:1]
        #toop = toop[:7]
        #print(toop) 
        redo.extend(toop)
        #str(toop)
        #toop.strip('\xa0').split(" ")
        ###redo.extend(toop.strip('').split('\xa0'))
        #print(toop)
    for thing in redo:
      '''
         The &nbsp in binary is \xa0 so we need to remove that
      '''
        plz.append(thing.strip('').split('\xa0'))

    for item in plz:
      '''
         Write the final result to the file
      '''
        f.write("%s\n" % item)   
    print(plz)
    #print(ex)
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





