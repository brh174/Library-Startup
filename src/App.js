import React, { Component, useRef } from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import Showcase from './Components/Showcase/showcase.js';
import Modal from './Components/Modal/modal.js';
import Tabs from './Components/Tabs/tabs.js';
import TabOneContent from './Components/Tabs/TabOneContent/TabOneContent.js';
import TabTwoContent from './Components/Tabs/TabTwoContent/TabTwoContent.js';
import TabThreeContent from './Components/Tabs/TabThreeContent/TabThreeContent.js';
import './App.css';

const initialState = {
	route: 'landing',
	isModalOpen: false,
	selectedTab: 'tab-1',
  registerName: '',
  registerEmail: '',
  registerPass: ''
}

class App extends Component {

  constructor() {
  	super();
  	this.state = initialState;
  }

  handleTabChange = (selectedTab) => {
  	this.setState({selectedTab: selectedTab});
  }

  removeBorder = () => {
    this.state.selectedTab.classList.add('tab-border');
  }

  onNameChange = (event) => {
    this.setState({registerName: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({registerEmail: event.target.value});
  }

  onPassChange = (event) => {
    this.setState({registerPass: event.target.value});
  }

  onCallToAction = (isModalOpen) => {
    this.setState({isModalOpen: true});
  }

  handleCloseBtnClick = (isModalOpen) => {
    this.setState({isModalOpen: false});
  }

  

  render() {
    return (
    <div className="App">
        	<Showcase onCallToAction={this.onCallToAction} isModalOpen={this.state.isModalOpen} />
          <Modal 
            isModalOpen={this.state.isModalOpen} 
            handleCloseBtnClick={this.handleCloseBtnClick}
            onNameChange={this.state.onNameChange}
            onEmailChange={this.state.onEmailChange}
            onPassChange={this.state.onPassChange} 
          />
       		<Tabs 
            selectedTab={this.state.selectedTab} 
            handleTabChange={this.handleTabChange} 
            onCallToAction={this.state.isModalOpen} 
          />
          {(() => {
            switch (this.state.selectedTab) {
              case 'tab-1':
                return <TabOneContent 
                  isModalOpen={this.state.isModalOpen} 
                  onCallToAction={this.onCallToAction}
                />;
              case 'tab-2':
                return <TabTwoContent 
                  isModalOpen={this.state.isModalOpen} 
                  onCallToAction={this.onCallToAction}
                />;
              case 'tab-3':
                return <TabThreeContent 
                  isModalOpen={this.state.isModalOpen} 
                  onCallToAction={this.onCallToAction}
                />;
              default:
                return null;
            }
          })()
        }
    </div>
    )
  };
}

export default App;
