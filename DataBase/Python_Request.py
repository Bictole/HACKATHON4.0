# -*- coding: utf-8 -*-
"""
Created on Sat Feb  1 10:06:32 2020

@author: morin
"""

import requests
import json


def made_request(word):

    url = "https://api.wordassociations.net/associations/v1.0/json/search?"

    querystring = {"apikey":"4b8acd47-07b3-4d38-ab4d-2480c73669e9","type":"stimulus","indent":"yes","pos":"noun","limit":"50","lang":"en","text":word}

    r = requests.get(url,params=querystring)

    L = json.loads(r.text)
    K= L['response']
    K = K[0]
    K = K['items']
    
    out = []
    for i in K:
        out.append(i['item'])
    
    return out



def main(w1,w2):
    
    L = made_request(w1)
    K = made_request(w2)
    
    for i in L:
        for j in K:
            if(i==j):
                return i
    
    return 0

def main_list(w1,w2):
    
    L = made_request(w1)
    K = made_request(w2)
    out = []
    
    for i in L:
        for j in K:
            if(i==j):
                out.append(i)            
    
    return out
    
    

