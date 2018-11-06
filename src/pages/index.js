import React from 'react'

import Layout from '../components/ui/layout'
import Button from '../components/ui/button'
import ButtonSubmit from '../components/ui/buttonSubmit'
import Application1 from '../images/application-1.png'
import Application2 from '../images/application-2.png'
import Application3 from '../images/application-3.png'
import Product1 from '../images/product-1.jpg'
import Product2 from '../images/product-2.jpg'
import Product3 from '../images/product-3.jpg'
import HeatsFile from '../assets/Heats Product Information.pdf'
import OurStoryImg from '../images/our-story.png'
import '../styles/pages/index.scss'

const applicationsItems = [
  {"title": "Catering", "image": Application1, "description": "Patented “heat curve” keeps food at 150° without continuing to cook. Maintains kitchen fresh quality and texture for up to 2 hours." },
  {"title": "Drop-Off Delivery", "image": Application2, "description": "H°EATS enables consumers to enjoy a hot, quality restaurant meal from the comfort of their own home."},
  {"title": "Heat & Eat", "image": Application3, "description": "H°EATS' proprietary compound and packaging can be used to heat up any individual retail product on the spot, and keep it hot for up to 2 hours."}
]

const productItems = [
  {"name": "H’eats Half Pan tray", "image": Product1, "price": "$6.50" },
  {"name": "H’eats Round tray", "image": Product2, "price": "$6.50"},
  {"name": "Chafer Addapter, Half Pan", "image": Product3, "price": "$29.50"}
]

const IndexPage = () => (
  <Layout>
    <div className="main-container">
      <div name="home" className="title-container">
        <span>Introducing H°EATS</span>
        <h1>Kitchen fresh quality,<br />2 hours after it leaves the kitchen</h1>
        <p>Smart. Safe. Simple. A Revolution in Flame-Free Heating.</p>
        <div className="btn-container">
          <a href={HeatsFile} download className="btn">
            Download our product info
          </a>
        </div>
      </div>
      <div name="application" className="applications section">
        <h2>Applications</h2>
        {
          applicationsItems.map((item, index) => (
            <div className={`application-item 
            ${index % 2 === 0 ? '' : 'inverse'}`}>
              <img src={item.image} alt={`application-${index}`} />
              <div className="application-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div name="product" className="product section">
        <h2>Products lorem ipsum dolor</h2>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud.</p>
        <div className="inline-content">
          {
            productItems.map((item, index) => (
              <div className="product-box" key={index}>
                <img src={item.image} alt="product" />
                <span>{item.name}</span>
                <strong>{item.price}</strong>
              </div>
            ))
          }
        </div>
      </div>
      <div name="about" className="about section">
        <h2>Our Story</h2>
        <div className="inline-content">
          <img src={OurStoryImg} alt="our-story" />
          <p>Being in foodservice for over 30 years, keeping “hot food hot” in delivery, catering and remote operations was an on-going frustration. Most solutions were expensive or dangerous and relied on power, flame or caustic materials.
          We decided to re-think how we heat food, keep it kitchen-fresh and make it mobile to keep pace with today’s operations and culinary demands. After some deep exploration into exothermic heat science, we developed a way to create instant spot heat that was safe – but also controllable - and that could go the distance during service periods.
          We are excited to introduce H°EATS, the only flame-free heat source made from natural minerals and plant-based materials.  Our first products are aimed at foodservice operators and deliver 2 hours of hold time and keep quality kitchen-fresh throughout. Other foodservice heat & hold products and retail heat & eat packaging are in development.</p>
        </div>
      </div>
      <div name="contact" className="contact section">
        <h2>Contact Us</h2>
        <p>We're here to answer questions, solve complex <br /> problems, and spark new ideas. Drop us a line.</p>
        <form action="https://h-eats.us19.list-manage.com/subscribe/post?u=5e0f15b72e1100694a5ea9f1e&amp;id=07cafaff08" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div className="contact-form">
            <input id="mce-EMAIL" type="email" name="EMAIL" type="text" placeholder="Enter email address" required/>
            <ButtonSubmit 
              label="Submit"
            />
          </div>
          <div style={{'position': 'absolute', 'left': '-5000px'}} aria-hidden="true">
            <input type="text" name="b_5e0f15b72e1100694a5ea9f1e_07cafaff08" tabindex="-1" value="" />
          </div>
        </form>
      </div>
    </div>
  </Layout>
)

export default IndexPage
