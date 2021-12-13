import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/api';
import categories from './middleware/categories';
import search from './middleware/search';

const store = configureStore({
  reducer,
  middleware: [api, categories, search],
});

export default store;
