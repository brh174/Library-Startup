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
  displaySuccess: false,
	selectedTab: 'tab-1',
  firstName: '',
  lastName: '',
  email: ''
}

class App extends Component {

  constructor() {
  	super();
  	this.state = initialState;

  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //sending info to mailchimp
  onSubmitSignUp = () => {

    let capFirstName = this.capitalizeFirstLetter(this.state.firstName);
    let capLastName = this.capitalizeFirstLetter(this.state.lastName);

    fetch('https://hutchins-designs-backend.herokuapp.com/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        firstName: capFirstName,
        lastName: capLastName,
        email: this.state.email,
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.setState({displaySuccess: true});
        }
      })
  }

  handleTabChange = (selectedTab) => {
  	this.setState({selectedTab: selectedTab});
  }

  onFirstNameChange = (event) => {
    this.setState({firstName: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onLastNameChange = (event) => {
    this.setState({lastName: event.target.value});
  }

  onCallToAction = (isModalOpen) => {
    this.setState({isModalOpen: true});
  }

  handleCloseBtnClick = (isModalOpen) => {
    this.setState({isModalOpen: false, displaySuccess: false});
  }

  render() {
    return (
    <div className="App">
        	<Showcase onCallToAction={this.onCallToAction} isModalOpen={this.state.isModalOpen} />
          <Modal 
            isModalOpen={this.state.isModalOpen}
            displaySuccess={this.state.displaySuccess}
            handleCloseBtnClick={this.handleCloseBtnClick}
            onFirstNameChange={this.onFirstNameChange}
            onEmailChange={this.onEmailChange}
            onLastNameChange={this.onLastNameChange} 
            handleInsideClick={this.handleInsideClick}
            onSubmitSignUp={this.onSubmitSignUp}
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
