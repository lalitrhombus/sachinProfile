import React from 'react';
import { Link } from 'react-router';

export default class header extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    let active = {}

    return (
      <header>
      <div className="logo">
        <img src="https://socialcops.com/images/logo_sc.png" alt=""/>
      </div>
      <div className="nav">
        <Link to="/" className="" onlyActiveOnIndex activeClassName="active">
          <svg>
            <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
          </svg>
          <p>I Know!</p>
        </Link>
        <Link className="" activeClassName="active" to="/albums">
          <svg>
            <use xlinkHref={`public/iconSprite.svg#icon-album`}></use>
          </svg>
          <p>Show me why?</p>
        </Link>
      </div>
    </header>
    );
  }
}
