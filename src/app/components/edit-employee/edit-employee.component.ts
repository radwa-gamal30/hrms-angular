import { department } from './../../Services/emloyee/employee.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../Services/emloyee/employee.service';
import { LoaderComponent } from '../loader/loader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [ReactiveFormsModule
    ,RouterModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    LoaderComponent,
    FontAwesomeModule,
    MatInputModule
  ],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {
  faLongArrowRight=faLongArrowRight;
  employeeId!:number;
  employeeForm!:FormGroup;
  departments:any=[];
  errors:any={};
  constructor(private route:ActivatedRoute,
    private fb: FormBuilder,
    private employeeService : EmployeeService,
    private router:Router,
    private snackBar: MatSnackBar){


     this.employeeForm = this.fb.group({
        name: [''],
        ssn: [''],
        phone: ['' ],
        hire_date: [''],
        salary: ['',],
        department_id: [''],
        check_in:[''],
        check_out:[''],
        gender: [''],
        address: [''],
        doa: [''],
      });
  

  }
  loadDepartments(){
    this.employeeService.getdepartments()
    .subscribe({
      next: (dep:any)=>{
        if(dep && dep.department){ 
           console.log(dep);
        this.departments =dep.department;}
        else{
          console.log('no departments found');
          
        }
      
      },
      error: (er:any)=>{
        this.errors=er.error.errors;
        console.log(er.error.errors,'errors');
      },
    })
  }
  loadEmployee(){
    this.employeeService.getEmployee(this.employeeId).subscribe({
    next: ( res)=>{
      console.log(res);
      
        this.employeeForm.patchValue({
          name:res.employee.name,
          ssn:res.employee.ssn,
          phone:res.employee.phone,
          hire_date:res.employee.hire_date,
          salary:res.employee.salary,
          department_id:res.employee.department_id,
          check_in:res.employee.check_in.slice(0,5),
          check_out:res.employee.check_out.slice(0,5),
          gender:res.employee.gender,
          address:res.employee.address,
          doa:res.employee.doa,
        });

      },
    error:  (err)=>{
      console.log(err);
    
      alert('Error loading attendnace details');
      this.errors=err.error.errors;
     
      }
    });
  }
  submitForm(){

  if(this.employeeForm.valid){
    this.employeeService.updateEmployee(this.employeeId,this.employeeForm.value).subscribe({
      next: (res) => {
        console.log('Employee updated successfully:', res);
        this.snackBar.open('employee has been edited successfully ✔','close',{duration: 3000});
        this.router.navigate(['/employees']);
       

        // alert('Employee updated successfully.');
        this.router.navigate(['/employees']);
      },
      error: (err:any) => {
        this.errors=err.error.errors;
        console.error('Error updating employee:', err);
        this.snackBar.open('error occured , try again !','close',{duration: 3000});
        
       }
    });
  }
  }
ngOnInit(){
  this.employeeId= this.route.snapshot.params['id'];
  this.loadDepartments();
  this.loadEmployee();
}
}
