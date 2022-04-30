import { useState, useEffect} from 'react'
import useUser from '../../hooks/useUser'

import { signOutUser } from '../../firebase/client'

import { motion } from 'framer-motion'

import HomeNavbar from '../../components/HomeNavbar/HomeNavbar'
import TrixTemplate from '../../components/TrixTemplate/TrixTemplate'

import styles from './styles.module.css'


function HomePage() {
    const user = useUser()

    const sections = ['1', '2','3', '4', '5', '6', '7', '8', '9']


    return (
    <div className={styles.home_container}>
        {
            user && 
            <HomeNavbar username={user.username} avatar={user.avatar} />
        }
        <div className={styles.home_content}>
            <div className={styles.home_searchBar}>
                <input placeholder='Search in your favourite templates...'></input>
                <select>
                    <option hidden selected>Category</option>
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
        </div>
    </div>
  )
}

export default HomePage