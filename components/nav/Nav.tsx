import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type NavLinksType = {
  url: string;
  name: string;
} & React.ComponentProps<'a'>;

const NavLinks = ({ url, name, ...rest }: NavLinksType) => {
  return (
    <Link href="/" {...rest}>
      {name}
    </Link>
  );
};

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className={`panel-1 container ${show ? 'show' : 'hide'}`}>


        <div>
          <div>
            <Image
              src="/logo.jpg"
              width="100"
              height="60"
              alt=""
              className="logo"
            />
          </div>

          <div>
            <ul>
              <li>
                <NavLinks url="/" name="Home" className="active" onClick={() => setShow(false)} />
              </li>
              <li>
                <NavLinks
                  url="/"
                  name="About Us"
                  onClick={() => setShow(false)}
                />
              </li>
              <li>
                <NavLinks
                  url="/"
                  name="Services"
                  onClick={() => setShow(false)}
                />
              </li>
              <li>
                <NavLinks
                  url="/"
                  name="Success Stories"
                  onClick={() => setShow(false)}
                />
              </li>
    
              <li>
                <NavLinks
                  url="/"
                  name="Contact Us"
                  onClick={() => setShow(false)}
                />
              </li>
            </ul>
          </div>

          </div>
          </div>

          <div
            className={`panel-2 ${show ? 'show' : 'hide'}`}
            onClick={() => setShow(false)}
          ></div>

          <div className="hamburger">
            <Image
              src="/hamburger.jpg"
              onClick={() => setShow(true)}
              alt="Hamburger"
              width="30"
              height="30"
            />
          </div>



  
   
    </nav>
  );
};

export default Nav;
