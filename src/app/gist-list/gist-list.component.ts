import { Component, OnInit } from '@angular/core';
import { GISTS } from './gists-mock';

import { Gist } from './gist';
import { GistService } from '../services/gists.service';

@Component({
  selector: 'app-gist-list',
  templateUrl: './gist-list.component.html',
  providers: [ GistService ],
  styleUrls: ['./gist-list.component.css']
})

export class GistListComponent implements OnInit {
  //gists = GISTS
  gists: Gist[]

  constructor(private gistsService: GistService) { }

  ngOnInit() {
    this.getGists()
  }

  getGists(): void {
    this.gistsService.getGists()
      .subscribe(gists => this.gists = gists);
  }
}
