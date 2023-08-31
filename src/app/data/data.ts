import { CategoryType, SingleTabInt } from '../models/models';

export const tabsData: SingleTabInt[] = [
  { name: CategoryType.ListByCategories, selected: true, char: 'c' },
  { name: CategoryType.ListByGlasses, selected: false, char: 'g' },
  {
    name: CategoryType.ListByAlcoholicNonalcoholic,
    selected: false,
    char: 'a',
  },
];
