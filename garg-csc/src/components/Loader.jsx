import "./Loader.css";
import logo from "../../assets/logo.png";

export default function Loader() {
  return (
    <div className="loader-page">
      <div className="loader-card">

        <img
          src={logo}
          alt="Garg CSC"
          className="loader-logo"
        />
<p>Serving Citizens Since 2021 🇮🇳</p>
        <h2>Garg Common Service Center</h2>
        <p>Government & Digital Services</p>

        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>

        <span>Preparing Government Services...</span>

      </div>
    </div>
  );
}