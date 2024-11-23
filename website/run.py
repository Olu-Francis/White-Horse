from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

# from website.auth import login_required
# from website.db import get_db

bp = Blueprint('run', __name__)

@bp.route('/')
def home():
    return render_template('index.html')


@bp.route('/about')
def about():
    return render_template('about.html')


@bp.route('/service')
def service():
    return render_template('services.html')


@bp.route('/contact-us')
def contact():
    return render_template('contact.html')
