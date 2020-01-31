# -*- coding: utf-8 -*-

import graph
import os
import urllib

def add_graph():
    g= []

    file = open("url1.txt", "r")
    url = file.readlines()

    for j in range(len(url)):

        g.append([])
        print("new image we search link with...")
        print(url[j])
        for i in range(len(g)):
            if i != j:
                print(url[i])
                s = input("Is there a link ?")
                if s == "y":
                    s2 = input("Whats the link ??")
                    g[j].append((s2, i))

#add_graph()

def creategraphs():
    g = []

    shop = open("DecisionalTree/shop.txt", "r")
    l = shop.readlines()

    sh = [(l[0], [], [])]
    second = []

    count = 1
    while count < 8:
        second.append(l[count])
        count+=1

    count+=1
    third = []

    while count < len(l):
        third.append(l[count])
        count +=1

    sh[0][1].append(second)
    sh[0][2].append(third)
    g.append(sh)

    info = open("DecisionalTree/informations.txt", "r")
    l = info.readlines()

    inf = [(l[0], [], [])]
    second = []

    count = 1
    while count < 4:
        second.append(l[count])
        count += 1

    count += 1
    third = []

    while count < len(l):
        third.append(l[count])
        count += 1

    inf[0][1].append(second)
    inf[0][2].append(third)
    g.append(inf)

    video = open("DecisionalTree/video.txt", "r")
    l = video.readlines()

    vid = [(l[0], [], [])]
    second = []

    count = 1
    while count < 4:
        second.append(l[count])
        count += 1

    count += 1
    third = []

    while count < len(l):
        third.append(l[count])
        count+=1

    vid[0][1].append(second)
    vid[0][2].append(third)
    g.append(vid)

    return g

creategraphs()