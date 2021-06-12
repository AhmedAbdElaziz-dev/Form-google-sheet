const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const company = document.getElementById("company");
const position = document.getElementById("position");
const userName = document.getElementById("userName");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const row = JSON.stringify({
    FirstName: firstName.value,
    LastName: firstName.value,
    Email: firstName.value,
    PhoneNo: firstName.value,
    Position: firstName.value,
    Company: firstName.value,
    UserName: firstName.value,
  });

  fetch("https://sheet.best/api/sheets/faa604bd-a8ba-45d9-8227-6257663d9b1a", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: row,
  })
    .then((response) => {
      console.log("res", response);
    })
    .catch((err) => {
      console.log("err", err);
    });
});
