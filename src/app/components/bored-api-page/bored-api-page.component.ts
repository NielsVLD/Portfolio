import { Component, OnInit } from '@angular/core';
import { BoredService } from '../../services/boredService';
import { IBoredApi } from '../../entities/boredApi.entity';

@Component({
  selector: 'app-bored-api-page',
  templateUrl: './bored-api-page.component.html',
  styleUrl: './bored-api-page.component.css',
})
export class BoredApiPageComponent implements OnInit {
  activity!: IBoredApi;
  loaded: boolean = false;

  constructor(private boredService: BoredService) {}

  ngOnInit() {
    this.getActivity();
  }

  getActivity() {
    this.boredService.getActivity().subscribe((activity) => {
      this.activity = activity;
      this.loaded = true;
    });
  }
}
