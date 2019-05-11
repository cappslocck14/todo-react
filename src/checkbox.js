import React from 'react';
import ReactDOM from 'react-dom';

var Checkbox = React.createClass({
    getInitialState: function() {
      return {
        isChecked: true
      };
    },
    toggleChange: function() {
      this.setState({
        isChecked: !this.state.isChecked // flip boolean value
      }, function() {
        console.log(this.state);
      }.bind(this));
    },
    render: function() {
      return (
        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange} />
          Check Me!
        </label>
      );
    }
  });
  
  React.render(<Checkbox />, document.getElementById('checkbox'));