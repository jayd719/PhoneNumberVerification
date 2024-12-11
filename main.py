from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
import os
import logging
from T01 import process_image

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
    logger.info(f"Request from {request.remote_addr} for {request.path} with {request.user_agent}")

@app.route("/")
def hello_world():
    logger.info("Home page accessed.")
    return render_template("poster1.html")

def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        logger.warning("No file part in the request.")
        return render_template("error.html", message="No file part in the request"), 400

    file = request.files["file"]

    if file.filename == "":
        logger.warning("No selected file.")
        return render_template("error.html", message="No selected file"), 400

    if not allowed_file(file.filename):
        logger.warning(f"File type not allowed: {file.filename}")
        return render_template("error.html", message="File type not allowed"), 400

    try:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(file_path)
        logger.info(f"File saved successfully: {filename}")

        # Process the image
        process_image(file_path)
        logger.info(f"File processed successfully: {filename}")

        # Render the image in a template
        image_url = url_for("static", filename=f"uploads/{filename}")
        return render_template("result.html", image_url=image_url)
    except Exception as e:
        logger.error(f"Error processing image: {str(e)}", exc_info=True)
        return render_template("error.html", message=f"Error processing image: {str(e)}"), 500

if __name__ == "__main__":
    logger.info("Starting the Flask application.")
    app.run()
