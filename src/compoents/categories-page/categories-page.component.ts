import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tabsData } from 'src/app/data/data';
import {
  CategoryListResponseInt,
  CoctailCategoriesInt,
  SingleTabInt,
} from 'src/app/models/models';
import { TabComponent } from 'src/app/tabs/tab/tab.component';
import { CoctailService } from 'src/services/coctail.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [NgFor, TabComponent, MatListModule],
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css'],
})
export class CategoriesPageComponent implements OnInit {
  data = tabsData;
  keyChar = 'c';
  categoriesList: CoctailCategoriesInt[] = [];

  constructor(private coctailService: CoctailService, private router: Router) {}

  ngOnInit(): void {
    this.coctailService
      .getCategoriesList(this.keyChar)
      .subscribe((resData: CategoryListResponseInt) => {
        this.categoriesList = resData.drinks;
      });
  }

  onTabChange(tab: SingleTabInt) {
    this.keyChar = tab.char;
    this.coctailService
      .getCategoriesList(this.keyChar)
      .subscribe((resData: CategoryListResponseInt) => {
        this.categoriesList = resData.drinks;
      });
  }

  onCategorySelect(categoryName: string) {
    const name = categoryName.replace(/\//g, '_or_').replace(/\s+/g, '_');
    this.router.navigate([`category/${this.keyChar}/${name}`]);
  }
}
