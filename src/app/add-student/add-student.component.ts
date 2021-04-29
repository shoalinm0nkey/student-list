import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(
    /*private router: Router
    ,*/ private location: Location
    , private studentSvc: StudentDataService
    ) { }

  ngOnInit(): void {
  }

  studentName = "";

  addStudent() {
    //this.router.navigateByUrl("/");

    this.studentSvc.addStudent({
      name: this.studentName 
      , degreeProgram: "Unknown"
    });

    this.location.back();
  }

}
