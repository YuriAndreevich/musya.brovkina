import React from 'react'
import ReviewCard from './ReviewCard'

const reviews = [
  {
    name: 'Анна Смирнова',
    review: 'Лучший мастер бровист! Все сделала быстро и профессионально.',
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Мария Иванова',
    review: 'Очень довольна результатом, брови стали выглядеть естественно и красиво.',
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Екатерина Попова',
    review: 'Тот самый мастер, который сделает брови идеально под ваш тип лица!',
    image: 'https://via.placeholder.com/80'
  }
]

const ReviewsPage = () => (
    <div>
    <h1>Отзывы клиентов</h1>
    <div>
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          name={review.name}
          review={review.review}
          image={review.image}
        />
      ))}
    </div>
    </div>
)

export default ReviewsPage
