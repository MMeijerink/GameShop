import React from "react";
import { useAppDispatch } from "../../state/hooks";
import { togglePane } from "../../state/pane/PaneSlice";
import './Toolbar.css';



const Toolbar: React.FC<{}> = props => {
  const dispatch = useAppDispatch()
  return (
    <div className="toolbar-container">
        <span className="title">
          <img src ="./logo.png"/>
          GameShop
          </span>
        <button>
          <img 
          src ="./heart.png" 
          onClick={() => {
            dispatch(togglePane())
          }}/>
        </button>
    </div>
  );
};

export default Toolbar