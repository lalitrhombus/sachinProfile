import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {featchData} from '../actions/index';
import { Link } from 'react-router';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.props.featchData();
  }

  render() {
    return (
      <div className="wrapper section1">
          <div className="container">
            <div className="things">
              <svg>
                <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
              </svg>
              <p className="text">200<span className="bigText">Things</span></p>
            </div>
            <div className="things">
              <svg>
                <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
              </svg>
              <p className="text">200<span className="bigText">Things</span></p>
            </div>
            <div className="things">
              <svg>
                <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
              </svg>
              <p className="text">200<span className="bigText">Things</span></p>
            </div>
            <div className="things">
              <svg>
                <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
              </svg>
              <p className="text">200<span className="bigText">Things</span></p>
            </div>
            <div className="things">
              <svg>
                <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
              </svg>
              <p className="text">200<span className="bigText">Things</span></p>
            </div>
            <div className="things">
              <svg>
                <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
              </svg>
              <p className="text">200<span className="bigText">Things</span></p>
            </div>
          </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({featchData}, dispatch);
}

function mapStateToProps({dataState}){
  console.log(dataState);
  return {dataState};
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);