import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service'
import { Home } from './home.model';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
dataReturnFromService:any="";
//userdata:any=[];
userdata:Home[];
homes:Home[];
  constructor(public todoService:TodoServiceService,private alertController:AlertController) {}
  saveData(){
      var dataToSend = {name:"Fenil",job:"Programming"};
      this.todoService.saveData(dataToSend).subscribe((dataReturnFromService)=>{
          this.dataReturnFromService= JSON.stringify(dataReturnFromService);
      })
  }
  getUser(){
    this.todoService.getUser().subscribe((getdata)=>{
      var anydata=<any>getdata;
      this.userdata=anydata.data;
      console.log(this.userdata);
    })
  }
   async onDeleteClick(id:any){
    const alert = await this.alertController.create({
      header:"Confirm?",
      message:"Are you sure want to delete?",
      buttons:[{
        text:'Cancel',
        role:'Cancel'
      },
      {
        text:'Delete',
        handler:() => {
          this.userdata=this.userdata.filter(home => {
            return home.id !== id;
          });
          //this.todoService.deleteRecipe(id);
        },
      },
      ],
    });
    await alert.present();
  //  this.userdata=this.userdata.filter(home => {
  //   return home.id !== id;
  //   });
  //   this.todoService.deleteRecipe(id);
  //   this.getUser();
  }
}
