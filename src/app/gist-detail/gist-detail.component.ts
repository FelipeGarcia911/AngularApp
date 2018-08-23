import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Gist } from '../gist-list/gist';
import { GistService } from '../services/gists.service';

@Component({
  selector: 'app-gist-detail',
  templateUrl: './gist-detail.component.html',
  providers: [ GistService ],
  styleUrls: ['./gist-detail.component.css']
})
export class GistDetailComponent implements OnInit {
  private sub: any;
   gist: Gist;

  constructor(private gistsService: GistService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.getGist(params['id'])
   });
  }
  getGist(id: String): void {
    this.gistsService.getGist(id).subscribe(gist => this.gist = gist);
  }

}
