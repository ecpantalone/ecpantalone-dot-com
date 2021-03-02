from flask import Flask
from flask.helpers import url_for

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return url_for('index')

@app.route('/resume')
def resume():
    return url_for('resume')

@app.route('/portfolio')
def portfolio():
    return url_for('portfolio')