import './header.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderCenter from './HeaderCenter/HeaderCenter';
import HeaderRight from './HeaderRight/HeaderRight';

const Header: React.FC = () => {   

    return (
        <header className="header">
            <HeaderLogo />
            <HeaderCenter />
            <HeaderRight />            
        </header>
    );
};

export default Header;
