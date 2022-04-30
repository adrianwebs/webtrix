import { useState, useEffect} from 'react'
import useUser from '../../hooks/useUser'

import { signOutUser } from '../../firebase/client'

import { motion } from 'framer-motion'

function index() {
    const user = useUser()

    const handleSignOut = () => {
        signOutUser()
    }

    return (
    <div>
        {
            user && 
            <motion.div
                initial={{ opacity: 0 , y: -100}}
                animate={ user ? {opacity: 1, y: 0} : {opacity: 0}}
                transition={{ duration: 1, ease: 'easeInOut'}}
            >
                <img src={user.avatar} />
                <strong>{user.username}</strong>
                <button onClick={handleSignOut} >Logout</button>
            </motion.div>
        }
    </div>
  )
}

export default index