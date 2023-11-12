from flask import Flask, request, jsonify
from textblob import TextBlob
from gensim.summarization import summarize

app = Flask(__name__)

@app.route('/prediction', methods=['POST'])
def predict_sentiment_and_summarize():
    # Extracting the list of texts from the request
    data = request.get_json(force=True)
    texts = data['texts']

    # Performing sentiment analysis on individual texts
    individual_sentiments = []
    for text in texts:
        blob = TextBlob(text)
        sentiment = blob.sentiment.polarity
        sentiment_label = 'positive' if sentiment > 0 else 'negative'
        individual_sentiments.append(sentiment_label)

    # Concatenating all texts for overall sentiment analysis and summarization
    combined_text = ' '.join(texts)
    combined_blob = TextBlob(combined_text)
    overall_sentiment = combined_blob.sentiment.polarity
    overall_sentiment_label = 'positive' if overall_sentiment > 0 else 'negative'

    # Performing text summarization
    summary = summarize(combined_text)

    # Creating a response object
    response = {
        'individual_sentiments': individual_sentiments,
        'overall_sentiment': overall_sentiment_label,
        'summary': summary
    }

    # Sending the response back
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
