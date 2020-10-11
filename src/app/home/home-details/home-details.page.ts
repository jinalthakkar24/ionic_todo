import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from 'src/app/todo-service.service';
import { Home } from '../home.model';


@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.page.html',
  styleUrls: ['./home-details.page.scss'],
})
export class HomeDetailsPage implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private todoService:TodoServiceService) { }

  loadedUser:any;
  data:any;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('uid')){
        return;
      }
      const uid=paramMap.get('uid');
      console.log(uid);
      this.todoService.getUserById(uid).subscribe((getdata)=>{
      var anydata=<any>getdata;
      console.log(getdata);
      this.loadedUser=anydata.data;
      this.data=this.loadedUser.first_name;
      console.log(this.loadedUser.first_name);
     });
     
    });
  }

}
