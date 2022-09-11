import { Router } from 'express';
import { createCategory, getCategories, deletedCategory } from '../controllers/categories.controller';


const route = Router();

route.get('/api/categories', getCategories);
route.post('/api/category', createCategory);
route.delete('/api/category/id', deletedCategory);

export default route