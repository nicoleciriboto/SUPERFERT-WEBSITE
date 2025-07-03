import React from 'react'
import '../styles/News.css'
import img1 from '../imgs/fertilizer.png'
import img2 from '../imgs/Line3.png'

const News = () => {
    return (
        <div>
            <section className="hero">
                <div className="overlay"></div>
                <div className="left-container">
                    <h1>News & Events.</h1>
                    <button onClick={() => {
                        document.getElementById('news').scrollIntoView({ behavior: 'smooth' });
                    }}>More Info ↓</button>
                    <div className="right-container">
                        <p>Next Events <b>| Roadshow // 27 May 2023</b></p>
                        <p>Lorem ipsum dolor sit amet, consectetur< br />adipiscing elit, sed do eiusmod tempor< br /> incididunt.</p>
                        <div className="event-date">
                            <p><strong>01</strong> / 04</p>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="news" id='news'>
                <h1>Latest News</h1>
                <img src={img2} alt="" className='news-img'/>

                <div className="news-grid">
                    <div className="news-card">
                        <img src={img1} alt="" />
                        <h4>Superfert is exhibiting at the ADMA Agricultural Show.</h4>
                        <p>Superfert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark Polo <br /> Grounds on the Mazowe Road. Come <br /> and have a...</p>
                        <button className='news-btn'>More Info ➜</button>
                    </div>
                    <div className="news-card">
                        <img src={img1} alt="" />
                        <h4>Superfert is exhibiting at the ADMA Agricultural Show.</h4>
                        <p>Superfert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark Polo <br /> Grounds on the Mazowe Road. Come <br /> and have a...</p>
                        <button className='news-btn'>More Info ➜</button>
                    </div>
                    <div className="news-card">
                        <img src={img1} alt="" />
                        <h4>Superfert is exhibiting at the ADMA Agricultural Show.</h4>
                        <p>Superfert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark Polo <br /> Grounds on the Mazowe Road. Come <br /> and have a...</p>
                        <button className='news-btn'>More Info ➜</button>
                    </div>
                    <div className="news-card">
                        <img src={img1} alt="" />
                        <h4>Superfert is exhibiting at the ADMA Agricultural Show.</h4>
                        <p>Superfert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark Polo <br /> Grounds on the Mazowe Road. Come <br /> and have a...</p>
                        <button className='news-btn'>More Info ➜</button>
                    </div>
                    <div className="news-card">
                        <img src={img1} alt="" />
                        <h4>Superfert is exhibiting at the ADMA Agricultural Show.</h4>
                        <p>Superfert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark Polo <br /> Grounds on the Mazowe Road. Come <br /> and have a...</p>
                        <button className='news-btn'>More Info ➜</button>
                    </div>
                    <div className="news-card">
                        <img src={img1} alt="" />
                        <h4>Superfert is exhibiting at the ADMA Agricultural Show.</h4>
                        <p>Superfert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark Polo <br /> Grounds on the Mazowe Road. Come <br /> and have a...</p>
                        <button className='news-btn'>More Info ➜</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default News
