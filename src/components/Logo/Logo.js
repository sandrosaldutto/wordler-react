import './Logo.scss';
import logoImage from '../../assets/logo.svg'

function Logo() {
    return(
        <div className="logo">
        <img className="logo__image" src={logoImage} alt="wordler logo"/>
        </div>
        
    );
}

export default Logo;