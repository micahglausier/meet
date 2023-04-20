# MEvent App

## Overview

MEvent is an app that provides events, and events based on different cities to a user.

## Links

- [Live site URL](https://micahglausier.github.io/meet/)
- [Code URL](https://github.com/micahglausier/meet)

### Features, User Stories and BDD Scenarios

Feature 1: Filter Events by City
User story
As a user I should be able to “filter events by city” So that I can see the list of events that take place in that city

Scenarios
Scenario 1:
When user hasn't searched for a city, show upcoming events from all cities. 
Given user hasn’t searched for any city 
When the user opens the app 
Then the user should see a list of all upcoming events

Scenario 2:
User should see a list of suggestions when they search for a city. 
Given the main page is open 
When user starts typing in the city textbox 
Then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3:
User can select a city from the suggested list. 
Given the user was typing “Berlin” in the city textbox And the list of suggested cities is showing 
When the user selects a city (e.g., “Berlin, Germany”) from the list 
Then their city should be changed to that city (i.e., “Berlin, Germany”) And the user should receive a list of upcoming events in that city

Feature 2: Show/Hide an Event's Details
User story
As a user I should be able to show and hide event details So that I can get more info about events I am interested in.

Scenarios
Scenario 1:
An event element is collapsed by default 
Given the user has just selected the city for which they wanted to browse events 
When the user gets the list of events in that city 
Then event elements should be collapsed by default

Scenario 2:
User can expand an event to see its details 
Given the user has identified an event of interest 
When the user clicks on that event element 
Then the element should expand and show its details

Scenario 3:
User can collapse an event to hide its details 
Given the user has gotten all information they need about the event 
When the user clicks on that event element 
Then the element should collapse and hide its details again

Feature 3: Specify Number of Events
User story
As a user I should be able to select the number of events that I see, giving me control over how many event show up.

Scenarios
Scenario 1:
When user hasn’t specified a number, 32 is the default number 
Given the user has not selected the number of events they want to see per city 
When the user receives the list of events in that city 
Then a number of 32 events should be displayed by default

Scenario 2:
User can change the number of events they want to see 
Given the user received a list of 32 events per selected city 
When the user wants to see more or less events per city 
Then they should be able to adjust the event number

Feature 4: Use the App When Offline
User story
As a user I should be able to use the app when offline So that I can access event information even when there is not internet available.

Scenarios
Scenario 1:
Show cached data when there’s no internet connection 
Given the user lost internet connection 
When the user accesses the app 
Then cached data should still be available

Scenario 2:
Show error when user changes the settings (city, time range) 
Given the user lost internet connection 
When the user tries to change settings (e.g. city, time range) 
Then an error message should appear

Feature 5: Data visualization
User story
As a user I should be able to view a chart that shows the number of upcoming events in each city.

Scenarios
Scenario 1:
Show a chart with the number of upcoming events in each city 
Given the user has not selected a city 
When the user wants to compare events between cities 
Then they should be able to access a chart with the number of upcoming events in each city

## Use of Serverless

The app will use a token, which will be generated in an authorization server. This server will host Lambda functions created to deliver authorization tokens to users. With this token, users will have access to event data from Google Calendar API.
