import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import TasksMock from 'src/app/core/mocks/tasks.mock';
import { StorageService } from 'src/app/services/storage.service';
import { BlazzeTask } from 'src/types';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
     tasks: BlazzeTask[] = [];
     taskForm!: FormGroup;

     constructor(
          private storageService: StorageService,
          private fb: FormBuilder
     ) {}

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

     addTask() {
          if (
               this.taskForm.value?.title.trim() !== '' &&
               this.taskForm.value?.description.trim() !== ''
          ) {
               this.storageService.addTask({
                    id: this.tasks.length + 1,
                    title: this.taskForm.value.title,
                    description: this.taskForm.value.description,
                    status: 'todo',
               });
               this.taskForm.reset();
          }
     }

     deleteAllTasks() {
          this.storageService.deleteAllTasks();
          this.tasks = this.storageService.getTasksFromStorage();
     }

     ngOnInit(): void {
          this.tasks = this.storageService.getTasksFromStorage();
          this.taskForm = this.fb.group({
               title: '',
               description: '',
          });
     }
}
