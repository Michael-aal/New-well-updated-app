// Signup
fetch("http://localhost:5000/api/auth/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ Username ,email, password })
});
