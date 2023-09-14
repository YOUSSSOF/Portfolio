from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)


@app.route('/send', methods=['POST'])
def send_email():
    try:
        data = request.json

        recipient_email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        sender_email = 'yousofh3443@gmail.com'
        sender_password = 'yousof1384'
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, 'yousofh255@gmail.com', message.as_string())
        server.quit()

        return jsonify({'message': 'Email sent successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
