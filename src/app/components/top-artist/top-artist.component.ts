import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IArtist } from '../../interfaces/IArtist';
import { IImages } from '../../interfaces/ICommon';

@Component({
  selector: 'app-top-artist',
  imports: [],
  templateUrl: './top-artist.component.html',
  styleUrl: './top-artist.component.scss',
})
export class TopArtistComponent {
  topArtist: IArtist;

  constructor(private userService: UserService) {
    this.getTopArtist();
  }

  async getTopArtist() {
    const artist = await this.userService.getCurrentUserTopArtists(1);
    this.topArtist = artist.items.pop();
  }

  getArtistImage(images: IImages[]) {
    return images?.[0].url;
  }
}
