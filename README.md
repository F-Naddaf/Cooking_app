# Delectable Recipe

The app name is Delectable-recipe-app.
The link of API website is: [TheMealDB](https://www.themealdb.com/)

## About Delectable Recipe

This App is going to fetch an API link from the website above.
It gives the user the convenience of searching for the dishes they like, and then they can choose the dish that they fancy,
with the pictures of the dishes and their names, and by clicking on the chosen dish, the method of it will appear the recipe.

## Demo

Here is a working live demo : [Delectable Recipe](https://delectable-recipe.netlify.app/)

## App features (content will be modified after finishing the app)

It is a cooking app which can provide you a recipe for the dish you want to make with a picture and the name of the dish
I will follow the [PostNL](https://www.postnl.nl) website style and gonna use [TheMealDB api](https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast) website to get the recipes.

## The app must have

- [x] Nice logo.
- [x] Fetching data from the link.
- [x] User can search for a dishes.
- [x] Display all the relative search result with the image of the dishes.
- [x] Display an error message if the result is not found.
- [x] When the user start searching without entering any dish name will be
      throw an error message and the search button will be disabled and enabled
      when start typing.
- [x] Display a new popup of the recipe when the user clicked on the dish.
- [x] The user can select other recipe before closing the old recipe popup.
- [x] Making the app interact with a different devices.

### Folder Structure

```text
public
└── style.css
└── Images
  └── cooking-logo.png
src
└── pages
  └── recipe-page.js
  └── result-page.js
  └── search-page.js
└── views
  └── init-view.js
  └── recipe-view.js
  └── search-view.js
└── app.js
index.html
README.md
```
