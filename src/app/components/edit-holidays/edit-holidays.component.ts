import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-holidays',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './edit-holidays.component.html',
  styleUrl: './edit-holidays.component.css'
})
export class EditHolidaysComponent {

  logoSrc:string='./assets/images/pioneerslogo(1).png';
}
