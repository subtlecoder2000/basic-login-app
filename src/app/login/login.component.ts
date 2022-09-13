import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form1: any;
  //notValid: boolean;
  // router: any;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.form1 = this.fb.group({
      userName: '',
      password: '',
      login:''
    })

  }
  isValid: boolean = false;
  notValid: boolean = false;
  onSubmit(): void{
    console.log("hi");
    console.log(this.form1.value.userName);
    console.log(this.form1.value.password);

    if ((this.form1.value.userName == "Aazam") && (this.form1.value.password == "123")){
      this.isValid = false;
      this.notValid = false;
      this.router.navigate(['log'])
      console.log("loggein");
    }
    
    else{
      this.isValid = true;
      this.notValid = false;
      console.log("Wrong userid or password");
    }

    if ((this.form1.value.userName.length == 0) || (this.form1.value.password.length == 0)){
      this.notValid = true;
      this.isValid = false;
      console.log("details not filled");
    }

  }

}
