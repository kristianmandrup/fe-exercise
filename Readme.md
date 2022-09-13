# Frontend Exercise - React TypeScript

## Getting started

Run `yarn` to install dependencies and `yarn dev` to spin up development server

```
  yarn
  yarn dev
```

## Tech requirements

Please write tests to the extent you find necessary to drive the development

Use [React Router](https://v5.reactrouter.com/web/guides/quick-start) for page navigation and routing.

## API

The file `api.ts` includes a virtual API with an async `data` function that returns a list of products

## Exercise 1: Load and display products

Use `useEffect` and `useState` to load products and display them in a list

- Name `Sofa`
- Description (unescape HTML)
- Availability: `Available` or `Unavailable`
- Price `$ 5.00`

## Exercise 2: Filter products

### Exercise 2.1 : Filter products that are available

Filter `inStock` is `true`

### Exercise 2.2 : Filter products by price

- Cheap `price <= 10`
- Expensive `price > 10`

### Exercise 2.3 : Filter products by name

Filter products by `name` using an input search box

## Exercise 3 : Shopping basket

Let user select filtered products which are added to shopping basket

### Exercise 3.1 : Total price of basket

Display total price of basket under the basket items

## Exercise 4 : Display number of items in basket in navigation bar

Display number of items in basket in the right side of navigation bar

## Exercise 5 : Store basket in local storage

Store basket products in local storage of the client browser.
Load products from local storage if present.
