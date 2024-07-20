+++
title = "JavaScript Factory Pattern"
date = 2024-07-20
updated = 2024-07-20
description = "An example of the Factory Pattern in JavaScript."

[taxonomies]
tags = ["JSPatterns"]

[extra]
footnote_backlinks = true
+++

## JavaScript Factory Pattern

This is an example on how to apply the factory pattern.

### Implementation

#### base class and two child classes

```javascript
// Base class User
class User {
  constructor(name, role) {
    this.name = name
    this.role = role
  }

  displayRole() {
    console.log(`${this.name} has the role of ${this.role}`)
  }
}

// Subclass Administrator extending User
class Administrator extends User {
  constructor(name) {
    super(name, 'Administrator')
  }
}

// Subclass Editor extending User
class Editor extends User {
  constructor(name) {
    super(name, 'Editor')
  }
}
```

#### Factory function to create users

```javascript
// Factory function to create users
function createUser(role) {
  let user

  switch (role) {
    case 'admin':
      user = new Administrator('Admin')
      break
    case 'editor':
      user = new Editor('Editor')
      break
    default:
      user = new User('User', 'Common')
  }

  return user
}
```

#### Main program

```javascript
// Using the factory function
const admin = createUser('admin')
admin.displayRole() // Output: "Admin has the role of Administrator"

const editor = createUser('editor')
editor.displayRole() // Output: "Editor has the role of Editor"
```

In this example we create users with the help of a factory function.
