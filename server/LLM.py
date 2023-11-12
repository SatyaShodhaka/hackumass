import openai
from flask import Flask, request, jsonify
import os
 
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Set your OpenAI API key here
openai.api_key = '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'
def analyze_emotions_and_summarize(text):
    # Classify emotion
    emotion_response = openai.Completion.create(
        engine="text-davinci-003",
        prompt="Classify the primary emotion in this text (happiness, sadness, anger, fear, surprise, disgust, neutral): '{}'".format(text),
        max_tokens=60
    )
    emotion = emotion_response.choices[0].text.strip()

    # Summary about the emotion
    emotion_summary_response = openai.Completion.create(
        engine="text-davinci-003",
        prompt="Provide a summary about the '{}' emotion in this text: '{}'".format(emotion, text),
        max_tokens=150
    )
    emotion_summary = emotion_summary_response.choices[0].text.strip()

    # Overall summary of the text
    overall_summary_response = openai.Completion.create(
        engine="text-davinci-003",
        prompt="Provide an overall summary of this text: '{}'".format(text),
        max_tokens=150
    )
    overall_summary = overall_summary_response.choices[0].text.strip()

    return emotion, emotion_summary, overall_summary

@app.route('/prediction', methods=['POST'])
def predict_emotion_and_summarize():
    data = request.get_json(force=True)
    text = ' '.join(data['texts'])  # Assuming texts is a list of sentences from the call

    emotion, emotion_summary, overall_summary = analyze_emotions_and_summarize(text)

    response = {
        'emotion': emotion,
        'emotion_summary': emotion_summary,
        'overall_summary': overall_summary 
        
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
