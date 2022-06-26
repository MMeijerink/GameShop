import React from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { selectPaneState, togglePane } from "../../state/pane/PaneSlice";
import WishList from "../wishList/WishList";
import './SidePane.css';

const ArticleCard: React.FC<{}> = props => {
    const dispatch = useAppDispatch()
    const showPane = useAppSelector(selectPaneState);
  return (
    <div className={showPane ? 'panel_show' : 'panel_hide'}>
        <button>
          <img 
          src ="./heart.png" 
          onClick={() => {
            dispatch(togglePane())
          }}/>
        </button>
        <WishList/>
    </div>
  );
};

export default ArticleCard