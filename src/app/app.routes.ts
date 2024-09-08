import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AttenedanceDepartureComponent } from './components/attenedance-departure/attenedance-departure.component';
import { SalaryReportComponent } from './components/salary-report/salary-report.component';
import { EditAttendaceComponent } from './components/edit-attendace/edit-attendace.component';
import { EditReportComponent } from './components/edit-report/edit-report.component';

export const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'attendance',component:AttenedanceDepartureComponent},
  {path:'employeeReport',component:SalaryReportComponent},
  {path:'editAttendance',component:EditAttendaceComponent},
  {path:'editReport',component:EditReportComponent}
];
