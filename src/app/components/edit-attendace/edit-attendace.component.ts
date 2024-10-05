import { group } from '@angular/animations';
import { AttendanceService } from './../../Services/attendnace/attendance.service';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule } from '@angular/material/icon';
import {  MatInputModule } from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-attendace',
  standalone: true,
  imports: [ReactiveFormsModule,SidebarComponent,CommonModule,LoaderComponent,RouterModule,FormsModule,FontAwesomeModule,MatIconModule,MatInputModule],
  templateUrl: './edit-attendace.component.html',
  styleUrl: './edit-attendace.component.css'
})
export class EditAttendaceComponent {
  faLongArrowRight=faLongArrowRight;
  fullText: string = 'Edit Attendance and departure';
  displayedText: string = '';
  typingSpeed: number = 100; // Speed of typing in milliseconds
  
  generalSteetingId!:number;
  attendnaceId!:number;
  attendnaceForm!:FormGroup;
  updatedattendnace!:any;
  // employees!:any;
  errors: any = {};   
  
  constructor(private route:ActivatedRoute,
    private attendanceService: AttendanceService,
    private fp: FormBuilder,
    private router:Router,
    private snackBar:MatSnackBar)
  {
    this.attendnaceForm=this.fp.group({
      employee_id:[''],
      name:[''],
      department:[''],
      check_in:[''],
      check_out:[''],
      date:[''],
      hours:[''],
      status:['']
    })


  }
  attendanceLoad(){
    this.attendanceService.getAttendance(this.attendnaceId).subscribe({
      next:(res)=>{
        console.log(res);
        if (res.attendance.employee_id==res.attendance.employee.id)
       { this.attendnaceForm.patchValue(
          {
            employee_id: res.attendance.employee_id,         
            name: res.attendance.employee.name,         
            department: res.attendance.employee.department.department_name,        
            check_in: res.attendance.check_in.slice(0,5),         
            check_out: res.attendance.check_out.slice(0,5),            
            date: res.attendance.date,         
            hours: res.attendance.hours,         
            status: res.attendance.status,       
             }
        );}else {
          this.snackBar.open('error in attendance', 'Close', { duration: 3000 });

        }
      },
      error: (err:any)=>{
        console.log(err);
        this.errors=err.error.errors;
        this.displayedText = 'Error loading attendnace details';
        setTimeout(this.typeWriter, 2000); 
      }
    });
  }
  
  updateAttendance() {
    if(this.attendnaceForm.valid){
      this.attendanceService.updateAttendance(this.attendnaceId,this.attendnaceForm.value).subscribe({
        next: (res:any) => {
          console.log('Attendance updated successfully:', res);
          this.snackBar.open('attendance has been edited successfully ✔','close',{duration: 3000});
          this.router.navigate(['/attendance-departure']);
        },
        error: (err:any) => {
          this.errors=err.error.errors;
          this.snackBar.open('Failed to edit attendance', 'Close', { duration: 3000 });

        }
      });
    }
 
  }
  
  
  
  ngOnInit(): void {
    this.attendnaceId= this.route.snapshot.params['id'];
    this.attendanceLoad();
    // alert(this.attendnaceId);

    this.typeWriter();
  }















  typeWriter(): void {
    let i = 0;
    const type = () => {
      if (i < this.fullText.length) {
        this.displayedText += this.fullText.charAt(i);
        i++;
        setTimeout(type, this.typingSpeed); // Adjust typing speed here
      }
    };
    type();
  }
}
