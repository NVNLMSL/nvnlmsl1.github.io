import React, { useState } from "react";

const Contact = () => {
  // Define state variables for full name, email, and comments
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  // Event handler to update the full name state
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  // Event handler to update the email state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler to update the comments state
  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now access the stored values in fullName, email, and comments
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Comments:", comments);

    // Perform any further actions (e.g., sending data to a server) here
  };

  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            pattern="[A-Za-z ]+"
            required
            value={fullName}
            onChange={handleFullNameChange}
          />
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="comments">Comments (100 words max):</label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            maxLength="100"
            required
            value={comments}
            onChange={handleCommentsChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;