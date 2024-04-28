//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
      }
}

class PostList {
    constructor() {
        this.posts = [];
      }
    
      addPost(post) {
        this.posts.push(post);
      }
    
      sharePost(postTitle) {
        console.log(`You've shared post "${postTitle}" to your friend.`);
      }
}

class Post {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comments = [];
    }
    addComment(comment) {
        this.comments.push(comment);
      }
}

class Comment {
    constructor(id, content, createdBy, Like) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }
    addLike(like) {
        this.like++;
    }
}
class Facebook {
    constructor() {
        this.groupList = [];
        this.pageList = [];
    }
    addGroup(groupList) {
        this.groupList++;
    }
    addPage(pageList) {
        this.pageList++;
    }
}

class FacebookPage {
    constructor(name) {
      this.name = name;
    }
  }
  
  class FacebookGroup {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Notification {
    constructor(id) {
      this.id = id;
    }
  
    send(commentCreatedBy, postTitle) {
      console.log(`Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`);
    }
  }