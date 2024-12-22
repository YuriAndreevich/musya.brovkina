import React from 'react'
import * as styles from './Review.module.scss'

const ReviewCard = ({ name, review, image }) => (
  <div className={styles.reviewCard}>
    <div className={styles.imageContainer}>
      <img src={image} alt={name} className={styles.image} />
    </div>
    <div className={styles.textContent}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.review}>{review}</p>
    </div>
  </div>
)

export default ReviewCard
