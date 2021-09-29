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
    /**
     * Called for every input change
     */
    console.log('ngOnChanges 1');
  }
  ngOnInit() {
    /**
     * Called when application is loaded
     */
    console.log('ngOnInit 2');
  }
  ngDoCheck() {
    /**
     * called when any event occurs in the component
     */
    console.log('ngDoCheck 3');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit 4');
  }
  ngAfterContentChecked() {
    // called twice
    console.log('ngAfterContentChecked 5');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit 6');
  }
  ngAfterViewChecked() {
    // called twice
    console.log('ngAfterViewChecked 7');
  }
}
