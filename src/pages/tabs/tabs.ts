import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { QrScanPage } from '../QrScanPage/QrScanPage';
import { ChartsPage } from '../charts/charts';
import { QrViewPage } from '../QrViewPage/QrViewPage';
import { signInHistoryPage } from '../signInHistory/signInHistory';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = QrScanPage;
  tab2Root = signInHistoryPage;
  tab3Root = HomePage;
  tab4Root = ChartsPage;
  tab5Root = QrViewPage;

  constructor() {

  }
}
