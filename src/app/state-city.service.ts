import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateCityService {

  constructor() { }

  getData(){
    return [
          { "id" :"1" ,"StateName":"Maharastra", "cities":["Pune", "Mumbai", "Nasik"]},
              { "id":"2", "StateName":"Madhya Pradesh","cities":[ "Indore","Bhopal","Satna" ]}
         ]

      }
}



