import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '@modules/movies/services/movie.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  mainMenu: {
    defaultOptions:Array<any>, 
    accessLink: Array<any>
  } = {
    defaultOptions:[], accessLink:[] }

  customOptions: Array<any>= []


  constructor(private router:Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      // {
      //   name: 'Home',
      //   icon: 'uil uil-estate',
      //   router: ['/', 'auth']
      // },
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Movies',
        icon: 'uil uil-chart',
        router: ['/', 'movies']
      },
      {
        name: 'Favorites',
        icon: 'uil-heart-medical',
        router: ['/', 'favorites']
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Favoritas',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
       {
         name: 'Mi lista º1',
         router: ['/']
       },
       {
         name: 'Mi lista º2',
         router: ['/']
       },
     
    ]

    this.movieService.dataSeriesRandom$
    .subscribe((response: any) =>{
       this.customOptions.push(
        {
          name: response[0].name,
          router:[]
        }
       )
    })


  }

  goTo($event:any): void{
    this.router.navigate(['/', 'favorites'], {
      queryParams:{
        key1:'value1', 
        key2:'value2', 
        key3:'value3'
      }
    })
    console.log($event)
  }

}
