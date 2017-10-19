//Vendor
import React, {Component} from 'react';
//Components
import Header from 'js/components/Header';
import DisplaySwitcher from 'js/components/weather/DisplaySwitcher';

export default class App extends Component {
  displayName: 'App';

  render () {
    return (
        <div className='root'>
          <Header title="Should I Bike Or Metro?" subtitle="A Very Cool App for the DC Metro Area" />
          <DisplaySwitcher />
        </div>

    );
  }

}
