
import { Component, computed, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
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
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterModule,
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

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-End';
  collapsed=signal(false);
  sideNavWidth=computed(()=>this.collapsed() ? '0px': '250px');
  
}
