# Project Documentation: Hackernews Search
## Building the project
 ### Prerequisites
 a) NodeJs
 
 b) npm
 
 c) VSCode
 
  Follow the following instructions:
  1. In the VSCode terminal type **npx create-react-app app-name** to create a new react project in the respective folder.
  2. After creating the project, follow the below steps to create a react web application to search hacker news.
## 1. Introduction
The Hackernews Search project is a React application that allows users to search and explore posts on Hacker News. Leveraging the Hacker News API, the application provides a user-friendly interface for searching, viewing search results, and exploring detailed information about individual posts.

## 2. Project Overview
The project consists of a single-page application built with React and styled using Styled Components and Material-UI. Users can enter search queries, view search results, and click on individual posts to see detailed information.

## 3. Technologies Used
1. React
2. Axios
3. Styled Components
4. Material-UI
   
## 4. Project Structure
The project follows a standard React project structure:
/src
  /components
    - App.js
    - SearchBar.jsx
    - SearchResults.jsx
    - PostDetail.js
  App.js
  App.css
  App.test.js
  
## 5. Components Overview
### a) App.js
The main component responsible for rendering the application structure. It manages the state for search results and the selected post.

### b) SearchBar.jsx
A component handling user input for searching Hacker News. It communicates with the Hacker News API through the api.js utility.

### c) SearchResults.jsx
Displays the search results and handles item clicks to show detailed information about a selected post.

### d) PostDetail.jsx
Displays detailed information about a selected post, including the post title, points, comments, and comment details.

## 6. Styling Overview
1. Global Styles
Global styles, including a fade-in animation and a light gray background, are applied using the GlobalStyles.js file.

2. Component Styles
Each component has its own styled-components, defining specific styles for elements within that component.

## 7. API Integration
The project uses Axios to interact with the Hacker News API. The api.js utility contains functions for making API requests.

## 8. Functionality
1. Searching Hacker News
Users can enter search queries in the search bar, triggering a call to the Hacker News API to retrieve relevant posts. Results are displayed in the SearchResults component.

2. Viewing Post Details
Clicking on a post in the search results displays detailed information in the PostDetail component, including the post title, points, comments, and comment details.

## 9. Running the Project
1. Clone the repository: git clone https://github.com/your-username/hackernews-search.git
2. Install dependencies: npm install
3. Start the development server: npm start
   


