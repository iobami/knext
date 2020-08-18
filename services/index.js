export class FilterPosts {
  constructor(posts) {
    this.posts = posts;
  }
  getPostById(id) {
    return this.posts.find(({ id: postId }) => `${postId}` === `${id}`);
  }
}