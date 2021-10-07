import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private toastCtrl: ToastController) {

   }

  ngOnInit() {
  }
  async showToast(){
    let toast = await this.toastCtrl.create({
      message: "Se le envio un codigo de verifiacion",
      duration: 5000,
      color: "dark",
      position: "bottom"
    });
    toast.present();

  }

}

