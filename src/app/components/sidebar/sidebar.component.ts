import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavIcons } from '../../sidenav-icons';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule }from '@angular/material/list';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  

  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
menuItems = signal<SidenavIcons[]>([
  {icon:'dashboard',
    label:'DashBoard',
    route:'homePage'
  },
  {icon:'groups_3',
    label:'Group privileges',
    route:'addgroup'
  },
  {icon:'person_add',
    label:'New Admin',
    route:'addadmin'
  },
  {icon:'group_add',
    label:'Register Employee',
    route:'addemployee'
  },
  {icon:'settings_b_roll',
    label:'General Settings',
    route:'generalsettings'
  },
  {icon:'calendar_today',
    label:'official Holidays',
    route:'addholiday'
  },
  {icon:'playlist_add_check_circle',
    label:'Attendance and Departure',
    route:'attendance-departure'
  },
  {icon:'assignment',
    label:'Employee Salaries',
    route:'salaryreport'
  },
])
}
