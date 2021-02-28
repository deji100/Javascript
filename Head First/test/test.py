import pprint

bubbles = [60, 50, 60, 58, 54, 54, 
           58, 50, 52, 54, 48, 69,
           34, 55, 51, 52, 44, 51,
           69, 64, 66, 55, 52, 61,
           46, 31, 57, 52, 44, 18,
           41, 53, 55, 61, 51, 44]


obj = {}

for cha in bubbles:
    obj.setdefault(cha, 0) # unique
    obj[cha] += 1
pprint.pprint(obj)
print(obj.setdefault(60, 9))
# pprint.pprint(obj)


# find maximum value
# maxx = 0
# for i in bubbles:
#     if i > maxx:
#         maxx = i
# print(maxx)

list1 = list()
list1.append('Ello')
list1[0] = 1
print(list1)

print(dict())
print(str())
print(int())
print(float())
print(set())
print(tuple())
print(type(list()))





