import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {url: '', shortUrl: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.url);
    event.preventDefault();
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Short URL
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <label>Url: 
          <input className="Url-input" type="url" value={this.state.url} onChange={this.handleChange}/>
        </label>
        
        <input className="submitBtn" value={"Shorthen"} type="submit" onSubmit={this.handleSubmit}/>
        
        <a
          className="App-link"
          href={this.state.shortUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.state.shortUrl}
        </a>
      </header>
    </div>
  );
  }
}

export default App;
