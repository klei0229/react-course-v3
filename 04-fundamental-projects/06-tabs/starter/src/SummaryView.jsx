import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SummaryView = (props) => {
  const { id, order, title, dates, company } = props.entry;
  const duties = props.entry.duties || [];
  return (
    <div>
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <div>
        {duties.map((duty) => {
          return (
            <div className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummaryView;
