import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Head from 'next/head'

import Link from 'next/link'

import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import DiamondIcon from '@mui/icons-material/Diamond';
import Engineering from '@mui/icons-material/Engineering';

const sections = ['Features', 'Prices', 'Reviews', 'FAQ', 'Contact']

export default function Home() {


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
            <select className={styles.landing_navbar_languages} defaultValue='English'>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
            <button className={styles.landing_navbar_signup}>Sign Up</button>
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
        <section id='Prices'>
          <div className={styles.landing_prices_content}>
            <h2>Services that WEBTRIX offers</h2>
            <h3> More and more websites are coming into being, but it's hard to get a professional web design. Webstartic provide the one-click web page design service and makes your web page design idea into reality!</h3>
          </div>
          <div className={styles.landing_prices_packages}>
            <div className={styles.landing_prices_pack}>
              <h4>Titulo</h4>
              <div className={styles.landing_prices_feature}>
                <h5>Incluye mantenimiento web bla bla bla</h5>
              </div>
              <span>Precio</span>
            </div>
            <div className={styles.landing_prices_pack}>
              <h4>Titulo</h4>
              <div className={styles.landing_prices_feature}>
                <h5>Incluye mantenimiento web bla bla bla</h5>
              </div>
              <span>Precio</span>
            </div>
            <div className={styles.landing_prices_pack}>
              <h4>Titulo</h4>
              <div className={styles.landing_prices_feature}>
                <h5>Incluye mantenimiento web bla bla bla</h5>
              </div>
              <span>Precio</span>
            </div>
          </div>
        </section>
        <section id='#reviews'>
          <div className={styles.landing_reviews_title}>
            <h3>Testimonials</h3>
            <h4>Check what our clients are saying</h4>
          </div>
          <div className={styles.landing_reviews_content}>
            <div><img /></div>
            <div className={styles.landing_review}>
              <span>''</span>
              <h5>Titulo review</h5>
              <p>Descripcion</p>
              <div className={styles.landing_review_rating}>Star</div>
              <h5>Nombre</h5>
              <p>Empresa</p>
            </div>
          </div>
          <div>Controles</div>
        </section>
        <section id='#faq'>
          <div className={styles.landing_faq_title}>
            <h2>Services that WEBTRIX offers</h2>
            <h3> More and more websites are coming into being, but it's hard to get a professional web design. Webstartic provide the one-click web page design service and makes your web page design idea into reality!</h3>
          </div>
          <div className={styles.landing_faq_content}>
            <div className={styles.landing_faq_item}>
              <h4>Question</h4>
              <h5>Answer</h5>
            </div>
          </div>
        </section>
        <section id='#contact'>
          <div className={styles.landing_contact_content}>
            <div className={styles.landing_contact_text}>
              <h3>Why Choose Use</h3>
              <h4>Partiality On or Continue in the particular principles</h4>
              <p>Contact Us so we can help you on setting up your business and offer you the best prices</p>
            </div>
            <form>
              <input placeholder='Name' />
              <input placeholder='Email' />
              <textarea placeholder='Message' />
            </form>
          </div>
        </section>
        <footer>
          <div className={styles.landing_footer_social}>
            <img />
            <span>Online helps companies managing their website business easily.</span>
            <div className={styles.landing_footer_apps}>Redes</div>
          </div>
          <div className={styles.landing_footer_navbar}></div>
          <div className={styles.landing_footer_newsletter}>
            <form>
              <input placeholder='Email' />
              <button>Subscribe</button>
            </form>
            <span>Will send you monthly updates for your better website management.</span>
          </div>
        </footer>
        <br />
        <span>Copyright @Webtrix 2022. All Rights Reserved.</span>
    </div>
  )
}
