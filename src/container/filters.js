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

  showSelection = (list,sideOptionName)=>{
    let listContent;
    if(list.length>2){
        listContent = <p key="hg" className="selected full">{list.length} Options Selected</p>;      
    }
    else{
        listContent = list.map(list=>{
        return  <p key={list} className="selected">{list}<svg onClick={this.onRemoveSelection.bind(this,list,sideOptionName)}><use xlinkHref={`public/iconSprite.svg#icon-user`}></use></svg></p>;
      });      
    }
    return <div className="selections"> {listContent}</div>;
  }

  showEmptyOption = (sideOptionName) =>{
    if(this.state[sideOptionName].length>0){
      return <p key="htf" onClick={this.onEmptySelection.bind(this,sideOptionName)} className="clearAll"><svg><use xlinkHref={`public/iconSprite.svg#icon-user`}></use></svg></p>;
    }else{
      return <span className="C-Hide"></span>;
    }
  }

  onSideOptionClick=(val,selectedOption)=>{
    if(this.state[selectedOption].indexOf(val)==-1){
      this.setState({selectedOption:this.state[selectedOption].push(val)});
    }else{
      this.setState({selectedOption:this.state[selectedOption].splice(this.state[selectedOption].indexOf(val),1)});
    }
  }
  
  onRemoveSelection=(val,selectedOption)=>{
    this.setState({selectedOption:this.state[selectedOption].splice(this.state[selectedOption].indexOf(val),1)});
  }

  onEmptySelection=(selectedOption)=>{
    this.setState({selectedOption:this.state[selectedOption].splice(0,this.state[selectedOption].length)});
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
                  {this.showSelection(this.state.selectedYears,"selectedYears")}
                  {this.showEmptyOption("selectedYears")}
                </div>
                <div className="filter">
                  <p className="text">Team</p>
                  {this.showSideOptions(this.props.dataState.teams,"selectedTeams")}
                  {this.showSelection(this.state.selectedTeams,"selectedTeams")}
                  {this.showEmptyOption("selectedTeams")}
                </div>
                <div className="filter">
                  <p className="text">Grounds</p>
                  {this.showSideOptions(this.props.dataState.grounds,"selectedGrounds")}
                  {this.showSelection(this.state.selectedGrounds,"selectedGrounds")}
                  {this.showEmptyOption("selectedGrounds")}
                </div>
                <div className="filter">
                  <p className="text">Result</p>
                  {this.showSideOptions(["won","lost","tied"],"selectedResults")}
                  {this.showSelection(this.state.selectedResults,"selectedResults")}
                  {this.showEmptyOption("selectedResults")}
                </div>
                <div className="filter">
                  <p className="text">Innings</p>
                  {this.showSideOptions(["1st","2nd"],"selectedInnings")}
                  {this.showSelection(this.state.selectedInnings,"selectedInnings")}
                  {this.showEmptyOption("selectedInnings")}
                </div>
                <div className="filter">
                  <p className="text">Toss</p>
                  {this.showSideOptions(["won","lost"],"selectedToss")}
                  {this.showSelection(this.state.selectedToss,"selectedToss")}
                  {this.showEmptyOption("selectedToss")}
                </div>
              </div>
              <Content selectedYears={this.state.selectedYears}
                       selectedTeams={this.state.selectedTeams}
                       selectedGrounds={this.state.selectedGrounds}
                       selectedResults={this.state.selectedResults}
                       selectedInnings={this.state.selectedInnings}
                       selectedToss={this.state.selectedToss} />
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
  return {dataState};
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);