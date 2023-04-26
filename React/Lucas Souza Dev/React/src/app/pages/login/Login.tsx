import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({ email, password });
  };

  return (
    <>
      <div>
        <form>
          <label>
            <span>Email</span>
            <input
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </label>
          <label>
            <span>Senha</span>
            <input
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </label>

          <button type="button" onClick={handleLogin}>
            Entrar
          </button>
        </form>
      </div>
    </>
  );
};
