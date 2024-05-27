import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import uploadImg from '../../assets/images/icons/upload.svg'
import searchImg from '../../assets/images/icons/search.svg'
import './Header.scss'

function Header(){
    return (
        <header className="header">
            <img src={logo} alt="BrainFlix Logo" className="header__logo"></img>
            <form className="form">
                <div className="form__divider">
                    <input type="text" className="form__search"></input>
                    <img src={avatar} className="form__avatar"></img>
                </div>
                <button type="submit" className="form__submit">upload</button>
            </form>
        </header>
    )
}

export default Header;