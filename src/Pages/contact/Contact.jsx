import "./style.scss";
import { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && email && message) {
      setValid(true);
    }
    if (valid) {
      fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            firstName: firstName, 
            lastName: lastName, 
            email: email, 
            message: message
        }),
      }).then(() => {
            setFirstName("")
            setLastName("")
            setEmail("")
            setMessage("")
        })   
      }else{
          alert("Merci de remplir tous les champs")
      }
  };

  return (
    <div className="container col-4">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          Prénom
        </label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={firstName}
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          aria-describedby="firstNameHelp"
        />
        <div id="firstNameHelp" className="form-text">
          Indiquez votre prénom
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Nom
        </label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={lastName}
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
          aria-describedby="lastNameHelp"
        />
        <div id="lastNameHelp" className="form-text">
          Indiquez votre nom
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Adresse e-mail
        </label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          name="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          Merci d'indiquer votre e-mail
        </div>
      </div>
      <div className="mb-3">
        <textarea
          name="message"
          value={message}
          id="message"
          cols="45"
          rows="10"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
    </div>
  );
}
