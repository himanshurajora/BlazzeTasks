import { Component, OnInit } from '@angular/core';
import TasksMock from 'src/app/core/mocks/tasks.mock';
@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
     tasks = TasksMock;
     constructor() {}

     ngOnInit(): void {}
}
