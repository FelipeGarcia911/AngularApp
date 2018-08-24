import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Gist } from '../../models/gist';
import { File } from '../../models/file';

import { GistService } from '../../services/gists.service';

@Component({
  selector: 'app-gist-detail',
  templateUrl: './gist-detail.component.html',
  providers: [ GistService ],
  styleUrls: ['./gist-detail.component.css']
})
export class GistDetailComponent implements OnInit {
  private sub: any;
  gist: Gist;  

  description: String;
  fileContent: File;
  fileKey: string[]
  isDisabled = true;

  constructor(private gistsService: GistService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.getGist(params['id'])
   });
  }
  getGist(id: String): void {
    this.gistsService.getGist(id).subscribe(gist => this.updateGist(gist));
  }
  updateGist(gist: Gist){
    this.gist = gist
    this.description = gist.description
    this.fileKey = Object.keys(gist.files)
    this.fileContent = gist.files[this.fileKey[0]]
  }

  enableEdit(){
    this.isDisabled = false
  }

}
