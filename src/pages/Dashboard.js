
import React from "react";
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to Droom!</h1>
        <img src="https://www.businessknowhow.com/uploads/how-to-interview.jpg?ezimgfmt=rs:350x230/rscb2/ng:webp/ngcb2"/>
        <br/>
        <Link to={'/Login'}>Login</Link>
        <Link style = {{ marginLeft: "5%"}} to={'/Register'}>Register</Link>
      </header>
    </section>
  );
}