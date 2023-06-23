# Online Store

## Summary
This front-end project seamlessly integrates with the Ruby on Rails back-end API, dynamically rendering items from the server. Advanced search functionality allows users to filter by categories, price, and name. Additionally, the user-friendly interface enables effortless cart management.

## Objectives

This front-end project is integrated with the Ruby on Rails back-end API.
- Dynamically rendering items from the server.
- Advanced search functionality allows users to filter by categories, price, and name.
- User-friendly interface enables effortless cart management, including adding, removing individual items, and clearing the entire cart.

## Description of the Project

For the development of the project, the following tools were used:

- JavaScript
- HTML
- CSS
- React
- Redux
- Bootstrap
- Package.json

The front-end was built using react and redux library.
On the homepage, there are two request actions to the REST-API using redux middleware.

- The first request is to the end-point '/products' to get all the products in the database.
- The second request is to '/categories' to get all the product ids and categories.

  - Redux data flow.

  ![image](./src/assets/Redux-diagram.png)

  The middleware is in charge of the process that handles the request and response. Once there is a 200 response, the data from the API is stored in Redux-store and through the react component HOME, the information is displayed.

  - The homepage displays all the products from the API.

  ![image](./src/assets/Home.png)

If there's an error of somekind a message will appear.

![image](./src/assets/Error_message.png)

The homepage displays all products with the following details: name, price, discount, and the sale price.

The customer can browse through all the products that might be of interest, then add them to the cart. A small counter will keep track every time a new item is selected. Once the customer has finished, it is possible to check all the items that were selected, if needed it is possible to add more items, remove them or delete the whole shopping cart.

- Add or Remove items from the Cart List.

  ![image](./src/assets/Cart.png)

If the customer needs a more in-depth search, there is a search tab at the top of the navbar. From this part of the webpage is possible to add items to the shopping cart.

Every time there's a new search a request is sent to the '/search' endpoint through redux middleware to the API. If there's a 200 response, the data will be stored in redux and then displayed.

- Search in the database by name, price, category and/or discount.

  ![image](./src/assets/Search.png)

[Netlify-Deployment](https://competent-mcnulty-9b9b65.netlify.app/)
It may take some time for the page to load since Heroku also needs time to load the back-end.

[![Netlify Status](https://api.netlify.com/api/v1/badges/27052ef2-c6a3-4b01-9a4d-f11438f88ff4/deploy-status)](https://app.netlify.com/sites/competent-mcnulty-9b9b65/deploys)

### **Endpoints of API**

| Method | Endpoint   |      Functionality |
| ------ | ---------- | -----------------: |
| GET    | products   |   Get the products |
| GET    | categories | Get the categories |
| GET    | search     |     Get the search |

These are the 3 endpoints needed to display all the information in the webpage.

For example in the local environment the BASEURL will be : http://localhost:3000/

- Get BASE_URL+products, the request to this end point will give a response with all the products in the database
- Get BASE_URL+categories, the request to this end point will give a response with all the categories from the product in the database.
- Get BASE_URL+search, the request is a string with all the different search arguments you need ( name, price, discount or any category from the menu)

## How to start the project from your Local environment

- Open your terminal and cd where you want to store the project
- Run the following command - `git clone https://github.com/Wusinho/tienda-licor-front-end`
- Cd into the created directory
- Run `npm install` to install all dependencies
- To run the pogram type `npm start` on your terminal (by default http://localhost:3000, remember that the back-end should run at a different port).

## Author

👤 **Heber Lazo**

- Github: [@Wusinho](https://github.com/Wusinho)
- LinkedIn: [Heber Lazo](https://www.linkedin.com/in/heber-lazo-benza-523266133/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a star if you :star: like this project!

## 📝 License

This project is [MIT](LICENSE) licensed.
