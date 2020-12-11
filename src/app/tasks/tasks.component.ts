import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    tasks: any = {};

    constructor(private task: TaskService) {
        this.task.getTasks().subscribe(data => {
            this.tasks = data;
        })

    }

    delete(id: string) {
        this.task.deleteTask(id).subscribe(data => {

        });
        this.task.getTasks().subscribe(data => {
            this.tasks = data;
        })
    }

    ngOnInit(): void {
    }

}
