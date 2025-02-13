# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Title : Pizza Menu Project

# Description : This project is a Pizza Menu Web Application built with React and Vite. It displays a list of pizzas with their pictures, names, descriptions, and prices. The application dynamically adjusts the display based on the availability of pizzas and the opening hours of the restaurant.

Features

1./ Pizza Display:
Each pizza is displayed with its picture, name, description, and price.
If a pizza is sold out, the picture and text are displayed in gray, and the price is replaced with "Sold Out."

2./ Dynamic Messages:
If there are no pizzas available in the array, a message is displayed: "We're closed. No pizzas available today."
If the user visits the site during closing hours, a message is displayed: "We're closed. Welcome between [opening hour] and [closing hour]."
If the user visits during opening hours, an "Order" button is displayed.

3./ Responsive Design:
The web page is divided into three main sections: Header, Main, and Footer.
The layout is responsive and works well on both desktop and mobile devices.

4./ Opening Hours Logic:
The application checks the current time and compares it with the restaurant's opening and closing hours.
Based on the time, it displays appropriate messages or the "Order" button.

# Technologies Used : React, Vite, CSS

# Extensions can Help : One Monokai Theme, Prettier-Code formatter, Material Icon Theme

# Setting : set Auto Save to onFoucsChange, set Default Formatter to Prettier-Code formatter, add snippets
