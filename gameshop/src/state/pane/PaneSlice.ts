import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { WishListItem } from '../../interfaces/WishListItem.interface';
import type { RootState } from '../store'


const initialState: Boolean = false;

export const PaneSlice = createSlice({
  name: 'pane',
  initialState,
  reducers: {
    togglePane: (state : Boolean) => {
        return !state;
    }
  }
})

export const { togglePane } = PaneSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPaneState = (state: RootState) => (state.pane);

export default PaneSlice.reducer