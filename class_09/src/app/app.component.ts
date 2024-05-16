import { Component, OnInit } from '@angular/core';
import { MessagesService } from './services/messages.service';
// import { NgForm } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessagesService],

  
})
export class AppComponent{
  

  userForm!: FormGroup;

  constructor (private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email:[
        '',
        [
          Validators.required,
          Validators.pattern( /^\S+@\S+\.\S+$/ )
        ]

      ],

      address:this.formBuilder.group({
        street:['',Validators.required],
        city:['',Validators.required]
      }),

      // phoneNumbers: this.formBuilder.group({
      //   phone:['',
      //     [
      //       Validators.required, 
      //       Validators.pattern(/^\d{10}$/)
            
      //     ]
      //   ]
      // })




      phoneNumbers:this.formBuilder.array([
        this.formBuilder.control('', [
          Validators.required,
          Validators.pattern(/^\d{10}$/),
        ])
      ])

    })
  }
    

  get phoneNumbers(){
    return this.userForm.get('phoneNumbers') as FormArray
  }

  addPhNumber(){
    this.phoneNumbers.push(
      this.formBuilder.control('',
      [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ])
    )
  }

  removePhNumber(index: number){
    this.phoneNumbers.removeAt(index)
  }


  submitFrom(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
    }
  }

  }



