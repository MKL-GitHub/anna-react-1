import { useState } from "react";
import { Footer, Header, Main } from "../components";

function Home() {
  const [logo, setLogo] = useState("logo");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Main setLogo={setLogo} />
      <Footer logo={logo} />
    </div>
  );
}

export default Home;
