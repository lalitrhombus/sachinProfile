import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {featchData} from '../actions/index';
import { Link } from 'react-router';
import Content from './content';
import sizeof  from 'sizeof'; 

class Filter extends React.Component {
  state={
    selectedYears:[],
    selectedTeams:[],
    selectedGrounds:[],
    selectedResults:[],
    selectedInnings:[],
    selectedToss:[]
  }
  constructor(props) {
    super(props);
    this.props.featchData();
  }

  showSideOptions = (list,sideOptionName) => {
    let listContent = list.map(list=>{
      let classNameValue = "text";
      if(this.state[sideOptionName].indexOf(list)!=-1){
        classNameValue = "text selected";
      }
      return  <p key={list} className={classNameValue} onClick={this.onSideOptionClick.bind(this,list,sideOptionName)}>{list} <svg><use xlinkHref={`public/iconSprite.svg#icon-user`}></use></svg></p>;
    });
    return <div className="sideOption"> <div className="scroller"> {listContent} </div></div>;
  }

  onSideOptionClick=(val,selectedOption)=>{
    if(this.state[selectedOption].indexOf(val)==-1){
      this.setState({selectedOption:this.state[selectedOption].push(val)});
    }
    console.log(this.state[selectedOption]);
  }

  
  
  render() {
    if(Object.keys(this.props.dataState).length<=0){
      return <div className="loading">Please Wait, Getharing Data....</div>;
    }
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
                  {this.showSideOptions(this.props.dataState.years,"selectedYears")}
                </div>
                <div className="filter">
                  <p className="text">Team</p>
                  {this.showSideOptions(this.props.dataState.teams,"selectedTeams")}
                </div>
                <div className="filter">
                  <p className="text">Grounds</p>
                  {this.showSideOptions(this.props.dataState.grounds,"selectedGrounds")}
                </div>
                <div className="filter">
                  <p className="text">Result</p>
                  {this.showSideOptions(["won","lost","tied"],"selectedResults")}
                </div>
                <div className="filter">
                  <p className="text">Innings</p>
                  {this.showSideOptions(["1st","2nd"],"selectedInnings")}
                </div>
                <div className="filter">
                  <p className="text">Toss</p>
                  {this.showSideOptions(["won","lost"],"selectedToss")}
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

function mapStateToProps({dataState}){
  // console.log(sizeof.sizeof(dataState,true));
  console.log(dataState);
  return {dataState};
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);