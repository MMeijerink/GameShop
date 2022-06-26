import { createSlice} from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {loadData} from '../../data/DataLoader'
import { Article } from '../../interfaces/Article.interface'


const initialState: Array<Article> = []

export const ArticlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    fetchData: (state) => {
      return loadData();
    }
  }
})


export const { fetchData } = ArticlesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectArticles = (state: RootState) => state.articles
export const selectArticleById = (id: String) => (state: RootState) => state.articles.find(({id: _id}) => _id === id)

export default ArticlesSlice.reducer