import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import HeroImg2 from "../components/HeroImg2";

const Contact = () => {
  useEffect(() => {
    document.title = "AjitBhagat | Contact";
  },[]);
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
