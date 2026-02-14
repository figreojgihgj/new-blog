import requests

import json

url = "https://www.bing.com/indexnow"

payload = {

    "host": "https://arcwolf.top",

    "key": "abb9eb1d598c4a549313f73343ab1caa",

    "keyLocation": "https://arcwolf.top/abb9eb1d598c4a549313f73343ab1caa.txt",

    "urlList": [

        "https://arcwolf.top/about"##若要提交多个网页，在除最后一个网页的最后加上英文逗号

                                 #填写step2中的网站url
    ]

}
headers = {

    'Content-Type': 'application/json'
}

response = requests.post(url, data=json.dumps(payload), headers=headers)

print(response.status_code)
print(response.text)