import React from 'react';
import { Link } from "react-router-dom";
import'../index.css';
import frontImg from './assets/frontNew.png';
import garbageImg from './assets/garbageSituation.jpg';
import garbageImgTwo from './assets/garbageSituation_2.jpg';
import garbageBin from './assets/garbagebin.png';
import learning from './assets/learning.png';
import community from './assets/community.png';
import typeImg from './assets/types_1.png';

export default function Home(props) {
    return (
        <section>
            <div className="welcome">
                <h1>Welcome to UNiCycle!</h1>
                <h2>Where we help you with waste management and make world a better place</h2>
            </div>
            <div className='firstImg'>
                <img className='frontImg' src={frontImg}  alt='waste management'></img>
            </div>
            <div className='sectionSeperate'>
                <h1>Our Mission</h1>
            </div>
            <blockquote><h2 id="ourMission">Our mission is to empower international students at the University of Washington with practical waste management knowledge. We strive to create awareness and provide resources that encourage students to classify waste properly. Through education and engagement, we aim to foster a community of environmentally conscious individuals who contribute to sustainable practices and make a positive impact on our campus and beyond.</h2></blockquote>
            <div className='sectionSeperate'>
                <h1>What we should know</h1>
            </div>
            <h2 id="alarmingSitu"><b>Rapid Increase in Material Production and Waste:</b></h2>
            <h2 id="alarmingSitu">As the global population and economy grow, the production of materials like plastics, paper, and aluminum has significantly increased. Without proper waste management, this leads to a considerable rise in mismanaged waste, polluting ecosystems like rivers, lakes, and the ocean.</h2>
            <h2 id="alarmingSitu"><b>Staggering Plastic Pollution in Oceans:</b> </h2>
            <h2 id="alarmingSitu">An estimated 75 to 199 million tons of plastic waste currently reside in our oceans, with an additional 33 billion pounds of plastic entering the marine environment annually. This overwhelming amount of plastic, which includes the vast Great Pacific Garbage Patch, is too much for the existing waste management and recycling infrastructure to handle.</h2>
            <h2 id="alarmingSitu"><b>Exponential Growth of Plastic Production:</b></h2>
            <h2 id="alarmingSitu">Since its inception in the early 20th century, plastic production has skyrocketed, from 2 million tonnes per year in 1950 to 460 million metric tons in 2019. A total of 9.5 billion metric tons of plastic were produced from 1950 to 2019, with about 7 billion metric tons becoming waste, half of which are single-use products.</h2>
            <h2 id="alarmingSitu"><b>Impact on Marine Life:</b></h2>
            <h2 id="alarmingSitu">It is estimated that over 1 million marine animals, including sea turtles, die each year due to plastic pollution in the ocean. The majority of the victims are seabirds, with marine mammals also significantly affected but less visible in media reports.</h2>
            
            <div className='img-container'>
                <div className='secondImg'>
                    <img className='secondImg' src={garbageImg} alt='garbageSituation'></img>
                </div>
                <div className='thirdImg'>
                    <img className='thirdImg' src={garbageImgTwo} alt='garbageSituationTwo'></img>
                </div>
            </div>

            <div className='sectionSeperate'>
                <h1>What we should learn</h1>
            </div>
            <h2 id="videoDesc">According to UW disposal guiline, there are three main types of waste: <b>recycle, compost, and landfill</b>.</h2>
            <div className='fourthImg'>
                <img className='fourthImg' src={typeImg} alt='typesOfGarbage'></img>
            </div>
            <h2 id="videoDesc">Let's see how different waste are categorized and processed after we dispose them.</h2>
            <div className="guidelineVideo">
            <iframe src="https://www.youtube.com/embed/1bJ5qJljiHM?si=RPeLw8BhyrUK9R3F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='sectionSeperate'>
                <h1>What we should do</h1>
            </div>
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src={learning} alt="Card image"></img>
                    <div className="card-body">
                    <h5 className="card-title pHomeCenter">Learn the Knowledge</h5>
                    <p className="card-text">Learn the urgent situation of global environmental health and the garbage disposal guideline of King County. </p>
                    </div>
                </div>
                <div className="card">
                <img className="card-img-top" src={garbageBin} alt="Card image"></img>    
                <div className="card-body">
                    <h5 className="card-title pHomeCenter">Dispose in the Right Way</h5>
                    <p className="card-text">Categorize the garbage before desposing and dispose the garbage into the correct bin with the help of Waste Bank.</p>
                    </div>
                </div>
                <div className="card">
                <img className="card-img-top" src={community} alt="Card image"></img>    
                <div className="card-body">
                    <h5 className="card-title pHomeCenter">Contribute to Community</h5>
                    <p className="card-text">Join us to do community activity focused on environmental initiatives to contribute to the world around us.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}