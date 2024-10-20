import React from "react";

function NavBar() {
  return (
    <nav>
      <ul style={{ margin: 0, listStyle: "none", display: "flex", gap: 10 }}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
