import React from 'react'

import styles from './styles.module.css'

import {Favorite, Comment, Share, Visibility, ShoppingBag, SaveAlt} from '@mui/icons-material'

function TrixTemplate({
    index
}) {
  return (
      <>
        <article className={styles.trix_card}>
            <div className={styles.trix_image}>
                <img src='./assets/images/trixample.png' alt='example' />
                <div className={styles.trix_hover}>
                    <button><Visibility /></button>
                    <button><ShoppingBag /></button>
                </div>
                <div className={styles.trix_category}>
                    <span>category</span>
                </div>
            </div>
            <strong>{index}</strong>
            <p>Included menu customization, letter, gallery, client reviews, contact form, table reservation and more. </p>
            <div className={styles.trix_bottom}>
                <div className={styles.trix_createdAt}>
                    <SaveAlt />
                    <span>Saved 9s ago</span>
                </div>
                <div className={styles.trix_buttons}>
                    <button><Favorite /></button>
                    <button><Comment /></button>
                    <button><Share /></button>
                </div>
            </div>
        </article>
      </>
  )
}

export default TrixTemplate