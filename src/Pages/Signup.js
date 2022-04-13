import { useState } from "react";
function Signup() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmite(e) {
    e.preventDefault();

    const usuario = {
      nome: nome,
      senha: senha,
    };
  }

  return (
    <form onSubmit={(e) => handleSubmite(e)}>
      <div className="mb-3 mt-3">
        <label for="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          onChange={(e) => setNome(e.tagert.value)}
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
        />
      </div>

      <div className="mb-3">
        <label for="pwd" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
        />
      </div>
      <button type="submite" className="btn btn-primary">
        {" "}
        Submit
      </button>
    </form>
  );
}

export default Signup