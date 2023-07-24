import { Router } from 'express';
import {
  createBook,
  getAllBooks,
  getOneBook,
  updateOneBook,
  deleteOneBook,
} from '../controllers/book-controller.js';

const router = Router();

router
  .route('/')
  .post(createBook)
  .get(getAllBooks);

router
  .route('/:id')
  .get(getOneBook)
  .put(updateOneBook)
  .patch(updateOneBook)
  .delete(deleteOneBook);

export default router;