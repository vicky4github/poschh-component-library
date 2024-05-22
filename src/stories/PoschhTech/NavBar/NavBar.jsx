import { Link, Button } from '@nextui-org/react';
import './navbar.css';
import { Dropdown } from '../Dropdown/Dropdown';

export const NavigationBar = () => {
  return (
    <nav class='navbar h-[60px] w-[100%] '>
      <div class='logo'>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Logo" />
          </a>
        </Link>
      </div>
      <div class='buttons'>
        <Dropdown />
        <Link href="/page1">
         <Button class='reqButton'>Request a quote</Button>
        </Link>
        <Link href="/page2">
         <Button class='salesButton'>Contact Sales</Button>
        </Link>
       
      </div>
    </nav>
  );

};
