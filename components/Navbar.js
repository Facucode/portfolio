import Link from 'next/link'
const Navbar = () =>(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container"><Link href="/">
  <a className="navbar-brand"> My portfolio</a>

  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
     
      <li className="nav-item">
        <Link  href="/blog">
        <a className="nav-link">Blog</a>

        </Link>
      </li>
      <li className="nav-item">
      <Link  href="/github">
        <a className="nav-link">Github</a>

        </Link>      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
)
export default Navbar;