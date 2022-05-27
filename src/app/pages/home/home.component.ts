import { Component, OnInit } from '@angular/core';
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

     getAllTasks(): void {
          this.tasks = this.storageService.getAllTasks();
     }

     markCompleted(id: number) {
          this.storageService.markCompleted(id);
     }

     getToDoTasks(): BlazzeTask[] {
          return this.tasks.filter((task) => task.status === 'todo');
     }

     getCompletedTasks(): BlazzeTask[] {
          return this.tasks.filter(
               (task) => task.status === 'completed'
          );
     }

     syncTasks() {
          this.storageService.storeTasks();
          this.getAllTasks();
     }

     ngOnInit(): void {
          this.getAllTasks();
     }
}
