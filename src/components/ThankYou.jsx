import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ThankYou = () => {
  
  return (
    <div>
      <h1 className="font-bold">Thank You!</h1>
      <p className="text-lg">
        Your application has been submitted successfully. Our team will review
        your qualifications and get back to you if you are selected for the next
        round.
      </p>
    <div>
      <Link to='/'>Home</Link>
    </div>
    </div>
  );
};

export default ThankYou;
