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
  // coctalAmount: (string | null)[] = [];
  tiles: Tile[] = [];
  instructions: (string | null)[] = [];

  constructor(
    private coctailService: CoctailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.coctailService
      .getCoctailDetails(id)
      .subscribe((resData: CoctailDetailResponse) => {
        this.coctailDetail = resData.drinks[0];
        Object.entries(this.coctailDetail).map((data: string[]) => {
          if (data[0].includes('strIngredient') && data[1] !== null) {
            this.coctailIngredient.push(data[1]);
          }
          // if (data[0].includes('strMeasure') && data[1] !== null) {
          //   this.coctalAmount.push(data[1]);
          // }
          if (data[0] === 'strInstructions' && data[1] !== null) {
            this.instructions.push(data[1]);
            console.log(this.instructions);
          }
        });
        this.tiles = [
          {
            content: resData.drinks[0].strDrink,
            cols: 5,
            rows: 1,
            color: 'lightgreen',
          },
          {
            content: resData.drinks[0].strDrinkThumb,
            cols: 2,
            rows: 5,
            color: 'lightblue',
          },
          {
            content: `Category : ${resData.drinks[0].strCategory}`,
            cols: 3,
            rows: 1,
            color: 'lightpink',
          },
          {
            content: `Alcoholic: ${resData.drinks[0].strAlcoholic} `,
            cols: 3,
            rows: 1,
            color: '#DDBDF1',
          },
          {
            content: `Type of glass : ${resData.drinks[0].strGlass}`,
            cols: 3,
            rows: 1,
            color: '#DDBDF1',
          },
          {
            content: `Ingredients : ${this.coctailIngredient}`,
            cols: 3,
            rows: 1,
            color: '#DDBDF1',
          },
          {
            content: `Instructions: ${this.instructions}`,
            cols: 3,
            rows: 1,
            color: '#DDBDF1',
          },
        ];
      });

    console.log(this.tiles);
  }
}
