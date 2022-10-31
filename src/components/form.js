import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Form() {
  const [name, setName] = useState("");

 const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}