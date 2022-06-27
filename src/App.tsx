import React from "react";
import Toolbar from './features/toolbar/Toolbar'
import ArticleOverview from './features/articleOverview/ArticleOverview'
import './App.css';
import SidePane from "./features/sidePane/SidePane";

const App: React.FC<{}> = props => {
  return (
    <div className="main-wrapper">
        <div className="main-container">
            <div className="main-header">
                <Toolbar/>
            </div>
            <div className="main-content">
                <ArticleOverview/>
            </div>
        </div>
        <SidePane/>
    </div>
  );
};
export default App