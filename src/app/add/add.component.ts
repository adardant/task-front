import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    checkoutForm: any;

    constructor(private task: TaskService, private router: Router, private formBuilder: FormBuilder) {
        this.checkoutForm = this.formBuilder.group({
            date: '',
            description: ''
        });
    }

    onSubmit(customerData: any) {
        // Process checkout data here
        this.task.addTask(customerData.date, customerData.description).subscribe(data => {

        });
        this.checkoutForm.reset();

        console.warn('Your order has been submitted', customerData);
    }

    ngOnInit(): void {
    }

}
