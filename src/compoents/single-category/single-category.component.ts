import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  SingleTypeOfDrinkInt,
  SingleTypeOfDrinkResponseInt,
} from 'src/app/models/models';
import { CoctailService } from 'src/services/coctail.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-single-category',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent implements OnInit {
  typeOfDrinkList: SingleTypeOfDrinkInt[] = [];

  constructor(
    private coctailService: CoctailService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    this.coctailService
      .getTypeOfDrinkList(
        params['keyChar'],
        params['category'].replace(/_or_/g, '/')
      )
      .subscribe((resData: SingleTypeOfDrinkResponseInt) => {
        this.typeOfDrinkList = resData.drinks;
      });
  }

  checkDetails(id: string) {
    this.router.navigate([`coctail/${id}`]);
  }
}
