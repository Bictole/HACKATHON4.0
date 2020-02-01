# -*- coding: utf-8 -*-
"""
Created on Sat Feb  1 10:06:32 2020

@author: morin
"""

import requests

def made_request():

    url = "https://api.wordassociations.net/associations/v1.0/json/search?"

    querystring = {"apikey":"4b8acd47-07b3-4d38-ab4d-2480c73669e9","type":"stimulus","indent":"yes","pos":"noun","limit":"50","lang":"en","text":"apple"}

    r = requests.get(url,params=querystring)

    print(r.text)