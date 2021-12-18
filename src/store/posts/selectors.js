export const getLoadingStatus = (state) => state.posts.isLoading;
export const getLoadingError = (state) => state.posts.error; 
export const getPostsList = (state) => state.posts.posts;