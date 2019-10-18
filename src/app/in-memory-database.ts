import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Lazer', description: 'Praia, cinema, etc' }
    ];

    const entries: Entry[] = [
      {
        id: 1,
        name: 'Gás de Cozinha',
        categoryId: categories[0].id,
        category: categories[0],
        paid: true,
        date: "14/10/2019",
        amount: "70,00",
        type: "expense",
        description: "Qualquer descriçãoas dasdsadas" } as Entry
    ];


    return { categories, entries };
  }
}
