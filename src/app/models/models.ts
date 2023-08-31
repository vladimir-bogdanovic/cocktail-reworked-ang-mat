export enum CategoryType {
  ListByCategories = 'List by categories',
  ListByGlasses = 'List by glasses',
  ListByAlcoholicNonalcoholic = 'List by alcoholic/non-alcoholic',
}

export interface SingleTabInt {
  name: CategoryType;
  selected: boolean;
  char: string;
}

export interface TabsDataInt {
  tabs: SingleTabInt[];
}

export interface CoctailCategoriesInt {
  strCategory?: string;
  strGlass?: string;
  strAlcoholic?: string;
}

export interface CategoryListResponseInt {
  drinks: CoctailCategoriesInt[];
}

export interface SingleTypeOfDrinkInt {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface SingleTypeOfDrinkResponseInt {
  drinks: SingleTypeOfDrinkInt[];
}

export interface CoctailDetail {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate?: string;
  strTags?: string;
  strVideo?: string;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES?: string;
  strInstructionsDE?: string;
  strInstructionsFR?: string;
  strInstructionsIT?: string;
  'strInstructionsZH-HANS': string;
  'strInstructionsZH-HANT': string;
  strDrinkThumb: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: null;
  strImageSource: string;
  strImageAttribution: string;
  strCreativeCommonsConfirmed: string;
  dateModified: Date;
}

export interface CoctailDetailResponse {
  drinks: CoctailDetail[];
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  content: string;
}
