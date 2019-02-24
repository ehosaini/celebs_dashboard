This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## App Description: 
A dashboard that displays a list of artists and their info.

## Initial setup:
1 - Clone the repo, then navigate to the project directory.

2 - In the `src/config/config.js` assign the a route that servers data to CELEBS_INFO_URL. This variable is used by `src/api/celebrities.js` to get info about the artists.

3 - Runs the app in the development mode by entering `npm start` in the terminal<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Navigating the App and App Routes:
 - Main route `/`: Once the app loads, click on a celebrity name on the left-side list to see their details.
 - Celebrity details `/:id`:  Alternatively enter a celebrity's `id` like `/1` or `/2` to see their detials. 

## Assumptions:
Payloads provided by the endpoints are as following

1 - `/` or `/artists`: an array of objects each formatted like so:
```json
{
    "id": 1,
    "name": "quentin",
    "middleName": "jerome",
    "lastName": "tarantino",
    "occupation": "director",
    "dateOfBirth": "03/27/1963",
    "age": 56,
    "placeOfBirth": "knoxville",
    "pictureUrl": "url-for-the-picture"
},
```
2 - `/artists/:artistID`: a single object for the specified id formatted like above

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
