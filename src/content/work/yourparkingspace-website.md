---
title: YourParkingSpace
icon: 🚗
type: Website
intro: A clean, scalable, performant website built with usability in mind.
image:
    mobile: '/images/work/mobile/yourparkingspace-website.png'
    tablet: '/images/work/tablet/yourparkingspace-website.png'
    desktop: '/images/work/desktop/yourparkingspace-website.png'
technologies:
    - Vue.js
    - Nuxt.js
    - Storybook
    - Jest
    - Vue Test Utils
    - VRT
    - Github Actions
---

## Context
The previous YourParkingSpace website was a Vue-fronted Laravel app that wasn't scalable, and hadn't been built with performance in mind. With many different engineers having worked on the codebase without any code standards or a component-first approach, it was very difficult to scale the app.

## Solution
Luckily YourParkingSpace saw the benefit of completely rewriting the front-end website and decoupling it from the current Laravel app. Doing this allowed us to use modern technology more suited to the job, and to implement strict code standards and to build everything in a mobile-first, component-first driven approach. Below is an overview of some of the technologies used and how we utilised them:

### Vue.js and Nuxt.js
The previous website was built using Vue.js, and as this is our preferred JavaScript framework it was a no brainer to go with Vue.js. We also introduced Nuxt.js for many of it's benefits, including SSR, file-based routing etc.

### Storybook
As we decided to go with a component-first approach to building the website for scalability and maintainability, we decided to go with Storybook to help build components in isolation and to take advantange of mocking component states so we could see what an input looks like when there's an error with the inputted data etc.

### Jest and Vue Test Utils
We decided to ensure all components were covered with unit and component tests from the get go. This allows us to be confident that our components (to an extent) work as intended, and going forward we could confidently change or refactor parts of a component whilst still being sure that it was working as intended.

### ESLint and Stylelint
When it comes to linting we use ESLint for JavaScript and Vue, and Stylelint for CSS/Scss/SASS. This allows us to enforce our central code standards across the codebase, which ensures consistency.

### VRT
Working hand-in-hand with unit and component testing is VRT (Visual Regression Testing). Using the stories we have written in Storybook we automatically take screenshots of the component at the screen sizes it makes sense to which creates a baseline of what the component looks like. When we create a new PR we run another visual snapshot of all the components and use the baseline to compare against, and highlight anything above our visual tolerance.

### GitHub Actions
We utilise GitHub Actions to ensure for two main reasons:
- running our linters and test suite to ensure any new pr's don't break already passing tests
- using netlify deploy previews to make it easier to view component changes without having to pull down and run the branch
