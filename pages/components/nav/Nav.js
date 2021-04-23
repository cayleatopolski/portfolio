import * as links from '../../constants/nav_links';
import Ul from '../common/Ul';
import Li from '../common/Li';
import A from '../common/A';
import ModeToggle from '../common/ModeToggle';
// TO DO! create folder to destructure imports in one line

const Nav = ({ toggleTheme }) => {
  return (
    <header>
      <nav>
        <Ul>
          {links.nav_links.map((link) => {
            return (
              <Li key={link.id}>
                <A>{link.title}</A>
              </Li>
            );
          })}
          <ModeToggle toggleTheme={toggleTheme}>Switch Theme</ModeToggle>
        </Ul>
      </nav>
    </header>
  );
};

export default Nav;
