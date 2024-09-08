import { LoginComponent } from './components/login/login.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaryReportComponent } from './components/salary-report/salary-report.component';
import { AttenedanceDepartureComponent } from "./components/attenedance-departure/attenedance-departure.component";
import { EditAttendaceComponent } from "./components/edit-attendace/edit-attendace.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SalaryReportComponent, AttenedanceDepartureComponent, EditAttendaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-End';

}
