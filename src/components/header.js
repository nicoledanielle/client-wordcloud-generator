import React from 'react';
import { connect } from 'react-redux';
import '../styles/header.css';

import TopNav from './top-nav';

export function Header(props) {

  return (
    <header>
      <TopNav />
    </header>
  );
}

const mapStateToProps = state => ({
  view: state.view
});

export default connect(mapStateToProps)(Header);