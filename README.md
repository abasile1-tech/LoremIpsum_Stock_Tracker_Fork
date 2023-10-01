# Lorem Ipsum stock tracking

This group project was completed while at CodeClan with my two classmates. Group Members: John Basile, Robert Mayo, and George Tegos. It is a React.js web app using CRUD operations to store local stock userdata on a RESTful API via mongodb.
We used the TwelveData API (https://twelvedata.com/) and the FinnHub API (https://finnhub.io/) for the stocks information in real time. You will need to get your own API keys if you would like to run the app.

## :movie_camera: Videos:

https://github.com/Oirien/LoremIpsum_Stock_Tracker/assets/136370232/a729e51c-70c3-4141-9423-dc3799205288



https://github.com/Oirien/LoremIpsum_Stock_Tracker/assets/136370232/75c1e6fd-1575-4e62-aee4-d3708cdee4d2



https://github.com/Oirien/LoremIpsum_Stock_Tracker/assets/136370232/2ec9ef05-2a9b-4b45-9975-7ddd81fa2131


## :arrow_right: Running Instructions:

- Clone the repository to your local machine by using the command line:
  
	```
	git clone git@github.com:abasile1-tech/LoremIpsum_Stock_Tracker_Fork.git
 	```
- then (optional: if you would like to install the prettier dev extension for vs code):
  ```
  npm install
  ```

- then:
  ```
  cd client
  npm install
  npm run dev
  ```

- then open another terminal in the project directory:
  ```
  cd ../server
  npm install
  npm run dev
  ```

- You will need a mongodb with 2 collections, one of the stock data and the second of user data.

## Our Project Brief
- User should be able to buy and sell stocks from various markets in accordance with their account wallet
- User should be able to see their portfolio of stocks and filter by name and price, both ascending and descending.
- User should be able to access customer support information
- User should be able to view and modify their personal account details
- User should be able to add money to their account wallet
- User should be able to see detailed graphs of the performance of the stocks they own
- User should be able to see general stocks news as well as detailed news pertaining to the specific stocks they own
- The app should pull data from multiple api sources 
- The app should store user data in a database

## :wrench: The Technologies We Used:
- Node.js
- React.js
- PostgreSQL

## :camera_flash: Screenshots:
![homePage](https://github.com/abasile1-tech/LoremIpsum_Stock_Tracker_Fork/blob/main/assets/homePage.PNG?raw=true)
![searchAppl](https://github.com/abasile1-tech/LoremIpsum_Stock_Tracker_Fork/blob/main/assets/searchAppl.PNG?raw=true)
![searchApple](https://github.com/abasile1-tech/LoremIpsum_Stock_Tracker_Fork/blob/main/assets/searchApple.PNG?raw=true)
![appleStock](https://github.com/abasile1-tech/LoremIpsum_Stock_Tracker_Fork/blob/main/assets/appleStock.PNG?raw=true)
![appleStockNews](https://github.com/abasile1-tech/LoremIpsum_Stock_Tracker_Fork/blob/main/assets/appleStockNews.PNG?raw=true)
![portfolioNameAsc](https://github.com/abasile1-tech/LoremIpsum_Stock_Tracker_Fork/blob/main/assets/portfolioNameAsc.PNG?raw=true)
![portfolioNameDesc](https://github.com/abasile1-tech/LoremIpsum_Stock_Tracker_Fork/blob/main/assets/portfolioNameDesc.PNG?raw=true)
![portfolioPriceAsc](https://github.com/abasile1-tech/LoremIpsum_Stock_Tracker_Fork/blob/main/assets/portfolioPriceAsc.PNG?raw=true)
![portfolioPriceDesc](https://github.com/abasile1-tech/LoremIpsum_Stock_Tracker_Fork/blob/main/assets/portfolioPriceDesc.PNG?raw=true)
![accountPage](https://github.com/abasile1-tech/LoremIpsum_Stock_Tracker_Fork/blob/main/assets/accountPage.PNG?raw=true)
![supportPage](https://github.com/abasile1-tech/LoremIpsum_Stock_Tracker_Fork/blob/main/assets/supportPage.PNG?raw=true)








