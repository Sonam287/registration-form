

  document.querySelector("form").addEventListener("submit", function (e) {
    const fullName 
      return;
    }

    if (!terms) {
      alert("You must agree to the Terms & Conditions.");
      e.preventDefault();
      return;
    }

    // Optional: Check password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      e.preventDefault();
      return;
    }
