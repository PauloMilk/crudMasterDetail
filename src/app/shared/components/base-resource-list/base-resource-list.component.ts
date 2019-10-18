import { OnInit } from '@angular/core';
import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';


export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];

  constructor(private resourceService: BaseResourceService<T>) { }

  ngOnInit() {

    this.resourceService.getAll().subscribe(
      entries => this.resources = entries.sort((a, b) => b.id - a.id),
      error => alert('Erro ao carregar a lista')
    );
  }

  deleteEntry(entry) {
    const mustDelete = confirm('Deseja mesmo excluir este item?');
    if (mustDelete) {
      this.resourceService.delete(entry.id).subscribe(
        () => this.resources = this.resources.filter(element => element !== entry),
        error => alert('Erro ao tentar Excluir')
      );
    }
  }

}
