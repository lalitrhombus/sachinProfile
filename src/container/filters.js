import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {featchData} from '../actions/index';
import { Link } from 'react-router';
import Content from './content';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.props.featchData();
  }

  render() {
    return (
      <div className="wrapper section2">
          <div className="container">
            <p className="mainText">“ Sachin Tendulkar is a greatest cricketer of all time ”</p>
            <p className="sideText">Why? Let's see some stats below ...</p>
            <div className="mainContainer">
              <div className="aside">
                <div className="filterHead">
                  <p>Filter By</p>
                </div>
                <div className="filter">
                  <p className="text">Year</p>
                  <div className="sideOption">
                    <p className="text selected">1995
                      <svg>
                        <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
                      </svg>
                    </p>
                    <p className="text">1995
                      <svg>
                        <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
                      </svg>
                    </p>
                    <p className="text">1995
                      <svg>
                        <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
                      </svg>
                    </p>
                    <p className="text">1995
                      <svg>
                        <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
                      </svg>
                    </p>
                    <p className="text">1995
                      <svg>
                        <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
                      </svg>
                    </p>
                    <p className="text">1995
                      <svg>
                        <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
                      </svg>
                    </p>
                    <p className="text">1995
                      <svg>
                        <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
                      </svg>
                    </p>
                    <p className="text">1995
                      <svg>
                        <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
                      </svg>
                    </p>
                    <p className="text">1995
                      <svg>
                        <use xlinkHref={`public/iconSprite.svg#icon-user`}></use>
                      </svg>
                    </p>
                  </div>
                </div>
                <div className="filter">
                  <p className="text">Team</p>
                </div>
                <div className="filter">
                  <p className="text">Runs</p>
                </div>
                <div className="filter">
                  <p className="text">Wins</p>
                </div>
                <div className="filter">
                  <p className="text">Loss</p>
                </div>
              </div>
              <Content />
            </div>
          </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({featchData}, dispatch);
}

function mapStateToProps({data}){
  return {data};
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);