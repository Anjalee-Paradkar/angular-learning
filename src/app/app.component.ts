import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';
import { StateCityService } from './state-city.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form';
//   registrationForm : any= FormGroup;
//   constructor(private fb : FormBuilder){}

//   ngOnInit(): void {
//     this.registrationForm = this.fb.group({
//     userName :['',[Validators.required,Validators.minLength(3)]],
//     password : ['',Validators.required],
//     state :[''],
//     city :[''],
//     postalcode:['',[Validators.minLength(6),Validators.maxLength(6)]],
//     email :[''],
//     subscribe:[false],
//   }{validator: PasswordValidator});

// },


  // states=['MadhyaPradesh', 'Maharastra', 'Gujrat', 'Bengal'];
  // cities=['Indore', 'Bhopal', 'Pune', 'Rajkot'];


  onSubmit(){
    console.log(this.registrationForm.value)
  }

  // for short name -
  get userN(){
    return this.registrationForm.get('userName')
  }

  public data : any=[];

  constructor(private fb : FormBuilder , private _data : StateCityService){}

  public cities =[];
  
  changeCountry(count:any) {
    //console.log(count.value);
    this.cities = this.data.find((con:any )=> con.StateName == count.value).cities;
    //console.log(this.cities);
  }

  ngOnInit(): void {
    this.data= this._data.getData();
  }

  registrationForm = this.fb.group({
    userName :['',[Validators.required,Validators.minLength(3)]],
    password : ['',Validators.required],
    confirmPassword :[''],
    state :[''],
    city :[''],
    postalcode:['',[Validators.minLength(6),Validators.maxLength(6)]],

    // address: this.fb.group({
    //   city : [''],
    //   state:[''],
    //   postalcode:['',[Validators.minLength(6),Validators.maxLength(6)]],
    // })
  }, {validator: PasswordValidator})

  // registrationForm = new FormGroup({
  //   userName: new FormControl('Anjalee'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address : new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalcode: new FormControl(''),
  //   }),
  // });

  // loadAPI(){
  //   this.registrationForm.setValue({
  //     userName:'Ram',
  //     password: '12asd',
  //     confirmPassword:'12asd',
  //     address:{
  //       city:'Indore',
  //       state:'Madhya Pradesh',
  //       postalcode:'1234',
  //     }
  //   });
  // }
    loadAPI(){
    this.registrationForm.patchValue({
      userName:'Ram',
      password: '12asd',
      confirmPassword:'12asd',
    });
  }

}
