const axios = require("axios");

document.addEventListener("DOMContentLoaded", () => {
  let modalBtn = document.getElementById("modal-btn");
  let modal = document.querySelector(".modal");
  let closeBtn = document.querySelector(".close-btn");

  modalBtn.onclick = () => {
    modal.style.display = "block";
  };
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };
  // window.onclick = (e) => {
  //   if (e.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };

  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };

      try {
        let response = await axios.post("http://localhost:3000/form", data);
        document.getElementById("response").innerHTML = response.data.message;
      } catch (error) {
        document.getElementById("response").innerHTML = error.message;
        document.getElementById("response").style.color = "#ff0000";
      }
    });
});
