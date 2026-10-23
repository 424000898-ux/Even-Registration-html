document.getElementById("regForm").addEventListener("submit", function(event){
  event.preventDefault();
  
  let name = document.getElementById("name").value;
  let ticket = document.getElementById("ticket").value;
  let destination = "Metro Manila Convention Center"; // fixed destination, pwede mong palitan

  // Show confirmation alert
  alert("Thank you, " + name + "! You registered for a " + ticket + " ticket.");

  // Generate QR Code with entry pass details
  let qrData = 
    "=== EVENT ENTRY PASS ===\n" +
    "Name: " + name + "\n" +
    "Ticket: " + ticket + "\n" +
    "Destination: " + destination + "\n" +
    "Date: June 15, 2026\n" +
    "Location: Metro Manila\n" +
    "=========================";

  let qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(qrData);

  // Display QR Code
  let qrContainer = document.getElementById("qrContainer");
  qrContainer.innerHTML = "<h3>Your QR Code</h3><img src='" + qrUrl + "' alt='QR Code'>";
});
