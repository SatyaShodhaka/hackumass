# HackUMass-XI 2023
## MoodMeter.AI
### Overview
MoodMeter.AI is designed to enhance online communication in remote work environments by providing real-time emotional intelligence. Utilizing facial expression and voice analysis, our tool offers insights into the emotional state of meeting participants, fostering better understanding and collaboration in online meetings.

### Features
* Real-Time Emotion Detection: Leverages machine learning to analyze facial expressions and voice tones, offering instant feedback on the emotional state of participants.
* Facial Expression Analysis: Uses advanced facial recognition technology to interpret non-verbal cues, essential for understanding nuanced communication.
* Voice Sentiment Analysis: Processes vocal inputs to determine sentiment, aiding in the perception of tone and intent.
* Interactive Dashboard: Provides a user-friendly interface with real-time analytics and summaries of emotional cues.
### Tech Stack
* React.js: Ensures a dynamic and responsive user interface, catering to interactive user experiences.
* Node.js and Express.js: Creates a robust server-side architecture that is scalable and efficient.
* Python: Powers our advanced machine learning models for accurate and fast sentiment analysis.
* Agora SDK: Enables real-time video communication, essential for analyzing online meeting interactions.
* LLM (Language Learning Models): Utilized for sophisticated text summarization and sentiment analysis, enhancing the accuracy of our emotion detection algorithms.
### Installation

* Install Dependencies: Navigate to the project directory and run npm install to install all required dependencies.
 ```
 $ cd client && npm install
```
* Environment Setup: Configure the .env file with necessary API keys and settings.
```
Agora_API = "INSERT YOUR API KEY"
```
### How to Run
* Launch the Application: In a separate terminal, execute npm start to launch the React application.
```
$ npm run-script start
```
* Access the Application: Open a web browser and visit http://localhost:3000 to access MoodMeter.AI.
### Usage
* Join a Meeting: Log into the platform and join an online meeting.
* Enable Emotion Analysis: Activate the emotion detection feature to start analyzing the emotional state of participants.
* View Insights: Real-time emotional insights are displayed on the dashboard, offering an enhanced understanding of the meeting dynamics.

### Contributing
We welcome contributions to MoodMeter.AI! If you're interested in improving our application or adding new features, please follow these steps:

Fork the Repository: Create a personal fork of the project on GitHub.
Create a New Branch: For each new feature or improvement, create a separate branch.
Submit a Pull Request: After making your changes, submit a pull request for review.
