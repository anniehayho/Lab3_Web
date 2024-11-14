// User class to represent each user
class User {
    constructor({ id, name, email }) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  
// Generate HTML to display the user's name and email
display() {
    return `
    <div class="user">
        <strong>${this.name}</strong> - ${this.email}
    </div>
    `;
}
}

// UserManager class to handle a collection of users and perform operations
class UserManager {
constructor(users) {
    this.users = users;
}

// Display all users in the #user-list div
displayUsers(filteredUsers = this.users) {
    const userListDiv = document.getElementById('user-list');
    userListDiv.innerHTML = filteredUsers.map(user => user.display()).join('');
}

// Filter users by name and display the filtered list
filterUsersByName(searchTerm) {
    const filteredUsers = this.users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.displayUsers(filteredUsers);
}
}

// Fetch user data from the API and initialize the UserManager
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    // Create User instances and store them in the UserManager
    const users = data.map(userData => new User(userData));
    const userManager = new UserManager(users);

    // Display all users initially
    userManager.displayUsers();

    // Attach filter function to global scope to use with the search box
    window.filterUsers = () => {
    const searchTerm = document.getElementById('search').value;
    userManager.filterUsersByName(searchTerm);
    };
})
.catch(error => console.error('There was a problem with the fetch operation:', error));
