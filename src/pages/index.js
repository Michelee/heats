import React from 'react'

import Layout from '../components/ui/layout'
import Button from '../components/ui/button'
import Application1 from '../images/application-1.png'
import Application2 from '../images/application-2.png'
import Application3 from '../images/application-3.png'
import '../styles/pages/index.scss'

const applicationsItems = [
  {"title": "Catering", "image": Application1, "description": "Patented “heat curve” keeps food at 150° without continuing to cook. Maintains kitchen fresh quality and texture for up to 2 hours." },
  {"title": "Drop-Off Delivery", "image": Application2, "description": "H°EATS enables consumers to enjoy a hot, quality restaurant meal from the comfort of their own home."},
  {"title": "Heat & Eat", "image": Application3, "description": "H°EATS' proprietary compound and packaging can be used to heat up any individual retail product on the spot, and keep it hot for up to 2 hours."}
]

const IndexPage = () => (
  <Layout>
    <div className="main-container">
      <div name="home" className="title-container">
        <span>Introducing H°EATS</span>
        <h1>Kitchen fresh quality, 2 hours after it leaves the kitchen</h1>
        <p>Smart. Safe. Simple. A Revolution in Flame-Free Heating.</p>
        <div className="btn-container">
          <Button
            label="Download our product info"
          />
        </div>
      </div>
      <div name="application" className="applications section">
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
          
        </div>
      </div>
      <div name="about" className="about section">
        <h2>About</h2>
        <p>Being in foodservice for over 30 years, keeping “hot food hot” in delivery, catering and remote operations was an on-going frustration.  Most solutions were expensive or dangerous and relied on power, flame or caustic materials.  
          Unable to control the heat, food quality suffered and safety risks rose.  We continued to throw labor at the problem, trying to manage transport and set-up to compensate for the quality control we couldn’t get with canned fuel or equipment.   With guests and clients demanding hot food in a growing number of mobile, delivered and remote formats, we were losing even more control over final quality.  The need for better, smarter heating and holding solutions, well.. heated up fast.
          We decided to re-think how we heat food, keep it kitchen-fresh and make it mobile to keep pace with today’s operations and culinary demands. After some deep exploration into exothermic heat science, we developed a way to create instant spot heat that was safe – but also controllable - and that could go the distance during service periods. 
          We are excited to introduce H°EATS, the only flame-free heat source made from natural minerals and plant-based materials. H°EATS can be engineered to particular heat curve needs for heat & eat, or heat & hold.   Powered by Lava Gel, a patented technology proven in the beauty and spa industry for over a decade, our group is adapting the Lava Gel technology for use in foodservice and retail food industries worldwide.  
          Our first products are aimed at foodservice operators and deliver 2 hours of hold time and keep quality kitchen-fresh throughout.  Other foodservice heat & hold products and retail heat & eat packaging are in development.
          Together, H°EATS and Lava Gel can transform the way we enjoy “hot food hot” by unplugging, elevating and mobilizing heated food and beverage experiences.   We’re working closely with chefs, operators and chains using H°EATS products to improve and develop new  powered by Lava Gel products that safer, smarter and better.  
          Join our H°EATS advisory forum…. (link to email inquiry)</p>
      </div>
      <div name="contact" className="contact section">
        <h2>Contact Us</h2>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor <br /> 
          incididunt ut labore et dolore magna aliqua.</p>
        <div className="contact-form">
          <input type="text" placeholder="Enter email address" />
          <Button 
            label="Subscribe"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
