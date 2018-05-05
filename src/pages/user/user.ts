import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

	userForm: FormGroup;
  	home = HomePage;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,  
  	public formBuilder: FormBuilder, 
  	private userProvider:UserProvider,
  	private authProvider:AuthProvider
  	) {

  	this.userForm = formBuilder.group({
  		name: ['', Validators.required],
  		email: ['', Validators.required],
  		password: ['', Validators.required],
  	})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }


  salvarUsuario(){
    alert(this.userForm);
    if (!this.userForm.valid) {
      alert('preencha todos os campos');
    }
    else {
       this.authProvider.signupUser(
       		this.userForm.value.email,
       		this.userForm.value.password
       	).then(
       	res => {
       		console.log(res)
       }
       ).catch(
       	err => {
       		console.log(err)
       	}
       )
       	
            
    }
  }

  

}
