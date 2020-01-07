import React, { Component } from "react";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import HomePage from "./pages/HomePage";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {
    state = { location: "home" }

    getPage() {
        const { location } = this.state;
        switch(location) {
            case "home":
                return <HomePage />
            case "categorySelection":
                return <CategorySelectionPage />
            case "newEntry":
                return <NewEntryPage />
            default:
                return null;
        }
    }

    changeLocation(location) {
        this.setState({ location });
    }
    
    render() {
        return (
            <div>
                <button>Home</button>
                <button>Category Selection</button>
                <button onClick={} >New Entry</button>
                {this.getPage()}
            </div>
        );
    }
}

export default App;