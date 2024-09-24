import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './general-settings.component.html',
  styleUrl: './general-settings.component.css'
})
export class GeneralSettingsComponent {
  logoSrc:string='./assets/images/pioneerslogo(1).png';
}
