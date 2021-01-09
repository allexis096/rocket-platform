import LogoDark from '../../public/logo-dark.svg';
import { IoMdSearch, IoMdPersonAdd, IoMdNotifications } from 'react-icons/io';

import { Container, NavGroup } from '../styles/components/Header';

export default function Header() {
  return (
    <Container>
      <LogoDark />
      <NavGroup>
        <div className="buttons">
          <IoMdSearch size={23} />
        </div>
        <div className="buttons">
          <IoMdPersonAdd size={23} />
        </div>
        <div className="buttons">
          <IoMdNotifications size={23} />
        </div>
        <span>Allexis Figueiredo</span>
        <img
          src="https://xesque.rocketseat.dev/users/avatar/profile-39282dd1-7c10-4cd1-8c34-12f1b6b43161.jpg"
          alt="Avatar"
        />
      </NavGroup>
    </Container>
  );
}
