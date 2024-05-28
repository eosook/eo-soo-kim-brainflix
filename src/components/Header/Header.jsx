import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import './Header.scss'

function Header(){
    return (
        <header className="header">
            <img src={logo} alt="BrainFlix Logo" className="header__logo"></img>
            <form className="form">
                <input type="text" className="form__search" placeholder="Search"></input>
                <button type="submit" className="form__submit">upload</button>
                <img src={avatar} className="form__avatar"></img>
            </form>
        </header>
    )
}

export default Header;