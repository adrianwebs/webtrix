import React from 'react'

import styles from './styles.module.css'

function TrixTemplate({
    index
}) {
  return (
      <>
        <article className={styles.trix_card}>
            <div className={styles.trix_image}>
                {/*<img src={image} alt={text} />*/}
                <div className={styles.trix_hover}>
                    <div>View</div>
                    <div>Cart</div>
                </div>
                <div className={styles.trix_category}>
                    <span>category</span>
                </div>
            </div>
            <h4>{index}</h4>
            <h5>description</h5>
            <div className={styles.trix_createdAt}>

                <span>createdAt</span>
            </div>
            <div className={styles.trix_buttons}>
                <div>Likes</div>
                <div>Comments</div>
                <div>Share</div>
            </div>
        </article>
      </>
  )
}

export default TrixTemplate