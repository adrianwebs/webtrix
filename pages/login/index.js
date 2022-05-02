import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { FacebookOutlined, Twitter, Google } from '@mui/icons-material'

import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.css'

import { loginWithFacebook, loginWithGoogle, loginWithTwitter, onAuthStateChangedUser, signOutUser } from '../../firebase/client'
import { Hidden } from '@mui/material'
import useUser from '../../hooks/useUser'

function Login() {

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
      <>
        <Head>
            <title>Login - Webtrix</title>
            <meta name="description" content="Webtrix is one stop website solution provider, we offer cheap and quick contact, professional template customize with very useful features to various industries." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.login_container}>
            <div className={styles.login_content}>
                <div className={styles.login_title}>
                    <Link href='../'><a><h2>WEBTRIX</h2></a></Link>
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
                        user === undefined && <img src='/spinner.gif' alt='snipper'/>
                    }
                    
                </div>
                <div className={styles.login_footer}>
                    <span>Don&apos;t have an account yet?</span>
                    <a href='#'>Register your Email</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login