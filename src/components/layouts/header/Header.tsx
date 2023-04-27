import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <header className="header">
      <HeaderLogo />

      <span className="header_loading"> loading</span>
    </header>
  );
};

export default Header;
