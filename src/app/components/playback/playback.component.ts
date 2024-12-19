import { Component } from '@angular/core';
import { PlaybackService } from '../../services/playback.service';

@Component({
  selector: 'app-playback',
  imports: [],
  templateUrl: './playback.component.html',
  styleUrl: './playback.component.scss',
})
export class PlaybackComponent {
  deviceId = '';

  constructor(private playbackService: PlaybackService) {
    this.initPlayback();
  }

  initPlayback() {
    this.playbackService.initPlayback();
    this.deviceId = this.playbackService.getDeviceId();
  }
}
