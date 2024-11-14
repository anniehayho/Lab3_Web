// Post class to represent each post
class Post {
    constructor({ userId, id, title, body }) {
      this.userId = userId;
      this.id = id;
      this.title = title;
      this.body = body;
    }
  }
  
// PostManager class to handle a collection of posts and perform analysis
class PostManager {
constructor(posts) {
    this.posts = posts;
}

// Calculate total number of posts
getTotalPosts() {
    return this.posts.length;
}

// Calculate average length of post titles
getAverageTitleLength() {
    const totalTitleLength = this.posts.reduce((sum, post) => sum + post.title.length, 0);
    return (totalTitleLength / this.posts.length).toFixed(2);
}

// Get the number of posts created by a specific user
getUserPostCount(userId) {
    return this.posts.filter(post => post.userId === userId).length;
}

// Display statistics in the #statistics div
displayStatistics(userId) {
    const statisticsDiv = document.getElementById('statistics');
    statisticsDiv.innerHTML = `
    <p>Total number of posts: ${this.getTotalPosts()}</p>
    <p>Average title length: ${this.getAverageTitleLength()}</p>
    <p>Number of posts by user ID ${userId}: ${this.getUserPostCount(userId)}</p>
    `;
}
}

// Fetch posts data from the API, create Post instances, and analyze
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    // Create Post instances and store them in the PostManager
    const posts = data.map(postData => new Post(postData));
    const postManager = new PostManager(posts);

    // Display analysis for a specific user ID
    const userId = 1;
    postManager.displayStatistics(userId);
})
.catch(error => console.error('There was a problem with the fetch operation:', error));
