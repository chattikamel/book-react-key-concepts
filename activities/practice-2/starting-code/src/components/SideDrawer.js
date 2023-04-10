import classes from './SideDrawer.module.css';
import { createPortal } from 'react-dom';

function SideDrawer(props) {
  return createPortal(
    <>
      <div className={classes.backdrop} onClick={props.onBackdropClick}/>
      <aside className={classes.drawer}>
        <nav>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/products">All Products</a>
            </li>
            <li>
              <a href="/profile">Your Profile</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>, document.getElementById("side-bar")
  );
}

export default SideDrawer;
