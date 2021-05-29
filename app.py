from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.ApiHandler import ApiHandler

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

def detect():
    pass

# Hot Reloading for HTML/CSS
@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)
	

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

api.add_resource(ApiHandler, '/flask/test')
	
# @app.route('/')
# def index():
# 	return render_template("index.html",
#                            config=app.interface.config,
#                         #   vendor_prefix=(""),
#                         #    input_interfaces=[interface[0] for interface in app.interface.config["input_interfaces"]],
#                         #    output_interfaces=[interface[0] for interface in app.interface.config["output_interfaces"]],
#                            css=app.interface.css, examples=None, path=None
#                            )