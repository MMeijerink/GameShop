import React from "react";
import { WishListItem } from "../../interfaces/WishListItem.interface";
import { selectArticleById } from "../../state/articles/ArticlesSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { addToWishList, decreaseQuantityOfWishListItem, removeFromWishList } from "../../state/wishlist/WishListSlice";
import './WishListItemRenderer.css';

const WishListItemRenderer: React.FC<WishListItem> = props => {
  const dispatch = useAppDispatch()
  const {id, quantity} = props;
  const article = useAppSelector(selectArticleById(id));
  return (
    <div className="whislist-item">
      <span className="game-name">{article?.Game}</span>
      <span className="quantitiy">
        <a onClick={() => {
            dispatch(decreaseQuantityOfWishListItem({id}))
          }}>
            &#10134;
        </a> 
        &nbsp; { quantity } &nbsp;
          <a onClick={() => {
            dispatch(addToWishList({id}))
          }}>
            &#10133;
            </a>
      </span>
      <a onClick={() => {
            dispatch(removeFromWishList({id}))
          }}>
          &#128465;
      </a>
      </div>
  );
};

export default WishListItemRenderer

function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
