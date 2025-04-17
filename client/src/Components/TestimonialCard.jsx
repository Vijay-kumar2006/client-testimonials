import React from 'react'

 const TestimonialCard = ({name, review}) => {
  return (
    <div>
        <h2>Customer Name: {name}</h2>
        <h2>Review Text : {review}</h2>
        <br />
        <br />
    </div>
  )
}
export default TestimonialCard;