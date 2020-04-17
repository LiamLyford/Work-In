import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/choices">
      <a style={linkStyle}>Choose a Workout</a>
    </Link>
    <Link href="/youtube">
      <a style={linkStyle}>Pick a video</a>
    </Link>
    <Link href="/calendar">
      <a style={linkStyle}>Calendar</a>
    </Link>
  </div>
);

export default Header;