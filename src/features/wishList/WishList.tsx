import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../state/hooks";
import WishListItemRenderer from "./WishListItemRenderer";
import './WishList.css';
import { selectWishListItems } from "../../state/wishlist/WishListSlice";

const WishList: React.FC<{}> = props => {
  const items = useAppSelector(selectWishListItems);
  return (
    <div className="whislist-container">
        <ul className="whislist-list">
          {items.map(item => (<WishListItemRenderer {...item}/>))}
        </ul>
    </div>
  );
};

export default WishList