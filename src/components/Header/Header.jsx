import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img src={logo} alt="BrainFlix Logo" className="header__logo"></img>
      <form className="form">
        <input
          type="text"
          className="form__search"
          placeholder="Search"
        ></input>
        <button type="submit" className="form__submit" onClick={()=> {navigate('/upload')}}>
          upload
        </button>
        <div className="form__avatar"></div>
      </form>
    </header>
  );
}

export default Header;
