import React from "react";
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
const ReviewCard = (props) => {
  const { id, name, job, image, text } = props.review;
  const nextReview = props.nextReview;
  const prevReview = props.prevReview;
  const randomReview = props.randomReview

  return (
    <div className="review">
      <div className="img-container">
        <img className="person-img" src={image}></img>
      </div>
        <h4 className="author">{name}</h4>
        <h4 className="job">{job}</h4>
        <p className="info">{text}</p>
        <div className="btn-container">
            <button className="prev-btn" onClick={prevReview}><AiOutlineLeft/></button>
            <button className="next-btn" onClick={nextReview}><AiOutlineRight/></button>
        </div>
        <button className="btn" onClick={randomReview}>Surprise Me</button>
    </div>
  );
};

export default ReviewCard;
