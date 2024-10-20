import Calendar from "../calendar/Calendar";
import "./Main.css";

/**
 *
 * @param {object} props
 * @param {() => void} props.setLogo
 * @returns
 */
function Main(props) {
  return (
    <main className="Main">
      <Calendar />
    </main>
  );
}

export default Main;
