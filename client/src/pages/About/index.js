import React from 'react';
import './About.scss'; // Ensure this SCSS file is created for styling

const About = () => {
    return (
        <div className="about">
            <h1>About MoodMeter.AI</h1>
            <section className="about__description">
                <p>
                    Moodmeter.ai is an innovative platform designed to revolutionize emotional analysis in video communications. 
                    Utilizing cutting-edge machine learning algorithms, it captures and interprets the sentiment of participants 
                    during video calls, offering a comprehensive understanding of the emotional tone of the conversation.
                </p>
                <p>
                    This tool is pivotal in the era of digital communication, providing an essential layer of emotional intelligence to 
                    virtual interactions. Moodmeter.ai stands at the forefront of empathetic technology, transforming ordinary video calls 
                    into insightful sessions that enhance understanding and emotional awareness among participants.
                </p>
            </section>
            <section className="about__tech-stack">
                <h2>Our Technology Stack</h2>
                <p>
                    Built with a combination of modern and robust technologies, Moodmeter.ai ensures reliability, efficiency, and scalability:
                </p>
                <ul>
                    <li>React.js for a responsive and interactive user interface</li>
                    <li>Node.js and Express.js for a powerful server-side architecture</li>
                    <li>Advanced machine learning models in Python for accurate sentiment analysis</li>
                    <li>Agora SDK for seamless real-time video communication</li>
                </ul>
            </section>
            <section className="about__business-value">
                <h2>Business Value and Impact</h2>
                <p>
                    Moodmeter.ai delivers significant value to businesses by enhancing communication effectiveness and emotional engagement.
                    In today's digital-first world, understanding emotional cues is crucial for successful interactions, especially in remote
                    and virtual environments.
                </p>
                <ul>
                    <li>Improves team dynamics and productivity through better understanding of emotional feedback</li>
                    <li>Enables businesses to gauge customer reactions in real-time, leading to improved service and satisfaction</li>
                    <li>Offers valuable insights for training and development in HR settings</li>
                </ul>
            </section>
            <section className="about__applications">
                <h2>Applications of Moodmeter.ai</h2>
                <p>
                    The applications of Moodmeter.ai are diverse and impactful across various sectors:
                </p>
                <ul>
                    <li>Enhancing emotional intelligence in business meetings and team collaborations</li>
                    <li>Supporting mental health professionals in teletherapy sessions</li>
                    <li>Enriching online learning experiences by assessing student engagement</li>
                    <li>Improving customer interactions and satisfaction in service industries</li>
                </ul>
            </section>
            <section className="about__future-vision">
                <h2>Our Future Vision</h2>
                <p>
                    At Moodmeter.ai, we are committed to continuous innovation and expansion. Our future roadmap includes integrating more
                    sophisticated AI algorithms for nuanced emotion recognition, expanding our market reach to include new sectors, and
                    enhancing user experience with intuitive features.
                </p>
            </section>
        </div>
    );
}

export default About;
