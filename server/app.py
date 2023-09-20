from flask import Flask, jsonify, request
from flask_mail import Mail, Message
from flask_limiter import Limiter
from flask_cors import CORS
import os

app = Flask(__name__)

cors = CORS(app, resources={
          r"/send-email/*": {"origins": '*'}})
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_DEFAULT_SENDER'] = 'portfolio-emails@youdexsof.ir'

mail = Mail(app)


@app.route("/send-email", methods=['POST'])
def send_email():
    data = request.json
    name = data['name']
    email = data['email']
    subject = data['subject']
    message = data['message']

    msg = Message(subject=subject, recipients=['yousofh255@gmail.com'])
    msg.body = f"Name: {name}\nEmail: {email}\nSubject: {subject}\n\nMessage:\n{message}"

    try:
        mail.send(msg)
        return jsonify({'success': 'Message sent successfuly!'}), 200
    except Exception as e:
        return jsonify({'error': str(e), 'email': email, "name": name}), 400


if __name__ == '__main__':
    app.run(debug=True)
