import { Component } from '@angular/core';
import { QualificationComponent } from '../qualification/qualification.component';
import { CommonModule } from '@angular/common';
import { Qualification1Component } from '../qualification1/qualification1.component';

@Component({
  selector: 'app-experince',
  imports: [QualificationComponent,CommonModule,Qualification1Component],
  templateUrl: './experince.component.html',
  styleUrl: './experince.component.css'
})
export class ExperinceComponent {
  Qualifications:boolean=false;
  Experince:boolean=false;

  showQualification(){

    this.Qualifications=true;
    this.Experince=false;
  }
  showExperince(){

    this.Qualifications=false;
    this.Experince=true;
  }
}
