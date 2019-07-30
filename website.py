from flask import Flask, request, render_template
import requests
app = Flask(__name__)

@app.route('/')
@app.route('/home.html')
def home():
    return render_template('home.html')

@app.route('/blogs.html')
def blogs():
    return render_template('blogs.html')

@app.route('/tips.html')
def tips():
    return render_template('tips.html')

@app.route('/app.html')
def app_route():
    return render_template('app.html')

@app.route('/quiz.html')
def quiz():
    return render_template('quiz.html')

@app.route('/places.html')
def places():
    return render_template('places.html')

@app.route('/results.html')
def results():
    address = request.args.get('address')
    spas = get_location(address, 'spa')
    cafes = get_location(address, 'cafe')
    return render_template('results.html', spas=spas, cafes=cafes)

def get_location(user_input, type_of_establishment):
    key = 'qvpK1a-JsIsWThEetZxL2wVj9wXF9r853wP8CGqrcwpmDRazTDboAEJTeeXjdM43IwuTtqTIrM_wYuij1b5jl4qr3-z_16hI5rfhDEcyxpvOTu0yUhkiYaGc8yY_XXYx'

    url = 'https://api.yelp.com/v3/businesses/search?term='+type_of_establishment+'&location='+user_input

    r = requests.get(url, headers={'Authorization': 'Bearer {}'.format(key)})

    businesses = []

    for business in r.json()['businesses'][:3]:
      businesses.append({
        'name': business['name'],
        'image_url': business['image_url'],
        'yelp_url': business['url'],
        'rating': business['rating'],
        'price': business.get('price'),
        'address': business['location']['address1']
      })
    return businesses



if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)
