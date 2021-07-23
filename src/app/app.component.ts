import { Component } from '@angular/core';

declare let FS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  onClickIdentifyA() {
    FS.identify('testA', {
      displayName: 'testA',
    });
  }

  onClickIdentifyB() {
    FS.identify('testB', {
      displayName: 'testB',
    });
  }

  onClickRestart() {
    FS.restart();
  }

  onClickShutdown() {
    FS.shutdown();
  }
}
