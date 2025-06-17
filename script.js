
    function getFormvalue(event) {
      event.preventDefault(); // prevent form from reloading the page
      
      const form = event.target;
      const firstName = form.fname.value.trim();
      const lastName = form.lname.value.trim();

      if (firstName === "" && lastName === "") {
        alert("Please enter your name.");
        return;
      }

      alert(`${firstName} ${lastName}`.trim());
    }
 