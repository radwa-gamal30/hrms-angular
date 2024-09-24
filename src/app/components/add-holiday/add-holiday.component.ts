import { Component, OnInit } from '@angular/core';
import { Holiday, HolidayService } from '../../Services/holiday/holiday.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import {faEdit, faDeleteLeft, faEye  }  from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-holiday',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,FontAwesomeModule,MatIconModule],
  templateUrl: './add-holiday.component.html',
  styleUrl: './add-holiday.component.css'
})
export class AddHolidayComponent  implements OnInit{
  deleteicon=faDeleteLeft;
  edit=faEdit;
  show=faEye;

  name:string='';
  holiday_date!:string;
  holidayId!:number;
  holidays!:Holiday[];
  selectedHoliday:any  = {}; 
  errors:any[]=[];
  constructor(private holidayService:HolidayService,private router:Router,private snackBar:MatSnackBar) { }
  ngOnInit(): void {
   
    this.loadHolidays();
  }
  loadHolidays(){
    this.holidayService.getHolidays().subscribe({
      next: (res) => {
        console.log(res.holidays);
        
        this.holidays = res.holidays;
      },
      error: (error) => {
        console.error('Error retrieving holidays', error);
      }
    })
    
  }
  // this.snackBar.open('holiday is added successfully ✔','close',{duration:3000});
  
deleteHoliday(selectedHoliday:any) {
  if (confirm('Are you sure you want to delete this employee?')) {
     
    this.holidayService.deleteHoliday(selectedHoliday).subscribe({
      next: (res:any) => {
        this.snackBar.open('holiday deleted successfully', 'Close', { duration: 3000 });
        this.loadHolidays(); 
        alert(res.message);
        this.router.navigate(['/addholiday']);
      },
      error: (err) => {
        this.errors=err.error.errors;
        
        this.snackBar.open('Failed to delete holiday', 'Close', { duration: 3000 });
        // alert('Error deleting holiday');
        console.error('Error deleting employee', err);
      }
    });
  }
}

addHoliday() {
  var inputs={
    id:this.holidayId,
    name:this.name,
    holiday_date:this.holiday_date
  }
  this.holidayService.addHoliday(inputs).subscribe({
    next: (res:any)=>{
      this.name='',
      this.holiday_date='',
  this.snackBar.open('holiday is added successfully ✔','close',{duration:3000});
},
    error: (err)=>{
      this.errors=err.error.errors;
      this.snackBar.open('error occured while adding holiday, try again !','close',{duration: 3000});
      console.error('Error while adding holiday', err);
    }
  })
}
  

 
}
