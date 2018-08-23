import { Component, OnInit } from '@angular/core';
import { GISTS } from './gists-mock';
import { Router } from '@angular/router';

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
  selectedGist: Gist;
  constructor(private gistsService: GistService, private router: Router) { }

  ngOnInit() {
    this.getGists()
  }

  onSearchChange(searchValue : string ) {  
    this.gistsService.getGistsByUser(searchValue).subscribe(gists => this.gists = gists);
  }

  getGists(): void {
    this.gistsService.getGists().subscribe(gists => this.gists = gists);
  }

  onSelect(gist: Gist): void {
    this.router.navigate(['/gist-details', gist.id]);
  }
  
}
