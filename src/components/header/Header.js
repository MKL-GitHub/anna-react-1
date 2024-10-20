import NavBar from "../nav-bar/NavBar";
import "./Header.css";

/**
 *
 * @param {object} props
 * @param {string} props.logo
 * @returns
 */
function Header(props) {
  return (
    <header className="Header">
      <NavBar />
      {/* <div>{props.logo}</div>
      <button>1</button>
      <button>1</button>
      <button>1</button> */}
    </header>
  );
}

export default Header;
