import React from "react";
import ReactDOM from "react-dom";
import ContactDetails from "./ContactDetails";
import List from "./List";

import "./styles.css";
import Search from "./Search";

class App extends React.Component {
  state = {
    searchTerm: "",
    contacts: []
  };

  componentDidMount() {
    this.setState({
      contacts: ContactDetails
    });
  }

  onSearchHandler = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  
  render() {
    //search using filter function
    const toSearch = searchTerm => item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase());

    const contacts = this.state.contacts
      .filter(toSearch(this.state.searchTerm))
      .map(contact => (
        <List
          key={contact.id}
          id={contact.id}
          name={contact.name}
          imageUrl={contact.imageUrl}
        
        />
      ));

    return (
      <div className="App">
        <Search
          contactsValue={this.state.searchTerm}
          onChangeHandler={this.onSearchHandler}
        />
        {contacts}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
