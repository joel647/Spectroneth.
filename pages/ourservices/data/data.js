document.getElementById("airtimeForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Retrieve form values
    const provider = document.getElementById("provider").value;
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;
  
    // Basic validation (you could add more if necessary)
    if (!provider || !phone || !amount) {
      document.getElementById("message").textContent = "Please fill in all fields.";
      return;
    }
  
    // Simulate purchase processing
    document.getElementById("message").textContent = `Processing purchase of $${amount} airtime for ${provider}...`;
  
    setTimeout(() => {
      document.getElementById("message").textContent = "Airtime purchased successfully!";
    }, 2000); // Simulate delay
  });
  