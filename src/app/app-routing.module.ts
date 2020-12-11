import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
    { path: 'tasks', component: TasksComponent },
    { path: 'add', component: AddComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
