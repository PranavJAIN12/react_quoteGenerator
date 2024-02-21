import React from 'react'

export default function About(props) {
  return (
    <div>
      <div className="container mt-5"style={{backgroundColor:props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}}>
            <h2>About Us</h2>
            <p>
                Welcome to InspireMe, your go-to destination for daily inspiration and motivation through thought-provoking quotes from various authors and sources. Our mission is to empower individuals with uplifting words that ignite creativity, spark change, and foster personal growth.
            </p>
            <p>
                At InspireMe, we believe in the power of words to transform lives. Whether you're seeking a boost of motivation to start your day, encouragement during challenging times, or simply a moment of reflection, our curated collection of quotes is here to inspire you on your journey.
            </p>
            <p>
                Feel free to explore our vast library of quotes spanning a wide range of topics, including success, happiness, love, and resilience. Join our community of like-minded individuals dedicated to embracing positivity and spreading inspiration one quote at a time.
            </p>
            <p>
                For inquiries or feedback, please contact us at:
                <br />
                Email: masterpranavjain2@gmail.com
                <br />
                
            </p>
        </div>
    </div>
  )
}
