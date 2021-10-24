import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[]=[];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshTasks();
  }

  refreshTasks(){
    this.service.getTasks().subscribe( data =>
      {
        this.tasks = data;
      });
  }

}
