import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  createList(taskDescription: string){
    this.taskService.createList(taskDescription).subscribe((response: any)=> {
      console.log(response);
      //navigate to /task/response_id
    });
  }
}
  
  


