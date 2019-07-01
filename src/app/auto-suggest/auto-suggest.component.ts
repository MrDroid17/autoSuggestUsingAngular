import { Component, OnInit, Input } from '@angular/core';
import { State } from '../interface/state';

@Component({
  selector: 'app-auto-suggest',
  templateUrl: './auto-suggest.component.html',
  styleUrls: ['./auto-suggest.component.scss']
})
export class AutoSuggestComponent implements OnInit {
  @Input() sourceArray: State;

  constructor() { }

  ngOnInit() {
  }

}
