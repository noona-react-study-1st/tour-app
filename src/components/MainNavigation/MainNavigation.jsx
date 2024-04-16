import { Link } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/theme'>Theme</Link>
          </li>
          <li>
            <Link to='/area'>Area</Link>
          </li>
          <li>
            <Link to='/events'>Event</Link>
          </li>
        </ul>
        <>SearchBox</>
      </nav>
    </header>
  );
}
