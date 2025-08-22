import "./Form.css";
import React, { useRef} from "react";
import emailjs from "@emailjs/browser";


const Form = () => {
  const form = useRef();
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState(" ");

  const sendEmail = (e) => {
    e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_cxf70ui",
  //       "template_clvwb6d",
  //       form.current,
  //       "MiIWVVc79_YzLTg-O"
  //     )
  //     .then(
  //       () => {
  //         alert("Message Sent.");
  //       },
  //       (error) => {
  //         alert("Message failed to send.");
  //       }
  //     );
  //   e.target.reset();
  // };

  emailjs
      .sendForm(
        "service_5799d99",
        "template_clvwb6d",
        form.current,
        "FPbcflWa1Zp-yqO6z"
      )
      .then(
        () => {
          alert("Message Sent.");
        },
        (error) => {
          alert("Message failed to send.");
        }
      );
    e.target.reset();
  };

    
// const YOUR_PUBLIC_KEY = "FPbcflWa1Zp-yqO6z"; 
//     const YOUR_SERVICE_ID = "service_5799d99";
//     const YOUR_TEMPLATE_ID = "template_clvwb6d";

//       emailjs
//       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//         publicKey: 'YOUR_PUBLIC_KEY',
//       })
//       .then(
//         () => {
//           // console.log('SUCCESS!');
//           alert("Message Sent.");
//         },
//         (error) => {
//           // console.log('FAILED...', error.text);
//                    alert("Message failed to send.");
//         },
//       );
//   };

    
  return (
    <div className="form">
      <h1 className="project-heading">Contact</h1>
      {/* <div className="form_m">
      <div className="left_f">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29473.583460501846!2d88.28982739434379!3d22.571699266063764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02782e54099073%3A0xe230e1d0af8fa119!2sShibpur%2C%20Howrah%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1711880768517!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      </div>

      <div className="right_f"> */}
      <form className="form_con" action="" ref={form} onSubmit={sendEmail}>
        <label className="label_con">Your Name</label>
        <input
        className="input_con"
          type="text"
          name="user_name"
          placeholder="Enter the Your Name"
          minLength={3}
          required
        />

        <label className="label_con">Email</label>
        <input 
        className="input_con"
          type="text"
          name="user_email"
          placeholder="Please enter the correct email address"
          required
        />

        <label className="label_con">Subject</label>
        <input 
        className="input_con"
          type="text"
          placeholder="Enter the Subject"
          minLength={3}
          required
        />
        <label className="label_con">Message</label>
        <textarea 
        className="text_con"
          name="message"
          placeholder="Type your message here..."
          id=""
          cols="30"
          rows="6"
          minLength={3}
          required
        ></textarea>
        <button className="btn">Submit</button>
      </form>
      </div>
    // </div>
    // </div>
  );
};

export default Form;
