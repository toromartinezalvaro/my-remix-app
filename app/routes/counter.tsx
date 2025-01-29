import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alvaro");
  const [email, setEmail] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log({name, email});
  }

  const randomName = () => {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const randonIndex = Math.floor(Math.random() * names.length);
    return names[randonIndex];
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>reset</button>

      <h2>Random Name</h2>
      <p>{name}</p>
      <button onClick={() => setName(randomName())}>Cambiar nombre</button>

      <h2>FORMULARIO</h2>
      <div>
        <h1>CONTACT INFO</h1>
        <p>
          Name: {name}
          Email: {email}
          </p>
      </div>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="">
            Name:  ..........
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Email:  ............
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}