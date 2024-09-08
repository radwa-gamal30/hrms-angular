import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-salary-report',
  standalone: true,
  imports: [SidebarComponent,MatTooltipModule],
  templateUrl: './salary-report.component.html',
  styleUrl: './salary-report.component.css'
})
export class SalaryReportComponent {
  fullText: string = 'employees report';
  displayedText: string = '';
  typingSpeed: number = 100; // Speed of typing in milliseconds

  ngOnInit(): void {
    this.typeWriter();
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
}
