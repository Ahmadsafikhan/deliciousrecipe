import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import Popular from "./components/Popular";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>deliciousoo</Logo>
      </Nav>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}


const Logo = styled(Link)`
font-size: 1.5rem;
font-weight: 600;
text-decoration: none;
font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
padding: 4rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`
export default App;
