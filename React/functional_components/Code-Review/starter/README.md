# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Title : Pizza Menu Project

# Description : This project is a Pizza Menu Web Application built with React and Vite. It displays a list of pizzas with their pictures, names, descriptions, and prices. The application dynamically adjusts the display based on the availability of pizzas and the opening hours of the restaurant.

# # Features

# 1./ Pizza Display:

    Each pizza is displayed with its picture, name, description, and price.
    If a pizza is sold out, the picture and text are displayed in gray, and the price is replaced with "Sold Out."

# 2./ Dynamic Messages:

    If there are no pizzas available in the array, a message is displayed: "We're closed. No pizzas available today."
    If the user visits the site during closing hours, a message is displayed: "We're closed. Welcome between [opening hour] and [closing hour]."
    If the user visits during opening hours, an "Order" button is displayed.

# 3./ Responsive Design:

    The web page is divided into three main sections: Header, Main, and Footer.
    The layout is responsive and works well on both desktop and mobile devices.

# 4./ Opening Hours Logic:

    The application checks the current time and compares it with the restaurant's opening and closing hours.
    Based on the time, it displays appropriate messages or the "Order" button.

# 5./ Add New Pizza Form

    A form at the end of the page allows users to add a new pizza to the menu.

# Technologies Used : React, Vite, CSS

# Extensions can Help : One Monokai Theme, Prettier-Code formatter, Material Icon Theme

# Setting : set Auto Save to onFoucsChange, set Default Formatter to Prettier-Code formatter, add snippets

# ==> List of tasks :

# # Task 1: Create the Basic Structure

1. Create a components folder inside src.
2. Create the following components:
   Header.jsx
   Menu.jsx
   Footer.jsx
   Pizza.jsx
   Order.jsx
   AddPizza.jsx
3. Set up the basic structure of the App.jsx file to include the Header, Menu, AddPizza and Footer

# # Task 2: Build the Header

1. In the Header.jsx component, create a header that displays the title of the application (e.g., "Fast React Pizza CO.").
2. Style the header using CSS

# # Task 3: Display the Pizzas

1. In the Menu.jsx component, map over the pizzaData array and display each pizza using the Pizza.jsx component.
2. check if the pizzaData array is empty.
3. If the array is empty, display a message: "We're closed. No pizzas available today."
4. Pass the pizza data (name, ingredients, price, photoName, soldOut) as props to the Pizza.jsx component.
5. In the Pizza.jsx component, display the pizza's image, name, ingredients, and price.

# # Task 4: Handle Sold-Out Pizzas

1. In the Pizza.jsx component, check if the pizza is sold out (soldOut: true).
2. If the pizza is sold out:
   Display the image and text in gray.
   Replace the price with "Sold Out".

# # Task 5: Implement the Order Component

1. In the Order.jsx component:
   Display a message like: "We're open until {closeHour}:00. Come visit us or order online."
   Add a button that says "Order Now". (For now, the button can just log a message to the console when clicked.)
2. Style the Order component to make it visually appealing.

# # Task 6: Add a Form to Create New Pizzas

1. In the AddPizza.jsx component, create a form with the following fields:
   Name: Text input for the pizza's name.
   Description: Text input for the pizza's description.
   Price: Number input for the pizza's price.
   photoName : Text input for the pizza's image .
   Sold Out: Checkbox to mark the pizza as sold out.
2. When the form is submitted, add the new pizza to the pizzaData array and update the UI.

# # Task 7: Build the Footer

1. In the Footer.jsx component:
   Use the current time to determine if the restaurant is open or closed.
   If the restaurant is open, render the Order.jsx component.
   If the restaurant is closed, display a message: "Sorry, we are closed. Welcome between [openHour] and [closeHour]."
2. Pass the openHour and closeHour as props to the Order.jsx component.
3. Style the footer to make it visually distinct.
