import { useState } from "react";
import "../assets/style/write_review.css";
import Sakib from "../assets/image/sakib(bg).png";

const WriteReview = () => {
    const [rating, setRating] = useState(null);
    const [showReview, setShowReview] = useState(false);

    const handleRating = (value) => {
        setRating(value);
    };

    const review = [
        {
            id: 1,
            name: "Nazmus Sakib",
            date: "March 01, 2025",
            rating: 5,
            text: "I'm not happy with the new updates. When you send a document to another user the time doesn't really show because it's in white text. Also, there should be another page for status updates and another page for channels, these two shouldn't be at the same place, it's making navigation difficult.",
            avatar: Sakib,
        }
    ];

    return (
        <>
            <button className="show_write_review" onClick={() => setShowReview(true)}>
                Write a Review
            </button>

            {showReview && (
                <div className="overlay" onClick={() => setShowReview(false)}>
                    <form action="">
                        <div className="rate-this-app" onClick={(e) => e.stopPropagation()}>

                        <div className="close_all">
                            <div className="heading_review">
                                <div className="user-avatar">
                                <img src={review[0].avatar} alt={review[0].name} />
                                <h2 className="client_name">{review[0].name}</h2>
                            </div>
                            <p className="rate-title" style={{textAlign:"center"}}>Rate this app</p>
                            </div>
                            <button className="close-review" onClick={() => setShowReview(false)}>✖</button>
                        </div>

                        <p className="rate-desc">Please rate the app and share your feedback</p>


                        <div className="star-rating">
                            {[5, 4, 3, 2, 1].map((star) => (
                                <label key={star}>
                                    <input
                                        type="radio"
                                        name="star"
                                        value={star}
                                        onChange={() => handleRating(star)}
                                        required
                                    />
                                    <span className={`star-input ${rating >= star ? "selected" : ""}`}>&#9733;</span>
                                </label>
                            ))}
                        </div>


                        <textarea className="review-text" placeholder="Write a review" required></textarea>


                        <button className="submit-review">Submit</button>
                    </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default WriteReview;
