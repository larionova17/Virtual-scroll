import {Component, OnDestroy} from '@angular/core';
import {VirtualScrollService} from './virtual-scroll.service';

@Component({
  selector: 'virtual-scroll-context',
  templateUrl: 'virtual-scroll-context.html',
  styleUrls: ['virtual-scroll-context.less']
})

export class VirtualScrollContext implements OnDestroy {
  subscription;
  items = [
    {id: 1, name: '', description: ''},
    {id: 2, name: '', description: ''},
    {id: 3, name: '', description: ''},
    {id: 4, name: '', description: ''},
    {id: 5, name: '', description: ''},
    {id: 6, name: '', description: ''},
    {id: 7, name: '', description: ''},
    {id: 8, name: '', description: ''},
    {id: 9, name: '', description: ''},
    {id: 10, name: '', description: ''}
  ];

  constructor(private service: VirtualScrollService) {
  }

  scroll = (event: any): void => {
    if (event.target.className === 'cdk-virtual-scroll-viewport cdk-virtual-scroll-orientation-vertical') {
      const number = event.srcElement.scrollTop;
      const firstDiv = event.target.firstChild;

      if (number < 180 && (firstDiv.children[0].className !== 'item item-1 visible' || firstDiv.children[1].className !== 'item item-2 visible')) {
        this.getData([1, 2], firstDiv);
      } else if (number > 181 && number < 410 && (firstDiv.children[0].className !== 'item item-1 visible' || firstDiv.children[1].className !== 'item item-2 visible' || firstDiv.children[2].className !== 'item item-3 visible')) {
        this.getData([1, 2, 3], firstDiv);
      } else if (number > 411 && number < 640 && (firstDiv.children[1].className !== 'item item-2 visible' || firstDiv.children[2].className !== 'item item-3 visible')) {
        this.getData([2, 3], firstDiv);
      } else if (number > 641 && number < 670 && (firstDiv.children[1].className !== 'item item-2 visible' || firstDiv.children[2].className !== 'item item-3 visible' || firstDiv.children[3].className !== 'item item-4 visible')) {
        this.getData([2, 3, 4], firstDiv);
      } else if (number > 671 && number < 1130 && (firstDiv.children[2].className !== 'item item-3 visible' || firstDiv.children[3].className !== 'item item-4 visible')) {
        this.getData([3, 4], firstDiv);
      } else if (number > 1131 && number < 1240 && (firstDiv.children[3].className !== 'item item-4 visible')) {
        this.getData([4], firstDiv);
      } else if (number > 1241 && number < 1740 && (firstDiv.children[3].className !== 'item item-4 visible' || firstDiv.children[4].className !== 'item item-5 visible')) {
        this.getData([4, 5], firstDiv);
      } else if (number > 1741 && number < 2250 && (firstDiv.children[4].className !== 'item item-5 visible')) {
        this.getData([5], firstDiv);
      } else if (number > 2611 && number < 2610 && (firstDiv.children[4].className !== 'item item-5 visible' || firstDiv.children[5].className !== 'item item-6 visible')) {
        this.getData([5, 6], firstDiv);
      } else if (number > 2611 && number < 2750 && (firstDiv.children[4].className !== 'item item-5 visible' || firstDiv.children[5].className !== 'item item-6 visible' || firstDiv.children[6].className !== 'item item-7 visible')) {
        this.getData([5, 6, 7], firstDiv);
      } else if (number > 2751 && number < 3070 && (firstDiv.children[5].className !== 'item item-6 visible' || firstDiv.children[6].className !== 'item item-7 visible')) {
        this.getData([6, 7], firstDiv);
      } else if (number > 3071 && number < 3110 && (firstDiv.children[5].className !== 'item item-6 visible' || firstDiv.children[6].className !== 'item item-7 visible' || firstDiv.children[7].className !== 'item item-8 visible')) {
        this.getData([6, 7, 8], firstDiv);
      } else if (number > 3111 && number < 3570 && (firstDiv.children[6].className !== 'item item-7 visible' || firstDiv.children[7].className !== 'item item-8 visible')) {
        this.getData([7, 8], firstDiv);
      } else if (number > 3571 && number < 3630 && (firstDiv.children[7].className !== 'item item-8 visible')) {
        this.getData([8], firstDiv);
      } else if (number > 3631 && number < 4130 && (firstDiv.children[7].className !== 'item item-8 visible' || firstDiv.children[8].className !== 'item item-9 visible')) {
        this.getData([8, 9], firstDiv);
      } else if (number > 4131 && number < 4140 && (firstDiv.children[8].className !== 'item item-9 visible')) {
        this.getData([9], firstDiv);
      } else if (number > 4141 && number <= 4360 && (firstDiv.children[8].className !== 'item item-9 visible' || firstDiv.children[9].className !== 'item item-10 visible')) {
        this.getData([9, 10], firstDiv);
      }
    }
  };

  getData(id, firstDiv) {
    this.subscription = this.service.getMovies(id).subscribe(data => {
      for (let i of data) {
        this.items[i.id - 1].name = i.name;
        this.items[i.id - 1].description = i.description;
        firstDiv.children[i.id - 1].classList.add('visible');
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}

