import User from './user';
import '../App.css'; // Assurez-vous que le chemin d'accès est correct

const Header = () => {
  return (
    <header className="header">
      <User /> 
    </header>
  );
};

export default Header;
