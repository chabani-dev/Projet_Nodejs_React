//import React, { useState } from "react";
// import axios from "axios";
import React from "react";
function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("/api/login", { email, password });
  //     // Process the response from the backend
  //     console.log(response.data);
  //   } catch (error) {
  //     // Handle error
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <h1>Login</h1>
      <form>
        {/* onSubmit={handleLogin} */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
