import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-editquestion',
  templateUrl: './editquestion.component.html',
  styleUrls: ['./editquestion.component.scss']
})
export class EditquestionComponent implements OnInit {

  editQuestionForm: FormGroup;
  phonePattern = "^[0-9_-]{10}$";
  minDate: any;
  maxDate: any;
  today: any;

  primaryRole = new FormControl();
  questionType: any;
  latexChecked: boolean;

  // Upload Question files
  mediaFile: FileList;
  mediaFileName: string;
  mediacvFile: string | Blob;
  mediaMessage: string;

  roleList: string[] = ['Admin', 'Instructor', 'Evaluator', 'Student'];


  constructor(private fb: FormBuilder,
    private router: Router,
    private appComponent: AppComponent,
    private location:Location) {
    // for date validation starts
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = yyyy + '-' + mm + '-' + dd;
    // for date validation ends
  }

  ngOnInit() {
    this.editQuestionFormBuilder();
  }

  editQuestionFormBuilder() {
    this.editQuestionForm = this.fb.group({
      session: [null, [Validators.required]],
      chapter: [null, [Validators.required]],
      questionTitle: [null, [Validators.required]],
      questionMarks: [null, [Validators.required]],
      complexity: [null, [Validators.required]],
      taxanomy: [null, [Validators.required]],
      questionType: "",
      question: "",
      latexExpression: "",
      uploadMedia: "",
      answerNote: [null, [Validators.required]],
    });
  }

  onChange(questionType: any) {
    this.questionType = questionType.value;
  }

  showOptions(value) {
    this.latexChecked = value.checked;
  }


  editQuestionFormSubmit() {
    console.log(this.editQuestionForm.value);
    console.log(this.primaryRole.value);
  }

  // for Media file starts
  getMediaFile(questionPaperUpload: HTMLInputElement, event: any) {
    this.mediaFile = questionPaperUpload.files;
    if (this.mediaFile.length === 0)
      return;
    const questionPaperName = event.target.files[0].name;
    let mimeType = this.mediaFile[0].type;
    if (mimeType.match(/video\/*/) == null) {
      this.mediaMessage = "Only Video files are supported.";
      this.mediaFileName = "No File Chosen";
      return;
    } else {
      this.mediaMessage = null;
      this.mediaFileName = questionPaperName;
      // var form_data = new FormData();
      this.mediacvFile = event.target.files[0];
      // this.saveAgreementFile();
      // form_data.append("file", event.target.files[0]);
      // this.thyroidcvFile = event.target.files[0];
    }
  }

  backToAppointmentList() {
    this.router.navigate(["/home/appointmenthome/listappointment"]);
  }

  reset() {

  }

  // For drag and drop starts here
  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  // For drap amd drop ends  here

  back(){
    this.location.back();
  }
}
