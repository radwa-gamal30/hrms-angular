import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-user2',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CommonModule

  ],
  templateUrl: './add-user2.component.html',
  styleUrl: './add-user2.component.css'
})
export class AddUser2Component {
  logoSrc:string='./assets/images/pioneerslogo(1).png';
gender: any;
formSubmit(){

};

}
