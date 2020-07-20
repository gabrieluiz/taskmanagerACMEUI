import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  task: any[];

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    
      this.route.params.subscribe((params: Params) => {
        console.log(params);
      })

      this.taskService.getTask().subscribe((task: any[]) => {
        this.task = task;
      })
    }

}
