import React, { Component } from "react";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import HomePage from "./pages/HomePage";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {
    render() {
        return (
            <div>
                <HomePage />
                <CategorySelectionPage />
                <NewEntryPage />
            </div>
        );
    }
}

export default App;