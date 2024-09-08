import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddHolidayComponent } from './components/add-holiday/add-holiday.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , GeneralSettingsComponent,AddHolidayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-End';
}
