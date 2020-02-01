from google_images_download import google_images_download
import sys

def GoogleImage_requests(word):
    orig_stdout = sys.stdout
    f = open('URLS.txt', 'w')
    sys.stdout = f

    response = google_images_download.googleimagesdownload()

    arguments = {"keywords": word,
                    "limit": 1,
                    "print_urls": True,
                    "size": ">2MP",
                }
    paths = response.download(arguments)

    sys.stdout = orig_stdout
    f.close()

    with open('URLS.txt') as f:
       content = f.readlines()
    f.close()

    urls = []
    for j in range(len(content)):
        if content[j][:9] == 'Completed':
            urls.append(content[j - 1][11:-1])

    print(urls)
    return urls

GoogleImage_requests("beer")