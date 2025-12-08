document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let job = document.getElementById("job").value;
  let age = document.getElementById("age").value;

  document.getElementById("result").innerText =
    `Name: ${name}, Email: ${email}, Job: ${job}, Age: ${age}`;
});
