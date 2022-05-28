import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import TasksMock from 'src/app/core/mocks/tasks.mock';
import { StorageService } from 'src/app/services/storage.service';
import { BlazzeTask } from 'src/types';
@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
     tasks: BlazzeTask[] = [];
     constructor(private storageService: StorageService) {}

     getCompletedTasks(): BlazzeTask[] {
          return this.tasks.filter(
               (task) => task.status === 'completed'
          );
     }

     markTaskAsCompleted(task: BlazzeTask) {
          this.storageService.markTaskAsCompleted(task);
     }

     markTaskAsToDo(task: BlazzeTask) {
          this.storageService.markTaskAsToDo(task);
     }

     getToDoTasks(): BlazzeTask[] {
          return this.tasks.filter((task) => task.status === 'todo');
     }

     ngOnInit(): void {
          this.tasks = this.storageService.getTasksFromStorage();
     }
}
