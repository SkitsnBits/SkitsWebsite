import { Component } from '@angular/core';
import PlatformLinks from '../../../../../public/data/platform_links.json'
import { CollageComponent } from '../../../shared/component/collage/collage.component';

const importedEntries: any[] = PlatformLinks as PlatformLink[]

@Component({
  selector: 'app-header',
  imports: [CollageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  platformLinks: any[] = importedEntries

  public collageLinks: string[] = [
    "image/collage/cropped_200kb_75p/close_up.webp",
    "image/collage/cropped_200kb_75p/dnd.webp",
    "image/collage/cropped_200kb_75p/group_photo_2025-08-14.webp",
    "image/collage/cropped_200kb_75p/group_photo_2025-08-16.webp",
    "image/collage/cropped_200kb_75p/group_photo_2025-09-11.webp",
    "image/collage/cropped_200kb_75p/group_photo_2025-09-13.webp",
    "image/collage/cropped_200kb_75p/group_photo_2025-11-06.webp",
    "image/collage/cropped_200kb_75p/group_photo_2025-11-08.webp",
    "image/collage/cropped_200kb_75p/group_photo_2025-11-20.webp",
    "image/collage/cropped_200kb_75p/group_photo_2025-11-22.webp",
    "image/collage/cropped_200kb_75p/group_photo_2025-12-04.webp",
    "image/collage/cropped_200kb_75p/group_photo_2025-12-14.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-01-03.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-01-11.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-01-18.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-01-29.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-01-31.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-02-08.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-02-10.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-02-12.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-02-21.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-02-24.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-02-26.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-02-28.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-03-12.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-03-14.webp",
    "image/collage/cropped_200kb_75p/group_photo_2026-03-21.webp"
  ]

}

class PlatformLink {
  platform: string = ""
  display: string = ""
  username: string = ""
  link: string = ""
  image: string = ""
  type: string = ""
}

