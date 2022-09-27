import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  @Input() caption: string = '';
  @Output() icon: string = '';

  constructor() {}

  ngOnInit(): void {}
}
