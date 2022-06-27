import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { WishListItem } from '../../interfaces/WishListItem.interface';
import type { RootState } from '../store'


const initialState: Array<WishListItem> = []

type wishListParams = {
    id: string;
}

export const WishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishList: (state, action : PayloadAction<wishListParams>) => {
        const {id} = action.payload;
        const wishlistIndex = state.findIndex(item => item.id === id);
        if(wishlistIndex > -1){
            state[wishlistIndex].quantity++;
        }else{
            state.push({id, quantity: 1})
        }
    },
    removeFromWishList: (state, action : PayloadAction<wishListParams>) => {
        const {id} = action.payload;
        const wishlistIndex = state.findIndex(item => item.id === id);
        if(wishlistIndex > -1){
            state.splice(wishlistIndex, 1)
        }
    },
    decreaseQuantityOfWishListItem: (state, action : PayloadAction<wishListParams>) => {
        const {id} = action.payload;
        const wishlistIndex = state.findIndex(item => item.id === id);
        if(wishlistIndex > -1){
            state[wishlistIndex].quantity--;
            if(state[wishlistIndex].quantity === 0){
                state.splice(wishlistIndex, 1)
            }
        }
    }
  }
})


export const { addToWishList, removeFromWishList, decreaseQuantityOfWishListItem } = WishListSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectItemIsOnWishList = (id: string) => 
(state: RootState) => (state.wishlist.findIndex(item => item.id === id) > -1)
export const selectWishListItems = (state: RootState) => (state.wishlist)

export default WishListSlice.reducer