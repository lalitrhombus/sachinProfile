import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {featchData} from '../actions/index';
import { Link } from 'react-router';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.updateView();
  }

  updateView = () => {
      let average,
          centuries,
          matches,
          runs,
          data = this.props.dataState.data;

      // performance anlysis
      // let t0 = performance.now();

      for (var key in data) {

          let tempYears = moment(data[key].date, "DD MMM YYYY").get('year');
          if (years.indexOf(tempYears) == -1) {
              years.push(tempYears);
          }

          if (grounds.indexOf(data[key].ground) == -1) {
              grounds.push(data[key].ground);
          }

          let tempTeam = data[key].opposition.substr(2);
          if (teams.indexOf(tempTeam) == -1) {
              teams.push(tempTeam);
          }

      }
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
              Runs
              <span className="count">200</span>
            </p>
          </div>
          <div className="tab selected">
            <p className="text">
              Average
              <span className="count">200</span>
            </p>
          </div>
          <div className="tab">
            <p className="text">
              Centuries
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

function mapStateToProps({dataState}){
  return {dataState};
}

export default connect(mapStateToProps,mapDispatchToProps)(Content);