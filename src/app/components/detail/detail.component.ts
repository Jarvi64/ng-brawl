import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerDto } from '../../models/player';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  tag?:string;
  http = inject(HttpClient);
  player?:PlayerDto;
  victory?:number;
  isloading:boolean = true;
  ngOnInit() {
    this.tag = this.activateRoute.snapshot.params['tag'];
    this.http.get<any>('https://brawl-gang-backend.onrender.com/player/'+ this.tag?.substring(1)).subscribe(
      {
        next:(res)=>{
          this.isloading = false;this.player = res;
           this.victory = res['3vs3Victories'];
        },
        error:(err)=>{console.log(err);
        }
      }
    )
  }
  activateRoute = inject(ActivatedRoute);
}
