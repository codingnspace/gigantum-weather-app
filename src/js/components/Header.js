import React, {Component} from 'react';
import bike from 'images/bicycle.svg';
import metro from 'images/metro.svg';

export default class Header extends Component {
  displayName: 'Header';

  render () {
    const {title, subtitle} = this.props;

    return (
      <div className='app-header relative'>
        <img className="app-logo-left" src={bike} alt="app-logo" />
        <h1 className='app-title text-center'>{title}</h1>
        <h3 className='app-subtitle text-center'>{subtitle}</h3>
        <img className="app-logo-right" src={metro} alt="app-logo" />
      </div>
    );
  }
}
