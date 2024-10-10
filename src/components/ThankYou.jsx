import React from "react";
import { Link, useNavigate } from "react-router-dom";

// This is thanking page, we will get it after successfull submission of application form.
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
      {/* After successfull submission go back to home page. */}
      <Link to='/' className="bg-slate-400 items-center ml-[39vw]">Back To Home </Link>
    </div>
    </div>
  );
};

export default ThankYou;
