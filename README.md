React Rating App

> A simple react component for adding a star rating to your project, with package size of just 4.9 kb

## Install

#### npm

```sh
npm i react-rating-app
```

## Usage

```jsx
import React from "react";
import { Rating } from "react-rating-app";

export function MyComponent() {
  return (
    <div>
      <Rating size={24} maxRating={10} onSetRating={setStarRating} />
      //can use other props also refer later section
    </div>
  );
}
```

### Available Props

```jsx

    maxRating: PropTypes.number,   //will give number of stars we want default is 5
    defaultRating: PropTypes.number,   // its 0 stars by default (rating given by user)
    color: PropTypes.string,   // color of the stars defaut is yellow
    size: PropTypes.number,    //how big stars we want default is 48
    messages: PropTypes.array, // We can also pass message like awesome, good etc
    className: PropTypes.string, /// provide styling to stars
    onSetRating: PropTypes.func, // set Rating by state

### License

MIT © [rbzashu](https://github.com/ashurbz)
```
