## Task Tracker
Task Tracker is a simple task management application built with NestJS, a powerful Node.js framework for building scalable and efficient server-side applications. With Task Tracker, you can easily create, list, and delete tasks.

## Features
- Create Tasks: Add new tasks with titles.
- List Tasks: View a list of all your tasks.
- Delete Tasks: Remove tasks from your task list.

## Getting Started
Follow the steps below to set up and run Task Tracker on your local machine.

## Prerequisites
Before you begin, ensure you have the following dependencies installed on your system:

- [Node](https://nodejs.org/en "Node") | JavaScript runtime environment.
- [Npm](https://www.npmjs.com/ "Npm") | Node Package Manager.
- [NestJS](https://docs.nestjs.com/cli/overview "NestJS") | To generate and manage your NestJS application.

## Installation
Clone the repository to your local machine

1. Clone the repository to your local machine:
```sh
git clone https://github.com/CyrilBaah/task-tracker.git
cd task-tracker
```
2. Install the project dependencies:
```sh
npm install
```

## Running the Application
Start the Task Tracker application using the following command:
```sh
npm run start
```
The application will run on http://localhost:3000.

## Lint the Application
```sh
npm run lint
```

## Format the Application
```sh
npm run format
```

## Usage
1.To create a new task, send a POST request to http://localhost:3000/tasks with a JSON body containing the task title.

Example using cURL:
```sh
curl -X POST -H "Content-Type: application/json" -d '{"title": "Task 1"}' http://localhost:3000/tasks
```

2.To list all tasks, send a GET request to http://localhost:3000/tasks.

Example using cURL:
```sh
curl http://localhost:3000/tasks
```

3.To delete a task, send a DELETE request to http://localhost:3000/tasks/:id, where :id is the ID of the task you want to delete.

Example using cURL (replace <taskId> with the actual task ID):
```sh
curl -X DELETE http://localhost:3000/tasks/<taskId>
```