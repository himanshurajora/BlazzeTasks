import { Injectable } from '@angular/core';
import { BlazzeTask } from 'src/types';
import TasksMock from '../core/mocks/tasks.mock';

@Injectable({
     providedIn: 'root',
})
export class StorageService {
     tasks: BlazzeTask[] = [];

     addTask(task: BlazzeTask) {
          this.tasks.push(task);
          this.storeTasks();
     }

     markTaskAsCompleted(task: BlazzeTask) {
          // update task by id
          this.tasks = this.tasks.map((t) => {
               if (t.id === task.id) {
                    t.status = 'completed';
               }
               return t;
          });
          this.storeTasks();
     }

     markTaskAsToDo(task: BlazzeTask) {
          // update task by id
          this.tasks = this.tasks.map((t) => {
               if (t.id === task.id) {
                    t.status = 'todo';
               }
               return t;
          });
          this.storeTasks();
     }

     deleteAllTasks() {
          this.tasks = [];
          this.storeTasks();
     }

     storeTasks() {
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
     }

     getTasksFromStorage() {
          this.tasks = JSON.parse(localStorage.getItem('tasks')!);
          return this.tasks;
     }
}
