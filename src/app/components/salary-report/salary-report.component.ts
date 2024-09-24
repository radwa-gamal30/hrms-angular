import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import {faPrint }  from '@fortawesome/free-solid-svg-icons';
import { AttendanceService, monthlyReport } from '../../Services/attendnace/attendance.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-salary-report',
  standalone: true,
  imports: [SidebarComponent,MatTooltipModule,MatTableModule,MatPaginatorModule,CommonModule,FontAwesomeModule,MatIconModule],
  templateUrl: './salary-report.component.html',
  styleUrl: './salary-report.component.css'
})
export class SalaryReportComponent {

  print=faPrint;

  report!:monthlyReport[];
  dataSource = new MatTableDataSource<monthlyReport>([]);
  onboard:any='./assets/images/onboard(1).png';
  isLoading: boolean=false;
  displayedColumns: string[] = ['employee_name', 'department_name', 'basic_salary', 'total_attendance_days','total_departure_days','additional_hours','discount_hours','total_addition', 'total_discount','net_salary','actions'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor (private attendanceService : AttendanceService,private router:Router){}
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.loadReport();
  }
  loadReport() {
    this.attendanceService.getMonthlyReport().subscribe({
      next: (res:any)=>{
        this.report=res.report;
        this.dataSource.data =this.report;
      },
      error: (err)=>{
        console.log(err);
        alert('Error loading report');
      }
    })
    

  }
    
   
  printPage(row: monthlyReport) {
    // Create a print area dynamically
    const printContent = `
      <div>
        <h3>Employee Report</h3>
        <p><strong>Employee Name:</strong> ${row.employee_name}</p>
        <p><strong>Department:</strong> ${row.department_name}</p>
        <p><strong>Basic Salary:</strong> ${row.basic_salary}</p>
        <p><strong>Total Attendance Days:</strong> ${row.total_attendance_days}</p>
        <p><strong>Total Departure Days:</strong> ${row.total_departure_days}</p>
        <p><strong>Additional Hours:</strong> ${row.additional_hours}</p>
        <p><strong>Discount Hours:</strong> ${row.discount_hours}</p>
        <p><strong>Total Addition:</strong> ${row.total_addition}</p>
        <p><strong>Total Discount:</strong> ${row.total_discount}</p>
        <p><strong>Net Salary:</strong> ${row.net_salary}</p>
      </div>
    `;

    // Create a new window for printing
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Employee Report</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 20px;
              }
              h3 {
                color: #28688B;
              }
              p {
                font-size: 14px;
                margin: 5px 0;
              }
            </style>
          </head>
          <body onload="window.print();window.close()">
            ${printContent}
          </body>
        </html>
      `);
      printWindow.document.close(); // Close the document stream
    }
  }

 
}
  // delete(attendanceId:any) {
  //   if (confirm('Are you sure you want to delete this record')){
  //     this.attendanceService.delattendance(attendanceId).subscribe({
  //       next:(res:any)=> {
  //         this.load();
  //         alert(res.message);
  //         this.router.navigate(['/attendance-departure']);
          
  //       }  ,
  //       error:
  //       (err) => {
  //         alert('Error deleting attendance');
  //         console.error('error in delete process, try again',err);
          
  //       }
  //     })

  //   }

  // }









 

