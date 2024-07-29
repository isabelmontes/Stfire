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


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Peliculas',
        icon: 'uil uil-film',
        router: ['/', 'movies']
      },
      {
        name: 'Series',
        icon: 'uil uil-tv-retro',
        router: ['/', 'movies']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },

    
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Favoritas',
        icon: 'uil uil-heart',
        router: ['/', 'favorites']
      },
      // {
      //   name: 'Favoritas',
      //   icon: 'uil-heart-medical'
      // }
    ]

    // this.customOptions = [
    //    {
    //      name: 'Mi lista º1',
    //      router: ['/']
    //    },
    //    {
    //      name: 'Mi lista º2',
    //      router: ['/']
    //    },
     
    // ]

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
