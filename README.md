# Madeira Must See Places - Map App React Project

Project #8
Created for the Udacity Nanodegree Front End Web Developer (Full Google Scholarship)

[LIVE PREVIEW](https://magda-korzeniowska.github.io/fend-project-map-app-react/)

## Table of Contents

* [Project Description](#project-description)
* [Installation](#installation)
* [File Structure](#file-structure)
* [Create React App](#create-react-app)
* [Important](#important)
* [Dependencies](#dependencies)
* [Sources](#sources)
* [Contributing](#contributing)

## Project Description

In this final task, students had to built the project from scratch, without any existing starter code to rely on.
The goal was to develop a single page application (accessibble and available offline) featuring a map with extra functionality added to this map (including highlighted locations, third-party data about those locations and various ways to browse the content).

The app uses React.js with Google Maps API, Flickr API, MediaWiki API (Wikipedia), as well as react-google-maps and escape-string-regexp packages. The complete list of dependencies can be found below.

This app presents a map of places worth visiting on Madeira Island. User can filter locations by name and click each marker to display infowindow to get a detailed information about specific location with pictures.

## Installation
1. Clone repository using:

    `$ git clone https://github.com/magda-korzeniowska/fend-project-map-app-react`

2.  Install all dependencies:

    `$ npm install`

3. Run application:

    `$ npm start`

4. After running npm start, the React App should open automatically in your browser. If it doesn't, open `localhost:3000` in your browser.

## File Structure
```bash
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── components
    │   ├── Button.js
    │   ├── Header.js
    │   ├── LocationDetails.js
    │   ├── LocationMarker.js
    │   ├── Map.js
    │   ├── MapContainer.js
    │   └── Search.js
    ├── data
    │   └── locations.json
    ├── images
    │   ├── Flag_of_Madeira.svg
    │   ├── back_icon.svg
    │   └── hamburger_menu.svg
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    └── serviceWorker.js
```

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

## Important
The application can be run offline using the service worker that is provided by create-react-app. It will work only on production build (production mode)

## Dependencies
- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [react-google-maps]( https://tomchentw.github.io/react-google-maps/)
- [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)
- [prop-types](https://www.npmjs.com/package/prop-types)
- Images from [Flickr API](https://www.flickr.com/services/api/flickr.photos.search.html)
- Data from Wikipedia API - [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page)


## Sources
- icons: [iconfinder.com](https://iconfinder.com)

## Contributing
This is a Udacity student's project. Therefore, no pull requests will be accepted.
