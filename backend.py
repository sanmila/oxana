import json
import logging
from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.request
import urllib.parse

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

import os
CONFIG_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'config.json')
try:
    with open(CONFIG_FILE, 'r') as f:
        config = json.load(f)
        TELEGRAM_BOT_TOKEN = config.get("TELEGRAM_BOT_TOKEN", "")
        TELEGRAM_CHAT_ID = config.get("TELEGRAM_CHAT_ID", "")
except Exception as e:
    logging.warning(f"Could not load config.json: {e}")
    TELEGRAM_BOT_TOKEN = ""
    TELEGRAM_CHAT_ID = ""

class RequestHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
        self.end_headers()

    def do_POST(self):
        if self.path == '/api/contact':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
                
                name = data.get('name', 'N/A')
                contact = data.get('contact', 'N/A')
                topic = data.get('topic', 'N/A')
                message = data.get('message', 'N/A')
                
                text = f"📝 *Новая заявка с сайта*\n\n"
                text += f"👤 *Имя:* {name}\n"
                text += f"📞 *Контакты:* {contact}\n"
                text += f"🎯 *Тема:* {topic}\n"
                text += f"💬 *Сообщение:* {message}"
                
                # Send to Telegram
                url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
                payload = json.dumps({
                    "chat_id": TELEGRAM_CHAT_ID,
                    "text": text,
                    "parse_mode": "Markdown"
                }).encode('utf-8')
                
                req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
                
                with urllib.request.urlopen(req) as response:
                    res = response.read()
                    logging.info(f"Successfully sent message to Telegram. Response: {res}")
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success"}).encode('utf-8'))
                
            except Exception as e:
                logging.error(f"Error processing request: {e}")
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == '__main__':
    server = HTTPServer(('127.0.0.1', 8088), RequestHandler)
    logging.info('Starting Telegram backend server on port 8088...')
    server.serve_forever()
