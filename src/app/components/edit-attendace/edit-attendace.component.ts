import { AttendanceService } from './../../Services/attendnace/attendance.service';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-attendace',
  standalone: true,
  imports: [SidebarComponent,CommonModule,LoaderComponent,RouterModule,FormsModule],
  templateUrl: './edit-attendace.component.html',
  styleUrl: './edit-attendace.component.css'
})
export class EditAttendaceComponent {

  fullText: string = 'Edit Attendance and departure';
  displayedText: string = '';
  typingSpeed: number = 100; // Speed of typing in milliseconds
  
  
  attendnaceId!:any;
  attendnace!:any;
  updatedattendnace!:any;
  employees!:any;
  errors: any = {};   
  isLoading:boolean=false;
  loadingTitle:string='Loading';
  constructor(private route:ActivatedRoute,private attendanceService: AttendanceService){}
  updateAttendance() {
 
  }
  
  
  
  ngOnInit(): void {
    this.attendnaceId= this.route.snapshot.paramMap.get('id');
    // alert(this.attendnaceId);

    this.attendanceService.getAttendance(this.attendnaceId,this.updatedattendnace).subscribe( (response:any) => {
      console.log('Attendance updated successfully:', response);
      this.attendnace=response.attendance
    },
   )
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
