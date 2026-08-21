+++
title = "JavaScript Observer Pattern."
date = 2024-07-14
updated = 2024-07-14
description = "An example of the Observer Pattern in JavaScript."

[taxonomies]
tags = ["Design Patterns"]

[extra]
footnote_backlinks = true
+++

## JavaScript Observer Pattern

This is an example of how to apply the observer pattern to a to-do list app.

### Main components

- **The subject**: It represents the list of tasks. When a task is added, modified, or deleted, it notifies the observers subscribed to it.

- **The observers**: These are components of the user interface that can subscribe to the subject (the to-do list). When they receive a notification from the to-do list, they can update themselves.

### Implementation

#### The subject (the to-do list)

```javascript
class TodoList {
  constructor() {
    this.todos = []
    this.observers = []
  }

  attach(observer) {
    this.observers.push(observer)
  }

  detach(observer) {
    const index = this.observers.indexOf(observer)
    if (index !== -1) {
      this.observers.splice(index, 1)
    }
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this.todos))
  }

  addTodo(todo) {
    this.todos.push(todo)
    this.notify()
  }

  removeTodo(index) {
    this.todos.splice(index, 1)
    this.notify()
  }

  updateTodo(index, todo) {
    this.todos[index] = todo
    this.notify()
  }
}
```

#### An observer

```javascript
class TodoDisplay {
  update(todos) {
    console.log('Total tasks:', todos.length, 'tasks')
  }
}
```

#### Main program

```javascript
const todoList = new TodoList()
const display = new TodoDisplay()

todoList.attach(display)

todoList.addTodo({ title: 'buy a bottle of milk' })
todoList.removeTodo(0) // remove the task
```

In this example, when adding a new task to the to-do list, the to-do list notifies its observers. In this example there is one observer, but we can add more observers. The display observer updates when it receives the notification from the to-do list.
