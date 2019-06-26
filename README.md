# Text Word Sort
Simple app to display to most N frequently occuring words in the given text.

![word-list](https://i.imgur.com/z6QrwB9.gif)

## Installation
  * Clone the Repo.

    ` git clone https://github.com/codemayank/text-words-sort.git`

  * Install the dependencies
    ```
      yarn install
      yarn install:server
      yarn install:client
    ```
  * Start server
    ```
      cd server
      yarn start
    ```
  * Start client the client should start running on port 3000.
    ```
      cd client
      yarn client
    ```

 

## App Structure
This is mono repo that consists code for both backend and front end of the application

### Backend
The backend for this app is implemented using Node/Express.

The Express app exposes following apis

1. Get N most frequently occuring words in the text file [GET /get-words/:N]
```
  //success response
  e.g.
  {
    code: 200,
    data: [
      {
        word: 'word',
        freq: 12
      }
    ]
  }

```

Backend is built using [Express](https://expressjs.com/) framework and following libraries are being used.
* [request](https://github.com/request/request#readme) - to make http requests from the express app to fetch the text file.
* [jest](https://jestjs.io/) - testing framework for running tests
* [cors](https://github.com/expressjs/cors#readme) - express middleware to enable CORS with various options.

### Frontend
The frontend for this app is implemented using [ReactJS](https://reactjs.org/).
The frontend consists of following components

1. App component which acts as the root component for the app.
    This component handles the global state of the app and fetches the words list from the server.
    This component renders the following child components
    * Word List Component
    * Form component
2. Word List Component.
    This component displays the list of words sorted in ascending order of their frequencies.
3. Form Component
    This component renders a form to fetch the no. of top most frequently occuring words from the server.

The frontend also has some helper modules like apis that contains the logic for making http requests to the server

The following libraries have been used on the frontend
* [SemanticUi](https://semantic-ui.com/) -  CSS framework to style the components
* [axios](https://github.com/axios/axios) - form making http requests


### Created By
## Mayank Yadav