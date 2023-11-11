import "./Home.scss";
import Navbar from "../../components/Navbar";
import LandingImage from "../../assets/jk.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [name, setName] = useState("");

    return (
        <div className="home">
            <Navbar />
            <div className="home__body">
            <div className="home__body__image">
                    <img src={LandingImage} />
                </div>
                <div className="home__body__content">
                    <div className="home__body__content__title">AI Meets Emotion😊</div>
                    <div className="home__body__content__description">Elevating Video Chats with Sentiment Understanding</div>
                    <div className="home__body__content__subtitle">Rediscover the human connection in every virtual meeting with MoodMeter.AI . where emotions are as visible as the words spoken. Enriching Video Chats with Empathetic Insights.</div>

                    <input
                        placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={`${error && "home__body__content__inputerror"}`}
                    />
                    <button
                        onClick={() => {
                            if (name.length === 0) {
                                setError(true);
                                console.log("error set")
                            } else {
                                setError(false);
                                navigate(
                                    "/call",
                                    {
                                        state: {
                                            username: name
                                        }
                                    }
                                );
                            }
                        }}
                    >
                        Join a meeting
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Home;
