import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private toastCtrl: ToastController) {
    
  }

  ngOnInit() {
  }

  async showToast(){
    let toast = await this.toastCtrl.create({
      message: "Tiene que activar la camara",
      duration: 5000,
      color: "dark",
      position: "bottom"
    });
    toast.present();

  }

}
