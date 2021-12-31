const BlogPost = function (title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
};

const blogPost1 = new BlogPost("post1", "body1", "author1");
