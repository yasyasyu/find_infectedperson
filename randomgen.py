import random

N =400
num = []
for i in range(125):
    num.append("number"+str(i+1).zfill(3))
    num.append("number"+str(i+1).zfill(3))
    num.append("number"+str(i+1).zfill(3))
    num.append("number"+str(i+1).zfill(3))

# print(num)
for i in range(N):
    a= random.randint(0,499)
    b= random.randint(0,499)
    num[a],num[b] = num[b],num[a]
# print(num)
date = 0
manage = set()
txt = ""
for i in range(500):
    if(i % 20 == 0):
        date += 1
    if(num[i] in manage):
        check = "退室"
        manage.remove(num[i])
    else:
        check = "入室"
        manage.add(num[i])
    txt += str(date).zfill(4)+","+check+","+num[i] + "\n" 
    #日付?,入退室,学籍番号
    print(str(date).zfill(4)+","+check+","+num[i])

FILE = "data.csv"
wcsv = open(FILE,"a")
wcsv.write(txt)
wcsv.close()	
