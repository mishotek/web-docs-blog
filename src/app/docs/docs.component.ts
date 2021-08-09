import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocsService} from "./services/docs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, of, Subscription} from "rxjs";
import {catchError, shareReplay, switchMap} from "rxjs/operators";
import {Doc} from "../core/types/doc";

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];

  public doc: Doc | undefined | null;

  constructor(private docsService: DocsService,
              private router: Router,
              private route: ActivatedRoute) {
    const s = this.route.url.pipe(
      switchMap(() => this.docsService.getDoc(this.router.url)),
      catchError(() => of(null)),
      shareReplay(1),
    ).subscribe(doc => this.doc = doc)

    this.subscriptions.push(s);
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
