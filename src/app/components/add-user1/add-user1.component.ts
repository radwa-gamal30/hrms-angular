import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgStyle } from '@angular/common';
import { group } from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-user1',
  standalone: true,
  imports: [MatFormField,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './add-user1.component.html',
  styleUrl: './add-user1.component.css'
})
export class AddUser1Component {
  // declare inputs
fullname!:string
privileges!:string
username!:string
email!:string
password!:string
groupid!:number

  formsubmit() {
    var inputs ={
      fullname : this.fullname,
      privileges : this.privileges,
      username : this.username,
      email : this.email,
      password : this.password,
      group_id: this.groupid
    }
throw new Error('Method not implemented.');
}





submituser1() {
 
throw new Error('Method not implemented.');
}
  logoSrc:string='./assets/images/pioneerslogo(1).png';
}
