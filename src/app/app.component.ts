import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  ngOnChanges() {
    console.log('ngOnChanges 1');
  }
  ngOnInit() {
    console.log('ngOnChanges 2');
  }
  ngDoCheck() {
    console.log('ngOnChanges 3');
  }
  ngAfterContentInit() {
    console.log('ngOnChanges 4');
  }
  ngAfterContentChecked() {
    console.log('ngOnChanges 5');
  }
  ngAfterViewInit() {
    console.log('ngOnChanges 6');
  }
  ngAfterViewChecked() {
    console.log('ngOnChanges 7');
  }
}
