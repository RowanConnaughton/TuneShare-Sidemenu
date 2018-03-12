import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {

  rForm: FormGroup;
  post: any;    //a property for submitted form

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
  }

  ngOnInit() {
    
        this.rForm = new FormGroup({
          
          firstName: new FormControl('', {
                  validators: Validators.required,
                  updateOn: 'blur',
                  
                }),
          
                lastName: new FormControl('', {
                  validators: Validators.required,
                  updateOn: 'blur'
                }),
          
                email: new FormControl('', {
                 validators: [ Validators.email, Validators.required],
                  updateOn: 'blur'
                }),
          
                message: new FormControl('', {
                  validators: Validators.required,
                  updateOn: 'change'
                })
          
          
              })

             
              
              
      }
      
    

      alertNameF() {
        let alert = this.alertCtrl.create({
          title: 'First Name',
          subTitle: 'First name is required',
          buttons: ['Dismiss']
        });
       alert.present();
      }
      alertNameL() {
        let alert = this.alertCtrl.create({
          title: 'Last Name',
          subTitle: 'Last name is required',
          buttons: ['Dismiss']
        });
       alert.present();
      }
      alertEmail() {
        let alert = this.alertCtrl.create({
          title: 'Email',
          subTitle: 'Email is required',
          buttons: ['Dismiss']
        });
       alert.present();
      }

      alertMesg() {
        let alert = this.alertCtrl.create({
          title: 'Message',
          subTitle: 'Message is required',
          buttons: ['Dismiss']
        });
       alert.present();
      }
    
      alertSubmit() {
        let alert = this.alertCtrl.create({
          title: 'Send',
          subTitle: 'Please email us',
          buttons: ['Dismiss']
        });
       alert.present();
      }

      onSubmit() {
        if (this.rForm.valid) {
          console.log("Form Submitted!");
          this.rForm.reset();
        }
      }
    
      addPost(post: any) {
        this.rForm.controls.firstName =post.firstName;
        this.rForm.controls.lastName = post.lastName;
        this.rForm.controls.email = post.email;
        this.rForm.controls.message = post.message;
      }
  
}
