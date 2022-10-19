import * as React from 'react';
import Hello from './Hello';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }
  changeDisplay = () => {
    if (this.state.display) {
      this.setState({ display: false });
    } else {
      this.setState({ display: true });
    }
  };

  render() {
    if (this.state.display)
      return (
        <div style={{ textAlign: 'center' }}>
          <Hello />
          <button onClick={this.changeDisplay}>
            Change display the component
          </button>
        </div>
      );
    else {
      return (
        <div style={{ textAlign: 'center' }}>
          <button onClick={this.changeDisplay}>
            Change display the component
          </button>
        </div>
      );
    }
  }
}

export default App;
