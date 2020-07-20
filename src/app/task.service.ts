import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskUrl = 'http://localhost:8081/task';

  constructor(private webReqService: WebRequestService) { }

createList(taskDescription: string) {
  return this.webReqService.post('task',{taskDescription});
}

getTask() {
  return this.webReqService.get('task');
 }

}
