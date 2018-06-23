# Description

This project contains a test suite for an existing application. It is a web-based application that reads RSS feeds. The JavaScript testing framework Jasmine is included and a first test in the test suite as well as the structure of the tests planned to be included.

### Jasmine Documentation
[Jasmine 2.6.1](https://jasmine.github.io/pages/docs_home.html)

# Instructions

Download or clone this repository (all files) to your computer and open `index.html` in a browser of your choosing. When the feeds are successfully loaded, test results should be displayed at the bottom of the page.

# Tests
They are devided in 4 test suites
* The RSS feed
* Checking the app has some feeds do load:
  - The array containing them exists
  - Each feed in it have an URL
  - Each feed in it has a title
* The menu of the application
  - Check menu act as expected
    - Default state of the menu is hidden
    - First click on the menu logo makes it appear
    - Second makes it disapear
* The first feed of the menu
  - Check that this feed is loads properly and is not empty
* Being able to load another entry
  - Check other feeds acts as expected
    - Check that we have more than one feed entry in the menu
    - Load another entry and check a different one is displayed


