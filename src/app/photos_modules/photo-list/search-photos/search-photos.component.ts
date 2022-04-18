import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'ap-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.scss']
})
export class SearchPhotosComponent implements OnInit {
  @Output()
    onTyping = new EventEmitter<string>()
  @Input()
    value: string = '';

  debounce: Subject<string> = new Subject<string>()

  constructor() { }

  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.onTyping.emit(filter))
  }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var element = target as HTMLInputElement;
      this.debounce.next(element.value);
    }
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
