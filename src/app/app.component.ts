<<<<<<< HEAD
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddHolidayComponent } from './components/add-holiday/add-holiday.component';
=======
>>>>>>> b9204c162b720f8a0420ab3e6e662b624338bde1

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
import { MatSidenavModule } from '@angular/material/sidenav'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet , GeneralSettingsComponent,AddHolidayComponent],
=======

  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FontAwesomeModule,
    SidebarComponent,
    LoginComponent,
    SalaryReportComponent,
    AttenedanceDepartureComponent,
    EditAttendaceComponent
],

>>>>>>> b9204c162b720f8a0420ab3e6e662b624338bde1
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-End';
  collapsed=signal(false);
  sideNavWidth=computed(()=>this.collapsed() ? '65px': '250px');
 


}
