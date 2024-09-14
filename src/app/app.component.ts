import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SalaryReportComponent } from './components/salary-report/salary-report.component';
import { AttenedanceDepartureComponent } from "./components/attenedance-departure/attenedance-departure.component";
import { EditAttendaceComponent } from "./components/edit-attendace/edit-attendace.component";
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';
import { AddHolidayComponent } from './components/add-holiday/add-holiday.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    SidebarComponent,
    LoginComponent,
    SalaryReportComponent,
    AttenedanceDepartureComponent,
    EditAttendaceComponent,
    GeneralSettingsComponent,
    AddHolidayComponent
],


})
export class AppComponent {
  title = 'Front-End';
  collapsed=signal(false);
  sideNavWidth=computed(()=>this.collapsed() ? '65px': '250px');



}
