import { Injectable } from '@angular/core';
import { DetailsModel } from 'src/app/model/details.model';
import { take, map} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private _list = new BehaviorSubject<DetailsModel[]>([
    new DetailsModel('1', 'First', ['../../assets/images/11.jpg', '../../assets/images/12.jpg', '../../assets/images/13.jpg']),
    new DetailsModel('2', 'Second', ['../../assets/images/21.jpg', '../../assets/images/22.jpg', '../../assets/images/23.jpg']),
    new DetailsModel('3', 'Third', ['../../assets/images/31.jpg', '../../assets/images/32.jpg', '../../assets/images/33.jpg'])
  ]);

  get list() {
    return this._list.asObservable();
  }

  constructor() { }

  getItem(id: string) {
    return this.list.pipe(
      take(1),
      map(list => {
        return { ...list.find(p => p.id === id) };
      })
    );
  }
}
