
    setupNameValidation("name", "nameError");
    setupCustomEmailValidation("email", "emailError");
    validateSubject("subject", "subjectError", 5, 300);
    setupAlphanumericTextarea("comments", "charCount", "commentsError", 10, 300);
  
    function setupNameValidation(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  // Regex: Only letters and spaces (no leading space)
  const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;

  function validate() {
    const value = input.value.trim();

    if (!value) {
      error.textContent = "Name is required.";
    } else if (!nameRegex.test(value)) {
      error.textContent =
        "Only letters and spaces are allowed. No leading space.";
    } else {
      error.textContent = "";
    }
  }

  // Typing validation
  input.addEventListener("input", validate);
  input.addEventListener("blur", validate);

  input.addEventListener("keydown", function (event) {
    const allowedKeys = [
      "Backspace",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Delete",
    ];

    if (allowedKeys.includes(event.key)) return;

    if (input.selectionStart === 0 && event.key === " ") {
      event.preventDefault();
      return;
    }

    if (!/^[a-zA-Z ]$/.test(event.key)) {
      event.preventDefault();
    }
  });

  // Disable copy, cut, paste, drag-drop, right-click
  input.addEventListener("paste", (e) => e.preventDefault());
  input.addEventListener("copy", (e) => e.preventDefault());
  input.addEventListener("cut", (e) => e.preventDefault());
  input.addEventListener("drop", (e) => e.preventDefault());
  input.addEventListener("contextmenu", (e) => e.preventDefault());
}

function setupCustomEmailValidation() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  //  Custom rule: Only letters, numbers, 1 @, 1+ . after @
  const customEmailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

  let touched = false;
  // Mark field as touched on blur
  emailInput.addEventListener("blur", () => {
    touched = true;
    validateEmail();
  });

  const showError = (message) => {
    emailError.textContent = message;
    emailInput.classList.add(errorClass);
  };

  const clearError = () => {
    emailError.textContent = "";
    emailInput.classList.remove(errorClass);
  };

  const validateEmail = () => {
    const value = emailInput.value.trim();

    if (value === "") {
      showError("Email is required.");
      return false;
    }

    if (/\s/.test(value)) {
      showError("Email must not contain spaces.");
      return false;
    }

    if (!customEmailPattern.test(value)) {
      showError("Invalid email format. Use only letters, numbers, '@' and '.'");
      return false;
    }

    clearError();
    return true;
  };

  //  Block copy/paste
  ["paste", "copy", "cut"].forEach((evt) =>
    emailInput.addEventListener(evt, (e) => {
      e.preventDefault();
      showError("Copy-paste is disabled.");
    })
  );

  //  Real-time input filtering
  emailInput.addEventListener("input", () => {
    // Remove disallowed characters: only a-z, A-Z, 0-9, @, .
    emailInput.value = emailInput.value.replace(/[^a-zA-Z0-9@.]/g, "");
    validateEmail();
  });
}

function validateSubject() {
  const input = document.getElementById("subject");
  const errorDiv = document.getElementById("subjectError");
  const min = 5;
  const max = 300;

  // Track if user has interacted
  let touched = false;

  // Run validation
  function runValidation() {
    // Allow only alphanumeric and space
    input.value = input.value.replace(/[^a-zA-Z0-9 ]/g, "");

    // Trim to max length
    if (input.value.length > max) {
      input.value = input.value.slice(0, max);
    }

    // Show error only if touched
    if (touched && input.value.trim().length < min) {
      errorDiv.textContent = `Please enter at least ${min} characters.`;
      input.classList.add("input-error");
      return false;
    } else {
      errorDiv.textContent = "";
      input.classList.remove("input-error");
      return true;
    }
  }

  // Mark field as touched on blur
  input.addEventListener("blur", () => {
    touched = true;
    runValidation();
  });

  // Validate on input
  input.addEventListener("input", runValidation);

  // Block paste
  input.addEventListener("paste", (e) => e.preventDefault());

  // Block invalid keys
  input.addEventListener("keydown", (e) => {
    const key = e.key;
    const valid =
      /^[a-zA-Z0-9 ]$/.test(key) ||
      ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"].includes(key);
    if (!valid) e.preventDefault();
  });

  // Return validate method for external use (e.g., on submit)
  return {
    validate: () => {
      touched = true;
      return runValidation();
    },
  };
}

function filterSubjectAlphanumeric(event) {
  const key = event.key;
  const isValid =
    /^[a-zA-Z0-9 ]$/.test(key) ||
    ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"].includes(key);

  if (!isValid) {
    event.preventDefault();
  }
}

function blockSubjectPaste(event) {
  event.preventDefault();
}

function setupAlphanumericTextarea(
  textareaId,
  charCountId,
  errorId,
  min = 10,
  max = 300,
  errorClass = "input-error"
) {
  const textarea = document.getElementById(textareaId);
  const charCount = document.getElementById(charCountId);
  const errorDiv = document.getElementById(errorId);

  let touched = false; //  Track if the user interacted

  function handleInput() {
    touched = true; // User interacted
    // Remove non-alphanumeric characters

    textarea.value = textarea.value.replace(/[^a-zA-Z0-9 ]/g, "");

    // Enforce max length
    if (textarea.value.length > max) {
      textarea.value = textarea.value.slice(0, max);
    }

    // Update character count
    const remaining = max - textarea.value.length;
    charCount.textContent = `${remaining} Characters Remaining`;

    // Real-time validation
    if (touched && textarea.value.length < min) {
      errorDiv.textContent = `Please enter at least ${min} alphanumeric characters.`;
      textarea.classList.add(errorClass);
    } else {
      errorDiv.textContent = "";
      textarea.classList.remove(errorClass);
    }
  }

  function handleBlur() {
    touched = true;
    validateTextarea();
  }

  function blockPaste(event) {
    event.preventDefault();
  }

  function blockInvalidKeys(event) {
    const key = event.key;
    const isValid =
      /^[a-zA-Z0-9 ]$/.test(key) ||
      ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"].includes(key);

    if (!isValid) {
      event.preventDefault();
    }
  }

  function validateTextarea() {
    const value = textarea.value.trim();
    if (value.length < min) {
      errorDiv.textContent = `Please enter at least ${min} alphanumeric characters.`;
      textarea.classList.add(errorClass);
      return false;
    }
    errorDiv.textContent = "";
    textarea.classList.remove(errorClass);
    return true;
  }

  // Add event listeners
  textarea.addEventListener("input", handleInput);
  textarea.addEventListener("blur", handleBlur);
  textarea.addEventListener("keydown", blockInvalidKeys);
  textarea.addEventListener("paste", blockPaste);

  // Initial character count update (but no validation yet)
  const remaining = max - textarea.value.length;
  charCount.textContent = `${remaining} Characters Remaining`;

  return {
    validate: () => {
      touched = true;
      return validateTextarea();
    },
  };
}
