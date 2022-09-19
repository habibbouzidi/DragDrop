import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Image } from './image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'DragDrop';
  
  images: Image[] = [
    {"id": 1,
    "name": "test1",
    "link": "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ce2ece60-9b32-11e6-95ab-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg"
    },
    {"id": 2,
    "name": "test2",
    "link": "https://www.fnege.org/wp-content/uploads/2022/03/tests-tage.png"
    },
    {"id": 3,
    "name": "test3",
    "link": "https://webwereld.nl/cmsdata/features/3771324/je5jhttm7mmz6eq2_thumb1200_4-3.jpg"
    },
    {"id": 4,
    "name": "test4",
    "link": "https://www.english-efl.com/wp-content/uploads/2019/12/test.jpg"
    },
  ]

  imagesUpdate: Image[] = [
    {"id": 1,
    "name": "test1",
    "link": "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ce2ece60-9b32-11e6-95ab-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg"
    },
    {"id": 2,
    "name": "test2",
    "link": "https://www.fnege.org/wp-content/uploads/2022/03/tests-tage.png"
    },
    {"id": 3,
    "name": "test3",
    "link": "https://webwereld.nl/cmsdata/features/3771324/je5jhttm7mmz6eq2_thumb1200_4-3.jpg"
    },
    {"id": 4,
    "name": "test4",
    "link": "https://www.english-efl.com/wp-content/uploads/2019/12/test.jpg"
    },
  ]
  
  ngOnInit(): void {
    console.log(this.imagesUpdate)
  }
  drop(event: CdkDragDrop<Image[]>) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    
    for(let i =0; i<this.images.length;i++){
      this.imagesUpdate[i].link=this.images[i].link;
      this.imagesUpdate[i].name=this.images[i].name;
    }
    console.log("afterUpdate **");
    console.log(this.imagesUpdate)
  }
}
