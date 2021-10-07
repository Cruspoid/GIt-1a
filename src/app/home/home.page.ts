import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingCTrl: LoadingController) {

  }
  showLoading(){
    this.loadingCTrl.create({
      message: "Cargando...",
      spinner: "dots"
    }).then((loading) => {
      loading.present();

      setTimeout(() =>{

      loading.dismiss();
      },2000)
    })
  }
}
