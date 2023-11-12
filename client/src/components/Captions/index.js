import React, { useState, useEffect } from 'react';
import './Captions.scss';

const Captions = () => {
    const [transcript, setTranscript] = useState('');
    const [listening, setListening] = useState(false);
    const [conversation, setConversation] = useState([]);
    
    let recognition;

    useEffect(() => {
        // Check for browser support
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.error("Your browser does not support the Web Speech API");
            return;
        }

        // Initialize recognition
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        // Event handlers
        recognition.onresult = (event) => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                interimTranscript += transcript;
            }
            const converse = conversation.push(interimTranscript)
            setTranscript(interimTranscript);
            setConversation(conversation => [...conversation, interimTranscript]);
        };

        recognition.onend = () => {
            if (listening) {
                recognition.start();
            }
        };

        // Start recognition if listening
        if (listening) {
            recognition.start();
        }

        // Cleanup function
        return () => {
            recognition.stop();
        };
    }, [listening]);

    useEffect(()=>{
        console.log(conversation)
    },[conversation])

    const toggleListening = () => {
        if (listening) {
            recognition.stop();
        } else {
            recognition.start();
        }
        setListening(!listening);
    };
    useEffect(()=>{
        recognition.start()
    },[])
    return (
        <div>
            <p className='containerCaptions'>Captions: {transcript}</p>
        </div>
    );
};

export default Captions;