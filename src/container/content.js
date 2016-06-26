import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {featchData} from '../actions/index';
import { Link } from 'react-router';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.props.featchData();
  }

  render() {
    return (
      <div className="content">
        <div className="tabs">
          <div className="tab">
            <p className="text">
              Matches
              <span className="count">200</span>
            </p>
          </div>
          <div className="tab">
            <p className="text">
              Matches
              <span className="count">200</span>
            </p>
          </div>
          <div className="tab selected">
            <p className="text">
              Matches
              <span className="count">200</span>
            </p>
          </div>
          <div className="tab">
            <p className="text">
              Matches
              <span className="count">200</span>
            </p>
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

export default connect(mapStateToProps,mapDispatchToProps)(Content);