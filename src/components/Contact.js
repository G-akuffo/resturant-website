import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h1>BOOK YOUR TABLE</h1>
      <form>
        <input type="text" placeholder="full name" />
        <input type="email" placeholder="Type Your Email Here" />
        <textarea
          placeholder="Write Here....."
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="BOOK" />
      </form>
    </div>
  );
};

export default Contact;
