import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild("f") signupForm : NgForm;
  answer : string;
  defaultQuestion : string = "pet";
  genders = ['male','female','other']
  user = {
    username : '',
    email : '',
    secret : '',
    answer : '',
    gender : ''
  }
  isFormSubmitted : boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    //prefill specific form values
    this.signupForm.form.patchValue({
      username:suggestedName
    });
  }

  onSubmit(){
    console.log(this.signupForm);
    
    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.answer;
    this.user.gender = this.signupForm.value.gender;
    this.isFormSubmitted = true;
    this.signupForm.reset();
  }
}
