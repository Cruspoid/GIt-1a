import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private toastCtrl: ToastController) { 

  }

  ngOnInit() {
  }
  async showToast(){
    let toast = await this.toastCtrl.create({
      message: "Cuenta creada con exito",
      duration: 5000,
      color: "dark",
      position: "bottom"
    });
    toast.present();

  }


}
