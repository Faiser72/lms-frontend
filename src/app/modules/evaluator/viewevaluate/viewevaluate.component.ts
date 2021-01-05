import { Component, OnInit } from '@angular/core';
import { Validators, FormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-viewevaluate',
  templateUrl: './viewevaluate.component.html',
  styleUrls: ['./viewevaluate.component.scss']
})
export class ViewevaluateComponent implements OnInit {

  addCourseForm: FormGroup
  constructor(private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addCourseFormBuilder();

  }
  addCourseFormBuilder() {
    this.addCourseForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      category: [null, [Validators.required]],
      author: [null, [Validators.required,]],
      cost: [null, [Validators.required,]],
      description: [null, [Validators.required]],
      whatYouLearn: [null, [Validators.required]],
      whoShouldTakeCourse: [null, [Validators.required]],
    });
  }


  addCourseFormSubmit() {
    console.log(this.addCourseForm.value);
  }


}
