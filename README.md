
# Timezone World Clock - BE

The Time Converter project is a tool that allows users to convert time between different formats. This README provides information on how to set up the project, its features, and usage instructions.




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_NAME=Your_Database_name`

`DB_USER=Yout_DB_Username`

`DB_PASSWORD=Your_password`

`DB_HOST=localhost`

`PORT = Your_Port_Number`


## Database Setup 
Use the provided json file (Cities_202312011345.json) to import the database schema and initial data


## Installation

Install Timezone World Clock with npm

```bash
  git clone https://github.com/avaiyakirtib/timezoneworldclock-BE.git
  cd timezoneworldclock-BE
  npm install
  npm run start
```
## API Reference

#### Get all items

```http
  GET /search/
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `string` | **Required**. World wide city search |


- api has only 5 search value data get not all