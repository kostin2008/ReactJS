import { db } from '../';

export const postsRef = db.ref('posts');

export const postApi = {
  createPost: (title, content) => {
    return postsRef.push({title, content});
  }
}