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
    
    let request = require("request");
      let linkRequest = {
        destination: this.state.url,
        domain: { fullName: "rebrand.ly" }
        //, slashtag: "A_NEW_SLASHTAG"
        //, title: "Rebrandly YouTube channel"
      }

      let requestHeaders = {
        "Content-Type": "application/json",
        "apikey": "b8cdae948afa4e1d9b81e54bbb41d95c",
        //"workspace": "YOUR_WORKSPACE_ID"
      }

      request({
          uri: "https://api.rebrandly.com/v1/links",
          method: "POST",
          body: JSON.stringify(linkRequest),
          headers: requestHeaders
      }, (err, response, body) => {
        if(err){
          console.log(err);
        }
        else{
          let link = JSON.parse(body);
          console.log(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
          this.setState({shortUrl:link.shortUrl});
        }
        
      });
    
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
        <form onSubmit={this.handleSubmit}>
        <label>Url: 
          <input className="Url-input" type="url" value={this.state.url} onChange={this.handleChange}/>
        </label>
        
        <input className="submitBtn" value={"Shorthen"} type="submit" />
        </form>
        <a
          className="App-link"
          href={'http://' + this.state.shortUrl}
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
