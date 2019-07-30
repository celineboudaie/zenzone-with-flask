
# // Yelp API
#
# // Client ID
# // EatpBlf03VQCRjkcMMXEDw

import requests



def get_location(user_input):
    key = 'qvpK1a-JsIsWThEetZxL2wVj9wXF9r853wP8CGqrcwpmDRazTDboAEJTeeXjdM43IwuTtqTIrM_wYuij1b5jl4qr3-z_16hI5rfhDEcyxpvOTu0yUhkiYaGc8yY_XXYx'

    url = 'https://api.yelp.com/v3/businesses/search?term=spa&location='+user_input

    r = requests.get(url, headers={'Authorization': 'Bearer {}'.format(key)})

    for business in r.json()['businesses']:
      print(business)
      break


print(get_location('90292'))
