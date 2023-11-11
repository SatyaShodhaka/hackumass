import React from 'react';
import './About.scss'; // Ensure this SCSS file is created for styling

const About = () => {
    return (
        <div className="about">
            <h1>About MoodMeter.AI</h1>
            <section className="about__description">
                <p>
                    Moodmeter.ai is an innovative platform designed to revolutionize emotional analysis in video communications. 
                    Utilizing cutting-edge machine learning algorithms, Moodmeter.ai captures and interprets the sentiment of participants 
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
                    Moodmeter.ai is built with a combination of modern and robust technologies, ensuring reliability, efficiency, and scalability:
                </p>
                <ul>
                    <li>React.js for a responsive and interactive user interface</li>
                    <li>Node.js and Express.js for a powerful and efficient server-side architecture</li>
                    <li>Advanced machine learning models, primarily in Python, for accurate sentiment analysis</li>
                    <li>Agora SDK for seamless real-time video communication</li>
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
        </div>
    );
}

export default About;
