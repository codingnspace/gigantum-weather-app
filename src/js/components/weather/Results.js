//Vendor
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Locals
import bike from 'images/bicycle.svg';
import metro from 'images/metro.svg';

class Results extends Component {
  static propTypes ={
    results: PropTypes.array
  }

  static defaultProps = {
    results: []
  }

  render () {
    const resultList = this.props.results && this.props.results.map((result, idx) => {
      return (
        <div key={result.idx} className="result">
          <div className='result-day-text'>{idx === 0 ? 'Today' : result.day}</div>
          <div className='result-img'>
            <img src={result.decision === 'bike' ? bike : metro} alt={result.decision === 'bike' ? 'bike_img' : 'metro_img'} />
          </div>
        </div>
      );
    });
    return (
      <div className="result-list">
        <h2>Your Results Are In...</h2>
        {resultList}
        <div className="btn-wrapper">
          <button onClick={this.props.resetResults}>Start Over</button>
        </div>
      </div>
    );
  }
}

export default Results;
