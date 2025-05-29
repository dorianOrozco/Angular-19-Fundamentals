import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  name : string = "I came from the html's underlying .ts file.";  // lower case is the declarative type
  topic : string = "The @Component decorator within the .ts file automatically binds the component to specified html component (via templateUrl: 'component.html'). The component's templateUrl decides which page the class should bind to."; // dont use capital S for declaring strings (as that is a wrapper around string. string != String).
}
