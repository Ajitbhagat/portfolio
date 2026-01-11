import "./Form.css";
import "./Form.js";
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



//  setupNameValidation("name", "nameError");
//     setupCustomEmailValidation("email", "emailError");
//     validateSubject("subject", "subjectError", 5, 300);
//     setupAlphanumericTextarea("comments", "charCount", "commentsError", 10, 300);
  
//     function setupNameValidation(inputId, errorId) {
//   const input = document.getElementById(inputId);
//   const error = document.getElementById(errorId);

//   // Regex: Only letters and spaces (no leading space)
//   const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;

//   function validate() {
//     const value = input.value.trim();

//     if (!value) {
//       error.textContent = "Name is required.";
//     } else if (!nameRegex.test(value)) {
//       error.textContent =
//         "Only letters and spaces are allowed. No leading space.";
//     } else {
//       error.textContent = "";
//     }
//   }

//   // Typing validation
//   input.addEventListener("input", validate);
//   input.addEventListener("blur", validate);

//   input.addEventListener("keydown", function (event) {
//     const allowedKeys = [
//       "Backspace",
//       "ArrowLeft",
//       "ArrowRight",
//       "Tab",
//       "Delete",
//     ];

//     if (allowedKeys.includes(event.key)) return;

//     if (input.selectionStart === 0 && event.key === " ") {
//       event.preventDefault();
//       return;
//     }

//     if (!/^[a-zA-Z ]$/.test(event.key)) {
//       event.preventDefault();
//     }
//   });

//   // Disable copy, cut, paste, drag-drop, right-click
//   input.addEventListener("paste", (e) => e.preventDefault());
//   input.addEventListener("copy", (e) => e.preventDefault());
//   input.addEventListener("cut", (e) => e.preventDefault());
//   input.addEventListener("drop", (e) => e.preventDefault());
//   input.addEventListener("contextmenu", (e) => e.preventDefault());
// }

// function setupCustomEmailValidation() {
//   const emailInput = document.getElementById("email");
//   const emailError = document.getElementById("emailError");

//   //  Custom rule: Only letters, numbers, 1 @, 1+ . after @
//   const customEmailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

//   let touched = false;
//   // Mark field as touched on blur
//   emailInput.addEventListener("blur", () => {
//     touched = true;
//     validateEmail();
//   });

//   const showError = (message) => {
//     emailError.textContent = message;
//     emailInput.classList.add(errorClass);
//   };

//   const clearError = () => {
//     emailError.textContent = "";
//     emailInput.classList.remove(errorClass);
//   };

//   const validateEmail = () => {
//     const value = emailInput.value.trim();

//     if (value === "") {
//       showError("Email is required.");
//       return false;
//     }

//     if (/\s/.test(value)) {
//       showError("Email must not contain spaces.");
//       return false;
//     }

//     if (!customEmailPattern.test(value)) {
//       showError("Invalid email format. Use only letters, numbers, '@' and '.'");
//       return false;
//     }

//     clearError();
//     return true;
//   };

//   //  Block copy/paste
//   ["paste", "copy", "cut"].forEach((evt) =>
//     emailInput.addEventListener(evt, (e) => {
//       e.preventDefault();
//       showError("Copy-paste is disabled.");
//     })
//   );

//   //  Real-time input filtering
//   emailInput.addEventListener("input", () => {
//     // Remove disallowed characters: only a-z, A-Z, 0-9, @, .
//     emailInput.value = emailInput.value.replace(/[^a-zA-Z0-9@.]/g, "");
//     validateEmail();
//   });
// }

// function validateSubject() {
//   const input = document.getElementById("subject");
//   const errorDiv = document.getElementById("subjectError");
//   const min = 5;
//   const max = 300;

//   // Track if user has interacted
//   let touched = false;

//   // Run validation
//   function runValidation() {
//     // Allow only alphanumeric and space
//     input.value = input.value.replace(/[^a-zA-Z0-9 ]/g, "");

//     // Trim to max length
//     if (input.value.length > max) {
//       input.value = input.value.slice(0, max);
//     }

//     // Show error only if touched
//     if (touched && input.value.trim().length < min) {
//       errorDiv.textContent = `Please enter at least ${min} characters.`;
//       input.classList.add("input-error");
//       return false;
//     } else {
//       errorDiv.textContent = "";
//       input.classList.remove("input-error");
//       return true;
//     }
//   }

//   // Mark field as touched on blur
//   input.addEventListener("blur", () => {
//     touched = true;
//     runValidation();
//   });

//   // Validate on input
//   input.addEventListener("input", runValidation);

//   // Block paste
//   input.addEventListener("paste", (e) => e.preventDefault());

//   // Block invalid keys
//   input.addEventListener("keydown", (e) => {
//     const key = e.key;
//     const valid =
//       /^[a-zA-Z0-9 ]$/.test(key) ||
//       ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"].includes(key);
//     if (!valid) e.preventDefault();
//   });

//   // Return validate method for external use (e.g., on submit)
//   return {
//     validate: () => {
//       touched = true;
//       return runValidation();
//     },
//   };
// }

// function filterSubjectAlphanumeric(event) {
//   const key = event.key;
//   const isValid =
//     /^[a-zA-Z0-9 ]$/.test(key) ||
//     ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"].includes(key);

//   if (!isValid) {
//     event.preventDefault();
//   }
// }

// function blockSubjectPaste(event) {
//   event.preventDefault();
// }

// function setupAlphanumericTextarea(
//   textareaId,
//   charCountId,
//   errorId,
//   min = 10,
//   max = 300,
//   errorClass = "input-error"
// ) {
//   const textarea = document.getElementById(textareaId);
//   const charCount = document.getElementById(charCountId);
//   const errorDiv = document.getElementById(errorId);

//   let touched = false; //  Track if the user interacted

//   function handleInput() {
//     touched = true; // User interacted
//     // Remove non-alphanumeric characters

//     textarea.value = textarea.value.replace(/[^a-zA-Z0-9 ]/g, "");

//     // Enforce max length
//     if (textarea.value.length > max) {
//       textarea.value = textarea.value.slice(0, max);
//     }

//     // Update character count
//     const remaining = max - textarea.value.length;
//     charCount.textContent = `${remaining} Characters Remaining`;

//     // Real-time validation
//     if (touched && textarea.value.length < min) {
//       errorDiv.textContent = `Please enter at least ${min} alphanumeric characters.`;
//       textarea.classList.add(errorClass);
//     } else {
//       errorDiv.textContent = "";
//       textarea.classList.remove(errorClass);
//     }
//   }

//   function handleBlur() {
//     touched = true;
//     validateTextarea();
//   }

//   function blockPaste(event) {
//     event.preventDefault();
//   }

//   function blockInvalidKeys(event) {
//     const key = event.key;
//     const isValid =
//       /^[a-zA-Z0-9 ]$/.test(key) ||
//       ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"].includes(key);

//     if (!isValid) {
//       event.preventDefault();
//     }
//   }

//   function validateTextarea() {
//     const value = textarea.value.trim();
//     if (value.length < min) {
//       errorDiv.textContent = `Please enter at least ${min} alphanumeric characters.`;
//       textarea.classList.add(errorClass);
//       return false;
//     }
//     errorDiv.textContent = "";
//     textarea.classList.remove(errorClass);
//     return true;
//   }

//   // Add event listeners
//   textarea.addEventListener("input", handleInput);
//   textarea.addEventListener("blur", handleBlur);
//   textarea.addEventListener("keydown", blockInvalidKeys);
//   textarea.addEventListener("paste", blockPaste);

//   // Initial character count update (but no validation yet)
//   const remaining = max - textarea.value.length;
//   charCount.textContent = `${remaining} Characters Remaining`;

//   return {
//     validate: () => {
//       touched = true;
//       return validateTextarea();
//     },
//   };
// }
  
    
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
      
      {/* <form className="form_con" action="" ref={form} onSubmit={sendEmail}>
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
          name="user_subject"
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
      </form> */}
      {/* new code update*/}
       <form className="form_con" action="" ref={form} onSubmit={sendEmail}>
      <label className="label_con"  for="name">Name<span class="asterisk">*</span></label>
      <input
        className="input_con"
        type="text"
        id="name"
        name="name"
        placeholder="Enter your Name"
        autocomplete="off"
      />
      <div class="error" id="nameError"></div>
      <label className="label_con" for="email">Email ID <span class="asterisk">*</span></label>
      <input
        className="input_con"
        type="text"
        id="email"
        name="email"
        placeholder="Enter Email Address"
        autocomplete="off"
      />
      <div class="error" id="emailError"></div>
      <label className="label_con" for="subject">Subject<span class="asterisk">*</span></label>
      <input
        className="input_con"
        type="text"
        id="subject"
        name="subject"
        placeholder="Enter the Subject"
        autocomplete="off"
      />
      <div class="error" id="subjectError"></div>
      <label className="label_con" for="comments">
        Enter Your Query <span class="asterisk">*</span>
        <span id="charCount">300 Characters Remaining</span>
      </label>
      <textarea
        className="text_con"
        name="comments"
        id="comments"
        placeholder="Enter Your Query"
        oninput="updateCommentField()"
        onkeydown="filterAlphanumeric(event)"
        onpaste="blockPaste(event)"
        autocomplete="off"
      ></textarea>
      <div class="error" id="commentsError"></div>
          <button className="btn">Submit</button>
    </form>
      </div>
    // </div>
    // </div>
  );
};

export default Form;
