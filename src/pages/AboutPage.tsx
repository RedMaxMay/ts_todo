import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        totam non dicta odio unde modi dolores quibusdam inventore ducimus
        dolorem.
      </p>
      <button className="btn" onClick={() => navigate("/")}>
        Go back to the list
      </button>
    </>
  );
};
