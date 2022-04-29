import React, {useState, useEffect} from 'react'

import { motion } from 'framer-motion'

import { FacebookOutlined, Twitter, Google } from '@mui/icons-material'

import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.css'

import { loginWithFacebook, loginWithGoogle, loginWithTwitter, onAuthStateChangedUser, signOutUser } from '../../firebase/client'
import { Hidden } from '@mui/material'
import useUser from '../../hooks/useUser'

function index() {

    const user = useUser()
    const router = useRouter()

    useEffect(() => {
      user && router.replace('/home')
    }, [user])

    const handleFacebook = () => {
        loginWithFacebook().catch(err => {
            console.log(err)
        })
    }

    const handleTwitter = () => {
        loginWithTwitter().catch(err => {
            console.log(err)
        })
    }

    const handleGoogle = () => {
        loginWithGoogle().catch(err => {
            console.log(err)
        })
    }

    

  return (
    <div className={styles.login_container}>
        <div className={styles.login_content}>
            <div className={styles.login_title}>
                <h2>WEBTRIX</h2>
                <h3>Login</h3>    
            </div>
            <div className={styles.login_data}>
                {
                    user === null &&
                
                    <div className={styles.login_data}>
                        <label>Email Address</label>
                        <input placeholder='Type your Email' id='email' type='email'></input>
                        <label>Password</label>
                        <input placeholder='Type your Password' id='password' type='password'></input>
                        <a>Forgot password?</a>    
                        <button className={styles.login_button}>Login</button>
                        <span>Or Sign Up Using</span>
                        <div className={styles.login_buttons}>
                            <button onClick={handleFacebook} className={styles.login_facebook}><FacebookOutlined /></button>
                            <button onClick={handleTwitter} className={styles.login_twitter}><Twitter /></button>
                            <button onClick={handleGoogle} className={styles.login_google}><Google /></button>
                        </div>
                    </div>
                }
                {
                    user === undefined && <img src='/spinner.gif' />
                }
                
            </div>
            <div className={styles.login_footer}>
                <span>Don't have an account yet?</span>
                <a href='#'>Register your Email</a>
            </div>
        </div>
    </div>
  )
}

export default index