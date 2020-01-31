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
                    s2 = input("Whats da link ??")
                    g[j].append((s2, i))




add_graph()

