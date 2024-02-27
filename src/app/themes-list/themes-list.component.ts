import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/themes';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  themeList: Theme[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getThemes().subscribe((themes)=>{
      this.themeList = themes;
      console.log(this.themeList)
    })
  }
}
