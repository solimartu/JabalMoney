import { useState } from "react";
import Link from "next/link";
import useAuth from "./hooks/useAuth";

function Registration() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const [error, setError] = useState("");

  const auth = useAuth();
  // const navigate = useNavigate();

  const handleInputChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setUser((state) => ({ ...state, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    register();
  };

  const register = async () => {
    try {
      const response = await fetch("api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const newUser = await response.json();
      console.log(newUser);
      //   props.onDoneCb(newUser);
      setUser(newUser);
    } catch (error) {
      setError(error.message);
    }

    // navigate("/login");
  };
  const { username, email, password } = user;

  return (
    <div>
      <div className="container bg-light shadow mt-4">
        <h3 className="darker">Registration</h3>

        <form id="registrationform" onSubmit={handleSubmit}>
          <div className="col-6 mt-4">
            <label className="form-label mt-4">Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={username}
              required
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="col-6 mt-4">
            <label className="form-label mt-4">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="col-6 mt-4">
            <label className="form-label mt-4">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              required
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="col-6 mt-4">
            <Link href={`/`}>
              <button
                className="rounded-lg p-3 bg-yellow-400 text-black text-center mx-auto"
                type="submit"
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
