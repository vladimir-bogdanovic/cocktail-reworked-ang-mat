import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SingleTabInt } from 'src/app/models/models';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [NgFor, MatTabsModule],
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit {
  @Input() Data!: SingleTabInt[];
  @Output() OnTabSelect = new EventEmitter<SingleTabInt>();

  ngOnInit(): void {
    this.Data[0].selected = true;
  }

  handleTabChange(selectedTab: SingleTabInt) {
    this.OnTabSelect.emit(selectedTab);
    this.Data.map((tab: SingleTabInt) => {
      if (tab.name === selectedTab.name) {
        return (tab.selected = true);
      } else {
        return (tab.selected = false);
      }
    });
  }
}
