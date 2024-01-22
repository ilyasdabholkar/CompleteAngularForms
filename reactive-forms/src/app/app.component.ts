import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  forbiddenNames = ['Chris', 'Anna'];
  signupForm : FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username':new FormControl(null,[Validators.required],[this.forbiddenNamesValidator.bind(this)]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gender':new FormControl('male'),
      'hobbies' : new FormArray([])
    });
    this.signupForm.patchValue({
      'username' : 'Anna'
    })
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  //Custom Validator to prevent user from using forbidden usernames
  forbiddenNamesValidator(control:FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve,reject)=>{
      if( this.forbiddenNames.indexOf(control.value) !== -1 ){
        resolve({'nameIsForbidden':true})
      }else{
        resolve(null)
      }
    })
    return promise
  }
}
