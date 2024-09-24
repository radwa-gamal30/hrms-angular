import { Component , ViewChild,AfterViewInit} from '@angular/core';
import { AttendanceResponse, AttendanceService } from '../../Services/attendnace/attendance.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatTableDataSource, MatTableModule}from '@angular/material/table'
import { MatPaginatorModule,MatPaginator } from '@angular/material/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { LoaderComponent } from "../loader/loader.component";
import { MatIconModule } from '@angular/material/icon';
import {faEdit, faDeleteLeft, faEye  }  from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-attenedance-departure',
  standalone: true,
  imports: [RouterModule, MatPaginatorModule, MatTableModule, CommonModule, MatCardModule, FontAwesomeModule, LoaderComponent,MatIconModule],
  templateUrl: './attenedance-departure.component.html',
  styleUrl: './attenedance-departure.component.css'
})
export class AttenedanceDepartureComponent {
  deleteicon=faDeleteLeft;
  edit=faEdit;
  show=faEye;

  attendance!:AttendanceResponse[];
  dataSource = new MatTableDataSource<AttendanceResponse>([]);
  onboard:any='./assets/images/onboard(1).png';
  searchedAttendance:any[]=[]
  isLoading: boolean=false;
  displayedColumns: string[] = ['id','employee_name', 'department_name', 'check_in', 'check_out','date','actions'];
  // displayedColumns: string[] = ['id','employee_name', 'department_name', 'check_in', 'check_out','bonus_value','deduction_value','date','hours', 'status','actions'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor (private attendanceService : AttendanceService,private router:Router){}
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getAttendnaceList(){
    this.isLoading=true;
    this.attendanceService.getList().subscribe((res)=>{
        // console.log(res);
        this.attendance = res.attendance;
        this.dataSource.data = this.attendance;
        this.isLoading=false;
      });
  }

  

  fullText: string = 'Attendance and departure';
  displayedText: string = '';
  typingSpeed: number = 100; // Speed of typing in milliseconds

  ngOnInit(): void {
    this.typeWriter();
    this.getAttendnaceList();

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
  printPage()
  {
    window.print();
  }
  delete(attendanceId:any) {
    if (confirm('Are you sure you want to delete this record')){
      this.attendanceService.delattendance(attendanceId).subscribe({
        next:(res:any)=> {
          this.getAttendnaceList();
          alert(res.message);
          this.router.navigate(['/attendance-departure']);
          
        }  ,
        error:
        (err) => {
          alert('Error deleting attendance');
          console.error('error in delete process, try again',err);
          
        }
      })

    }

  }
  showResult(empName:any,from:any,to:any)
  {
    this.attendanceService.searchAttendanceByname(empName,from,to).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.searchedAttendance=res
      },
      error:(res)=>{
        console.log(res);
      }
    })
  }
  exportToExcel(): void {
    // Create a worksheet from the data
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.attendance);

    // Create a new workbook
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Export the workbook
    XLSX.writeFile(workbook, 'data.xlsx');
  }
  generatePDF(): void {
    const dataTable = document.getElementById('data-table');

    html2canvas(dataTable!).then(canvas => {
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 190; // Adjust as needed
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 10;

      // Add the image to the PDF
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // If the image height is greater than the page height, add a new page
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('table.pdf');
    });
  }


}



