def final_file(name):
    filename = "final_" +name+"_courses.txt"
    x = open(filename, "w")

    hold_class = []
    hold_info = []
    final = []

    f = open(name+"_courses.txt", "r")
    for item in f:
        hold_class.append(item.strip('"').strip('\n'))

    f2 = open(name+"_info.txt", "r")
    for item2 in f2:
        hold_info.append(item2.strip('\n'))

    for i in range(len(hold_class)):
        first = hold_class[i]
        second = hold_info[i]
        final.append(first + second)

    #####course = f.readline()
    #print(course)
    ##for items in course:
        ##hold_class.append(items.rstrip('\n'))
    #print(f2.readline())

    '''
    with open("courses.txt", "r") as f:
        hold_class.extend(f)
        for line in f:
            print(line)
            mylist = line.strip('\n')
            #mylist = list(f)
            #mylist.rstrip('\n')
            #hold_class.extend(line)
    '''        

      

    '''
    for lines in f2:
        f2.readline()
        first = lines[0]
        second = lines[1]
        #print(f2.read())
        #print(first)
        #print(second)
    #for thing in inform:
        #hold.extend(thing)

    f = open("courses.txt", "r")
    #print(f.readline())

    test = []
    final_info = []
    for line in inform:
        first = line[0] 
        second = line[1]
        #combine = first + second
        #print(combine) 
        #course = f.readline()
        #info = f2.readline()
        #test.append(course)
        #test.extend(info)
        x.write(course)
        x.write(info)
        #print(course)
        #print(info)
    '''
    #print(len(hold_info))
    #print(len(hold_class))
    print(final)
    #print(final[0])
    #print(inform)
    for thing in final:
        x.write("%s\n" % thing)

    x.close()
def main():
    cis_url = 'http://catalog.uoregon.edu/arts_sciences/computerandinfoscience/#courseinventory' 
    philo_url = 'http://catalog.uoregon.edu/arts_sciences/philosophy/#courseinventory'
    ta_url = 'http://catalog.uoregon.edu/arts_sciences/theaterarts/#courseinventory'
    j_url = 'http://catalog.uoregon.edu/journalism_comm/journalism/#courseinventory'
    
    final_file('CIS')    
    final_file('PHILO')
    final_file('TA')
    final_file('J')



if __name__ == '__main__':
    main()



#for loop over info and then make object 0 the course and object 1 the credits and combine them and then combine classes with it
