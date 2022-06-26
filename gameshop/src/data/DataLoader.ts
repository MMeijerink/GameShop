
import { Article } from '../interfaces/Article.interface';
import data from './articles-data.json';

export const loadData = () => {
   return data as Array<Article>;
}
