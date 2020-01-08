import React, { Component } from "react";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import HomePage from "./pages/HomePage";
import NewEntryPage from "./pages/NewEntryPage";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
    
    
    render() {
        return (
            <div>
                <BrowserRouter>
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/category">Category</Link>
                        <Link to="/entry">New Entry</Link>

                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/category" component={CategorySelectionPage} />
                        <Route exact path="/entry" component={NewEntryPage} />
                    </>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;