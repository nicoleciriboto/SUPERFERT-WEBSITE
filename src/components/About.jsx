import React from 'react'
import '../styles/About.css'
import img1 from '../imgs/maizeman.jpg'


const About = () => {
    return (
        <div>
            <section className="about-hero">
                <div className="about-overlay">
                    <div className="about-container">
                        <h1>Who we are.</h1>
                        <button onClick={() => {
                            document.getElementById('main-about').scrollIntoView({ behavior: 'smooth' });
                        }}>More Info ↓</button>
                    </div>
                </div>
            </section>

            <section className="main-about" id='main-about'>
                <div className="about-text2">
                    <h2>About Us</h2>
                    <p>Proudly Zimbabwean Superfert Fertilizer is locally manufactured at our state of the art processing plant in Bindura. Only the highest quality inputs are used across our range to ensure a dependable first-rate product with results that speak for themselves.</p>

                    <p>We operate nationwide in association with experienced third party distributors of agricultural inputs. Our internal transport and logistics division provides consistently reliable stock levels to large commercial and corporate farming enterprises nationwide, as well as retail outlets ensuring our retail partners are able to provide easily accessible and competitively priced fertilizers to all rural and small scale farmers.
                        Our in-house agronomist and agronomy partners are available to our customers both directly and through social media so that Zimbabwe’s farmers have the opportunity to get first hand technical advice and the best chance at achieving the highest yields possible.</p>

                    <p>We provide fertilizers for a large number of demonstration plots in affiliation with various Seed Houses to promote the best input package for various sectors and agricultural regions. Superfert also work with Government Agencies such as Agritex and other technical institutions supporting field days and learning programs and have various interactions with the Federation of Young Farmers Clubs of Zimbabwe.</p>
                </div>

            <img src={img1} alt="" />
            </section>
        </div>
    )
}

export default About
