import "./Footer.css";

/**
 *
 * @param {object} props
 * @param {string} props.logo
 * @returns
 */
function Footer({ logo }) {
  return (
    <footer className="Footer">
      <div>{logo}</div>
      <button>1000</button>
      <button>1000</button>
      <button>1</button>
    </footer>
  );
}

export default Footer;
