import SideDrawer from './SideDrawer';
import classes from './MainNavigation.module.css';
import { useState } from 'react';

function MainNavigation() {

  const [displaySideBar, setDisplaySideBar] = useState(false);

  const hideSideBar = () => setDisplaySideBar(false);
  const showSideBar = () => setDisplaySideBar(true);

  
  return (
    <>
    <header className={classes.header}>
      <h1>Demo App</h1>
      <button className={classes.btn} onClick={showSideBar}>
        <div />
        <div />
        <div />
      </button>
    </header>
    {displaySideBar && <SideDrawer onBackdropClick={hideSideBar}/>}
    </>
  );
}

export default MainNavigation;
