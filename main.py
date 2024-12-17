from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
import os
import logging
from T02 import process_image

app = Flask(__name__)

UPLOAD_FOLDER = "static/uploads/"
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    handlers=[logging.FileHandler("app.log"), logging.StreamHandler()],
)
logger = logging.getLogger(__name__)


@app.before_request
def log_request_info():
    # for {request.path} with {request.user_agent}"
    logger.info(
        f"Request from {request.remote_addr} "
    )


@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/about/")
def aboutpage():
    return render_template("about.html")




if __name__ == "__main__":
    logger.info("Starting the Flask application.")
    app.run()
