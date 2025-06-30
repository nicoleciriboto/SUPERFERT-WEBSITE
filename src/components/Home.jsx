import React from 'react'
import logo from '../imgs/logo.png'
import banner from '../imgs/banner.png'
import seedcologo from '../imgs/seedco_logo 2.png'
import stark from '../imgs/stark.png'
import national from '../imgs/national-tested.png'
import fsg from '../imgs/fsg.jpg'
import about from '../imgs/about-us1.png'
import maize from '../imgs/maizeman.jpg'
import line2 from '../imgs/Line 2.png'
import bags from '../imgs/superfert-bags.png'
import menu from '../imgs/maizemenu.PNG'
import '../styles/Home.css'

const Home = () => {
    return (
        <div>
            <div className="container">
                <img src={logo} alt="Logo" className='logo' />
                <div className="header">
                    <img src={banner} alt="Banner" />
                    <h1>The Formula <br /> for Success, <br /> naturally.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor <br />incididunt.</p>
                </div>
                <div className="buttons">
                    <button className='btn' onClick={() => {
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}>Contact Us</button>
                    <button className='btn2' onClick={() => {
                        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
                    }}>Products    →</button>
                </div>
                <div 
                className="scroll" onClick={() => {
                    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }}>
                    <p>SCROLL ↓</p>
                </div>

            </div>


            <div className="content">
                <h3>Fertilisers. Seed. Grain</h3>
                <p>SuperFert Fertilizer is powered by the FSG Company and is a proud partner of</p>

                <div className="content-items">
                    <div className="content-cards">
                        <img src={seedcologo} alt="" />
                        <img src={stark} alt="" />
                        <img src={national} alt="" />
                        <img src={fsg} alt="" />
                        <img src={seedcologo} alt="" />
                    </div>
                </div>
            </div>

            <div className="about" id="about">
                <img src={about} alt="" />
                <div className="home-overlay"></div>
                <div className="about-text">
                    <h2>Made on Zimbabwean soil, <br /> for Africa's soil</h2>
                    <p>SuperFert Fertilizer is manufactured in Zimbabwe, <br />and proudly serves to enrich the soils of Africa.</p>
                </div>
                <div className="divider">
                    <span className='line'></span>
                </div>
            </div>

            <div className="offers">
                <div className="divider2">
                    <span className='line2'></span>
                </div>

                <div className="offers-content">
                    <h2>Who We Are.</h2>
                    <p>We operate nationwide in association with experienced third <br />party distributors of agricultural inputs. Our internal transport <br />and logistics division provides consistently reliable stock levels <br />to large commercial and corporate farming enterprises <br />nationwide, as well as retail outlets ensuring our retail partners <br />are able to provide easily accessible and competitively priced <br />fertilizers to all rural and small scale farmers.</p>
                    <button className='offers-btn' onClick={() => navigate('/About')
                    }>Read More</button>
                </div>
                <img src={maize} alt="" />

            </div>

            <section className="products">
                <img src={logo} alt="" className='pro-logo'/>
                <h1>SuperFert Products.</h1>
                <div className="products-row">
                    <div className="products-text">
                        <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua. Ut <br />enim ad minim veniam, quis nostrud <br />exercitation ullamco laboris nisi ut aliquip ex ea <br />commodo consequat. Duis aute irure dolor in <br />reprehenderit in voluptate velit esse cillum <br />dolore eu fugiat nulla pariatur.</p>
                        <button className='products-btn'>More Info</button>
                    </div>
                    <div className="product-img">
                        <img src={bags} alt="" className='products-img' />
                    </div>
                </div>
            </section>

            <section className="product-section" id="products">
                <div className="product-grid">
                    <div className="card">
                        <img src={menu} alt="" />
                        <h3>Tobacco Fertilizer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore.</p>
                        <button className="grid-btn">More Info <span>→</span></button>
                    </div>
                    <div className="card">
                        <img src={menu} alt="" />
                        <h3>Tobacco Fertilizer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore.</p>
                        <button className="grid-btn">More Info <span>→</span></button>
                    </div>
                    <div className="card">
                        <img src={menu} alt="" />
                        <h3>Tobacco Fertilizer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore.</p>
                        <button className="grid-btn">More Info <span>→</span></button>
                    </div>
                    <div className="card">
                        <img src={menu} alt="" />
                        <h3>Tobacco Fertilizer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore.</p>
                        <button className="grid-btn">More Info <span>→</span></button>
                    </div>
                    <div className="card">
                        <img src={menu} alt="" />
                        <h3>Tobacco Fertilizer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore.</p>
                        <button className="grid-btn">More Info <span>→</span></button>
                    </div>
                    <div className="card">
                        <img src={menu} alt="" />
                        <h3>Tobacco Fertilizer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore.</p>
                        <button className="grid-btn">More Info <span>→</span></button>
                    </div>
                </div>
            </section>

            <section className="contact-section" id="contact">
                <div className="contact-left">
                    <h1>For <br />Queries, or <br />Inquiries.</h1>
                    <p>Get in touch with us</p>
                </div>

                <div className="contact-right">
                    <form className="contact-form">
                        <input type="text" placeholder="Full Name *" required />
                        <input type="email" placeholder="Email Address *" required />
                        <textarea placeholder="Your Message *" required></textarea>
                        <div className="form-btns">
                            <button type='submit' className='submit-btn'>Send Message</button>
                            <button type='reset' className='reset-btn'>Clear</button>
                        </div>
                    </form>
                    <div className="contact-info">
                        <p>75A Kew Drive, Highlands <br />Harare, Zimbabwe</p>
                        <p>Telephone: +263 772 143 243/4/5/6</p>
                        <p>Email: sales@fsg.co.zw</p>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
