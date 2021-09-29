import {Component, NgZone} from '@angular/core';

declare let FS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private _ngZone: NgZone) {}

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
    this._ngZone.runOutsideAngular(() => { FS.restart() });
  }

  onClickShutdown() {
    this._ngZone.runOutsideAngular(() => { FS.shutdown() });
  }
}
