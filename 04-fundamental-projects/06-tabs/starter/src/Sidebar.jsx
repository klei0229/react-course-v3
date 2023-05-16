import React from "react";

const Sidebar = (props) => {
  const data = props.data;
  const makeActive = props.makeActive;
  const activeEntry = props.activeEntry;

  return (
    <div className="btn-container">
      {data.map((element) => {
        const { company } = element;
        return (
          <button
            className={
              activeEntry.id === element.id ? "job-btn active-btn" : "job-btn"
            }
            onClick={() => {
              makeActive(element.id);
            }}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
