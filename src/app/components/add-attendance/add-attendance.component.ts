import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-attendance',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './add-attendance.component.html',
  styleUrl: './add-attendance.component.css'
})
export class AddAttendanceComponent {
departureTime!: any;
attedanceTime!: any;
department_name!: any;
employee_name!: any;

}
