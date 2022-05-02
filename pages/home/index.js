import { useState, useEffect} from 'react'
import Head from 'next/head'

import useUser from '../../hooks/useUser'

import { signOutUser } from '../../firebase/client'

import { motion } from 'framer-motion'

import HomeNavbar from '../../components/HomeNavbar/HomeNavbar'
import TrixTemplate from '../../components/TrixTemplate/TrixTemplate'

import styles from './styles.module.css'


function HomePage() {
    const user = useUser()

    const sections = ['Restaurant Animated Landing Page', '2','3', '4', '5', '6', '7', '8', '9']

    return (
        <>
            <Head>
                <title>Dashboard - Webtrix</title>
                <meta name="description" content="Webtrix is one stop website solution provider, we offer cheap and quick contact, professional template customize with very useful features to various industries." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.home_container}>
                {
                    user && 
                    <HomeNavbar username={user.username} avatar={user.avatar} />
                }
                {
                    user && <motion.div className={styles.home_content}
                        animate={{opacity: [0,1]}}
                        initial={{opacity: 0}}
                        transition={{duration: 2}}
                    >
                        <div className={styles.home_searchBar}>
                            <input placeholder='Search in your favourite templates...'></input>
                            <select>
                                <option hidden selected>Category</option>
                                <option value='restaurant'>Restaurant</option>
                                <option value='restaurant'>Restaurant</option>
                            </select>
                        </div>
                        <div className={styles.home_gallery}>
                            {
                                sections.map((section, index) => (
                                    <TrixTemplate index={section} key={index} />
                                ))
                            }
                        </div>
                    </motion.div>
                }
            </div>
    </>
  )
}

export default HomePage