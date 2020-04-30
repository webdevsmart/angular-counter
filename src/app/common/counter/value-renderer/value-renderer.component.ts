import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-renderer',
  templateUrl: './value-renderer.component.html',
  styleUrls: ['./value-renderer.component.scss']
})
export class ValueRendererComponent implements OnInit {

  @Input() value: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
