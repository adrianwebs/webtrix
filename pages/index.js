import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Head from 'next/head'
import Link from 'next/link'

import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import DiamondIcon from '@mui/icons-material/Diamond';
import Engineering from '@mui/icons-material/Engineering';

import { loginWithFacebook, onAuthStateChangedUser } from '../firebase/client'

import { useState, useEffect } from 'react';

import { motion } from 'framer-motion'

const sections = ['Features', 'Prices', 'Reviews', 'FAQ', 'Contact']

export default function Home() {

  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChangedUser(setUser)
  }, [])
  

  const handleLogin = () => {
    loginWithFacebook().then(user => {
      const {avatar, username} = user
      setUser(user)
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className={styles.container}>
        <nav className={styles.landing_navbar}>
          <div className={styles.landing_navbar_logo}><span>WEBTRIX</span></div>
          <ul className={styles.landing_navbar_items}>
            {sections.map((section, index) => (
              <li key={index}><a className={styles.landing_navbar_item} href={'#' + section} >{section}</a></li>
            ))}
          </ul>
          <div className={styles.landing_navbar_features}>
            {
              user === null && <button className={styles.landing_navbar_signup} onClick={handleLogin}>Member Area</button>
            }
            {
              user && user.avatar &&

              <motion.div
                animate={{opacity: [0, 1]}}
                transition={{ ease: 'easeInOut', duration: 0.3}}
              >
                <img src={user.avatar} />
                <strong>{user.username}</strong>
              </motion.div>
            }
          
          </div>
            </nav>
        <header className={styles.landing_header_content}>
          <div className={styles.landing_header_title}>
            <h1><strong>Webtrix</strong> is a professional Lifestyle Website with Responsive Design, Professional Looking, Ecommerce Ready & Easy to Use, Unlimited Color Options, Custom Logo and more!</h1>
            <button>Read More</button>
          </div>
          <div className={styles.landing_header_image}>
            <img src='assets/images/hero.png'/>
          </div>
        </header>

        <main id='Features' className={styles.landing_main_container}>
          <div className={styles.landing_main_content}>
            <h2>Services that <span>WEBTRIX</span> offers</h2>
            <h3> More and more websites are coming into being, but it's hard to get a professional web design. Webstartic provide the one-click web page design service and makes your web page design idea into reality!</h3>
          </div>
          <div className={styles.landing_main_items}>
            <div className={styles.landing_main_box}>
              <div className={styles.landing_main_icon}><AutoAwesomeMosaicIcon fontSize='large' /></div>
              <span>I</span>
              <h3>Template Customize</h3>
              <h4>Create digital experiences that resonate with your target audience without touching any code. All on a single screen.</h4>
            </div>
            <div className={styles.landing_main_box}>
              <div className={styles.landing_main_icon}><DiamondIcon fontSize='large' /></div>
              <span>II</span>
              <h3>Brand Design</h3>
              <h4>We specialize in bringing luxury brands to life with pioneering designs and cutting edge technology.</h4>
            </div>
            <div className={styles.landing_main_box}>
              <div className={styles.landing_main_icon}><Engineering fontSize='large' /></div>
              <span>III</span>
              <h3>Website Maintenance</h3>
              <h4>We make sure your website stays updated, backed up, and secure, so you can focus on growing your business.</h4>
            </div>
          </div>
        </main>
        <section id='Prices' className={styles.landing_prices_container}>
          <div className={styles.landing_prices_content}>
            <h2>Plans & Pricing</h2>
            <h3>30 days money back guarantee. No Credit Card Required!</h3>
          </div>
          <div className={styles.landing_prices_packages}>
            <div className={styles.landing_prices_pack}>
              <div className={styles.landing_prices_header}>
                <h4>Basic Pack</h4>
                <p><span>19</span>.99 €</p>
                <span>Monthly</span>
              </div>
              <div className={styles.landing_prices_feature}>
                <h5>Website <strong>Maintenance</strong></h5>
                <h5>Up to <strong>5 Changes</strong> per Month</h5>
                <h5>Template <strong>Customization</strong></h5>
                <h5><strong>24/7</strong> Live Support</h5>
                <h5>Setup <strong>Guideline</strong></h5>
              </div>
              <button>Subscribe Now</button>
            </div>
            <div className={styles.landing_prices_pack}>
              <div className={styles.landing_prices_header}>
                <h4>Standard Pack</h4>
                <p><span>29</span>.99€</p>
                <span>Monthly</span>
              </div>
              <div className={styles.landing_prices_feature}>
                <h5>Website <strong>Maintenance</strong></h5>
                <h5>Up to <strong>10 Changes</strong> per Month</h5>
                <h5>Template <strong>Customization</strong></h5>
                <h5><strong>24/7</strong> Live Support</h5>
                <h5>Setup <strong>Guideline</strong></h5>
                <h5>Brand Logo <strong>Design</strong></h5>

              </div>
              <button>Subscribe Now</button>
            </div>
            <div className={styles.landing_prices_pack}>
              <div className={styles.landing_prices_header}>
                <h4>Standart Pack</h4>
                <p><span>39</span>.99€</p>
                <span>Monthly</span>
              </div>
              <div className={styles.landing_prices_feature}>
                <h5>Website <strong>Maintenance</strong></h5>
                <h5><strong>+10 Changes</strong> per Month</h5>
                <h5>Template <strong>Customization</strong></h5>
                <h5><strong>24/7</strong> Live Support</h5>
                <h5>Setup <strong>Guideline</strong></h5>
                <h5>Brand Logo <strong>Design</strong></h5>
                <h5>Help in <stong>SEO</stong></h5>
              </div>
              <button>Subscribe Now</button>
            </div>
          </div>
        </section>
        <section id='Reviews' className={styles.landing_reviews_container}>
          <div className={styles.landing_reviews_title}>
            <h3>Check what our clients are saying</h3>
            <h4>We place huge value on strong relationships and have seen the benefit they brings to our business. Customer feedback is vital in helping us to get it right.</h4>
          </div>
          <div className={styles.landing_reviews}>
            <div className={styles.landing_reviews_content}>
              <div><img src='/assets/images/Jenny Wilson.png' /></div>
              <div className={styles.landing_review}>
                <p>I am Webtrix's longest standing customer and I really can’t express how much it has helped my business grow. In the past, I had to spend a lot of time trying to figure out how to keep my website alive and looking good. Now with Webtrix, I have time left over for all the other aspects of my business that I need to</p>
                <div className={styles.landing_review_rating}>Star</div>
                <h5>Jenny Wilson</h5>
                <p>Event Manager</p>
              </div>
            </div>
            
            <div className={styles.landing_reviews_content}>
              <div className={styles.landing_reviews_image}><img src='/assets/images/Albert Didier.png' /></div>
              <div className={styles.landing_review}>
                <p>I love Webtrix so much! I'm a small business owner who does not have a lot of time to update my website, and Webtrix is perfect for me. It's just so easy to log in and make updates to my site whenever I need to. There are plenty of design templates that are super easy to edit, too.</p>
                <div className={styles.landing_review_rating}>Star</div>
                <h5>Albert Didier</h5>
                <p>Restaurant owner</p>
              </div>
            </div>
          </div>
          <div>Controles</div>
        </section>
        <section id='#faq' className={styles.landing_faq_container}>
          <div className={styles.landing_faq_title}>
            <h2>Frequented Asked Questions</h2>
            <h3>Be sure you understand how we work and fix all your doubts here with the questions the clients usually have or contact us!</h3>
          </div>
          <div className={styles.landing_faq_content}>
            <div className={styles.landing_faq_item}>
              <h4>Question</h4>
              <h5>Answer</h5>
            </div>
          </div>
        </section>
        <section id='#contact' className={styles.landing_contact_container}>
          <div className={styles.landing_contact_content}>
            <div className={styles.landing_contact_text}>
              <h3>Why Choose Use</h3>
              <h4>Partiality On or Continue in the particular principles</h4>
              <p>Contact Us so we can help you on setting up your business and offer you the best prices</p>
            </div>
            <form className={styles.landing_contact_form}>
              <input placeholder='Name' />
              <input placeholder='Email' type='email' />
              <textarea placeholder='Message' />
              <button>Submit</button>
            </form>
          </div>
        </section>
        <footer className={styles.landing_footer_container}>
          <div className={styles.landing_footer_content}>
            <div className={styles.landing_footer_social}>
              <img />
              <span>Online helps companies managing their website business easily.</span>
              <div className={styles.landing_footer_apps}>Redes</div>
            </div>
            <div className={styles.landing_footer_navbar}>
              <p>Navbar</p>
              <ul className={styles.landing_bottomnavbar_items}>
              {sections.map((section, index) => (
                <li key={index}><a className={styles.landing_botomnavbar_item} href={'#' + section} >{section}</a></li>
              ))}
              </ul>
            </div>
            <div className={styles.landing_footer_newsletter}>
              <form>
                <input placeholder='Email' />
                <button>Subscribe</button>
              </form>
              <span>Will send you monthly updates for your better website management.</span>
            </div>            
          </div>
         <br />
        <span>Copyright @Webtrix 2022. All Rights Reserved.</span> 
        </footer>
        
    </div>
  )
}
