from flask import Flask, request
from flask_cors import CORS
import fileHandler
import json

app = Flask(__name__)
CORS(app)


@app.route("/tickerInfo/<ticker_name>", methods=['GET'])
def get_ticker_info(ticker_name):
    ticker_df = fileHandler.get_file_data(f"{ticker_name}.csv")
    return ticker_df.to_json(orient='records'), 200


@app.route("/allTickers", methods=['GET'])
def get_all_tickers():
    tickers = fileHandler.get_files_names()
    formated_tickers = [x.split(".csv")[0] for x in tickers]
    return json.dumps(formated_tickers), 200


app.run(host='0.0.0.0', port=5000)