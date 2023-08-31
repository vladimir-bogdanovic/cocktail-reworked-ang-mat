import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CoctailDetail,
  CoctailDetailResponse,
  Tile,
} from 'src/app/models/models';
import { CoctailService } from 'src/services/coctail.service';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-coctail-details',
  standalone: true,
  imports: [NgFor, NgIf, MatGridListModule],
  templateUrl: './coctail-details.component.html',
  styleUrls: ['./coctail-details.component.css'],
})
export class CoctailDetailsComponent implements OnInit {
  coctailDetail: CoctailDetail = {} as CoctailDetail;
  coctailIngredient: (string | null)[] = [];
  coctalAmount: (string | null)[] = [];
  test!: string;

  constructor(
    private coctailService: CoctailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.coctailService
      .getCoctailDetails(id)
      .subscribe((resData: CoctailDetailResponse) => {
        //  console.log(resData);
        this.coctailDetail = resData.drinks[0];
        this.test = resData.drinks[0].strAlcoholic;
        console.log(this.test);
        Object.entries(this.coctailDetail).map((data: string[]) => {
          if (data[0].includes('strIngredient')) {
            this.coctailIngredient.push(data[1]);
          }
          if (data[0].includes('strMeasure')) {
            this.coctalAmount.push(data[1]);
          }
          // console.log(this.coctailIngredient);
          // console.log(this.coctalAmount);
        });
      });
    this.tiles;
    console.log(this.tiles);
  }

  tiles: Tile[] = [
    {
      content: this.coctailDetail.strDrinkThumb,
      cols: 2,
      rows: 4,
      color: 'lightblue',
    },
    {
      content: this.coctailDetail.idDrink,
      cols: 1,
      rows: 2,
      color: 'lightgreen',
    },
    {
      content: this.coctailDetail.strDrink,
      cols: 1,
      rows: 1,
      color: 'lightpink',
    },
    {
      content: this.test,
      cols: 2,
      rows: 1,
      color: '#DDBDF1',
    },
  ];
}
