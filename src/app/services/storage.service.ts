import { Injectable } from '@angular/core';
import { BlazzeTask } from 'src/types';
import TasksMock from '../core/mocks/tasks.mock';

@Injectable({
     providedIn: 'root',
})
export class StorageService {
     tasks: BlazzeTask[] = TasksMock;

     addTask(task: BlazzeTask) {
          this.tasks.push(task);
          this.storeTasks();
     }

     removeTaskById(id: number) {
          this.tasks = this.tasks.filter((task) => task.id !== id);
          this.storeTasks();
     }

     getAllTasks(): BlazzeTask[] {
          return this.tasks;
     }

     markCompleted(id: number) {
          this.tasks = this.tasks.map((task) => {
               if (task.id === id) {
                    task.status = 'completed';
               }
               return task;
          });
          this.storeTasks();
     }

     markToDo(id: number) {
          this.tasks = this.tasks.map((task) => {
               if (task.id === id) {
                    task.status = 'todo';
               }
               return task;
          });
     }

     storeTasks() {
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
     }
}
