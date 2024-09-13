import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-add-user1',
  standalone: true,
  imports: [MatFormField,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    NgStyle
  ],
  templateUrl: './add-user1.component.html',
  styleUrl: './add-user1.component.css'
})
export class AddUser1Component {
  logoSrc:string='./assets/images/pioneerslogo(1).png';
}
