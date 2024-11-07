# Component Fundamentals

## Signal

- A signal is a value tracked by Angular
- All signals must be called as functions

::: code-group

```ts:line-numbers [app.component.ts]
import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Angular will keep track of name's value
  name = signal("Paul")
}
```

```html:line-numbers [app.component.html]
<p>{{ name() }}</p>
```

:::

## Property Binding

- To bind data in the html template we use `[<attribute-name>]`

::: code-group

```ts:line-numbers [app.component.ts]

export class AppComponent {
  imageUrl = signal(
    'https://picsum.photos/id/237/500/500'
  )
}
```

```html:line-numbers [app.component.html]
<img [src]="imageUrl()" />
```

:::

## Event Binding

- To listen to events in the html template we use `(<event-name>)`

::: code-group

```ts:line-numbers [app.component.ts]

export class AppComponent {
  imageUrl = signal(
    'https://picsum.photos/id/237/500/500'
  )
  changeImage(event: KeyboardEvent) {
    this.imageUrl.set((event.target as HTMLInputElement).value)
  }
}
```

```html:line-numbers [app.component.html]
<input (keyup)="changeImage($event)" [value]="imageUrl()" />
```

:::

## Creating a component

- To create a new component `ng generate component <component-name>`
- By default, Angular prevents us from modifying other components data
- To tell Angular we want to modify other components data we use `input`
