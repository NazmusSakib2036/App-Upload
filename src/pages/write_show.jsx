import React from "react";
import "../assets/style/write_show.css";

const reviews = [
  {
    id: 1,
    name: "Nazmus Sakib",
    date: "March 01, 2025",
    rating: 5,
    text: "I'm not happy with the new updates. When you send a document to another user the time doesn't really show because it's in white text. Also there should be another page for status updates and another page for channels, these two shouldn't be at the same place, it's making navigation through, especially status updates, really difficult. I will come back if I see something else.",
    avatar: "../../src/assets/image/sakib(bg).png"
  },
  {
    id: 2,
    name: "Fahim Shahriar",
    date: "March 09, 2025",
    rating: 3,
    text: "I'm not happy with the new updates. When you send a document to another user the time doesn't really show because it's in white text. Also there should be another page for status updates and another page for channels.",
    avatar: "../../src/assets/image/logo.png"
  },
  {
    id: 3,
    name: "Tajkin Ahmed",
    date: "March 25, 2025",
    rating: 0,
    text: "I'm not happy with the new updates. When you send a document to another user the time.",
    avatar: "../../src/assets/image/logo.png"
  }
];

const ReviewComponent = () => {
  return (
    <div className="review-container">
      <div className="rating-section">
        <div className="left">
          <h1>4.5</h1>
          <div className="stars">★★★★★</div>
          <p>15.4M reviews</p>
        </div>
        <div className="right">
          <div className="rating-bars">
            {[5, 4, 3, 2, 1].map((num, index) => (
              <div key={index} className="rating-row">
                <span>{num}</span>
                <div className="bar">
                  <div className={`fill fill-${num}`} style={{ width: `${num * 20}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="reviews-list">
        {reviews.map((review) => (
            <>
          <div key={review.id} className="review-section">

            <div className="review-content">
                <div className="review_client_name">
                  <div className="user-avatar">
              <img src={review.avatar} alt={review.name} />
              <h2 className="client_name">{review.name}</h2>
              </div>
              <div className="user-info">
              <p className="date">{review.date}</p>
              <div className="stars small">{'★'.repeat(Math.floor(review.rating)) + '☆'.repeat(5 - Math.floor(review.rating))}</div>
                  </div>
                </div>

              <p className="review-text_show">{review.text}</p>
            </div>
          </div>
                <hr />
</>
        ))}
      </div>

    </div>
  );
};

export default ReviewComponent;
