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
    import { useTranslation } from 'react-i18next';

    export default function Home(props) {
        const { t } = useTranslation();

        const handleClick = () => {
            const targetElement = document.getElementById('toknow');
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          };
        
        return (
            <section>
                <div className="welcome">
                    <h1>{t('home.welcome-title')}</h1>
                    <h2>{t('home.welcome-subtitle')}</h2>
                </div>
                <div className='firstImg'>
                    <img className='frontImg' src={frontImg}  alt={t('home.img-alt')}></img>
                </div>
                <div className='sectionSeperate'>
                    <h1>{t('home.mission-title')}</h1>
                </div>
                <blockquote>
                    <h2 id="ourMission">
                        {t('home.mission-content')}
                    </h2>
                </blockquote>
                <div id="toknow" className='sectionSeperate'>
                    <h1>{t('home.know.title')}</h1>
                </div>
                <h2 id="alarmingSitu"><b>{t('home.know.thing1')}</b></h2>
                <h2 id="alarmingSitu">{t('home.know.detail1')}</h2>
                <h2 id="alarmingSitu"><b>{t('home.know.thing2')}</b></h2>
                <h2 id="alarmingSitu">{t('home.know.detail2')}</h2>
                <h2 id="alarmingSitu"><b>{t('home.know.thing3')}</b></h2>
                <h2 id="alarmingSitu">{t('home.know.detail3')}</h2>
                <h2 id="alarmingSitu"><b>{t('home.know.thing4')}</b></h2>
                <h2 id="alarmingSitu">{t('home.know.detail4')}</h2>
                
                <div className='img-container'>
                    <div className='secondImg'>
                        <img className='secondImg' src={garbageImg} alt={t('home.know.img-alt1')}></img>
                    </div>
                    <div className='thirdImg'>
                        <img className='thirdImg' src={garbageImgTwo} alt={t('home.know.img-alt2')}></img>
                    </div>
                </div>

                <div className='sectionSeperate'>
                    <h1>{t('home.learn.title')}</h1>
                </div>
                <h2 id="videoDesc">{t('home.learn.content')}<b>{t('home.learn.important')}</b>.</h2>
                <div className='fourthImg'>
                    <img className='fourthImg' src={typeImg} alt={t('home.learn.img-alt')}></img>
                </div>
                <h2 id="videoDesc">{t('home.learn.video-desc')}</h2>
                <div className="guidelineVideo">
                {/* <iframe src="https://www.youtube.com/embed/1bJ5qJljiHM?si=RPeLw8BhyrUK9R3F" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                <iframe src="https://www.youtube.com/embed/1bJ5qJljiHM" title="YouTube video player"></iframe>
                </div>
                
                <div className='sectionSeperate'>
                    <h1>{t('home.do.title')}</h1>
                </div>
                <div className="card-deck">                    
                    <Link to="/Home" className='link-no-underline' aria-label={t('nav-bar.link.home')} onClick={handleClick}>
                        <div className="card">
                            <img className="card-img-top" src={learning} alt={t('home.do.img-alt1')}></img>
                            <div className="card-body">
                            <h5 className="card-title pHomeCenter">{t('home.do.thing1')}</h5>
                            <p className="card-text">{t('home.do.detail1')}</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/GarbageBank" className='link-no-underline' aria-label={t('nav-bar.link.bank')}>
                        <div className="card">
                        <img className="card-img-top" src={garbageBin} alt={t('home.do.img-alt2')}></img>    
                        <div className="card-body">
                            <h5 className="card-title pHomeCenter">{t('home.do.thing2')}</h5>
                            <p className="card-text">{t('home.do.detail2')}</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/EventSubscriptionForm" className='link-no-underline' aria-label={t('nav-bar.link.join-us')}>
                        <div className="card">
                        <img className="card-img-top" src={community} alt={t('home.do.img-alt3')}></img>
                        <div className="card-body">
                            <h5 className="card-title pHomeCenter">{t('home.do.thing3')}</h5>
                            <p className="card-text">{t('home.do.detail3')}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        )
    }