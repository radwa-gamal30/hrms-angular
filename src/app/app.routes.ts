import { Routes } from '@angular/router';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { AddHolidayComponent } from './components/add-holiday/add-holiday.component';


export const routes: Routes = [
    {path: 'addgroup',component: AddGroupComponent, title:'Add Group'},
    {path: 'addholiday',component: AddHolidayComponent, title:'Add Holiday'},
    // {path:''}
];
