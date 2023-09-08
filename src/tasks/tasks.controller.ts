// src/tasks/tasks.controller.ts

import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { Task } from './tasks.module';

@Controller('tasks')
export class TasksController {
  private tasks: Task[] = [];
  private taskIdCounter = 1;

  @Get()
  getAllTasks(): Task[] {
    return this.tasks;
  }

  @Post()
  createTask(@Body() taskData: Task): Task {
    const newTask = { ...taskData, id: this.taskIdCounter++ };
    this.tasks.push(newTask);
    return newTask;
  }

  @Delete(':id')
  deleteTask(@Param('id') taskId: string): Task {
    const index = this.tasks.findIndex((task) => task.id === +taskId);
    if (index !== -1) {
      const deletedTask = this.tasks.splice(index, 1)[0];
      return deletedTask;
    } else {
      return null;
    }
  }
}
