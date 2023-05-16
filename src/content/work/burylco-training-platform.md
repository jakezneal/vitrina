---
title: BuryLCO
icon: 🧑‍🏫
type: Training Platform
intro: Building a greefield training platform to digitalise an existing archaic process of providing training.
image: '/images/work/burylco-training-platform.png'
technologies:
    - Vue.js
    - Nuxt.js
    - Storybook
    - Jest
    - Vue Test Utils
    - VRT
    - Github Actions
    - Laravel
    - Laravel Passport
---

## Context
BuryLCO provide their 'strength-based' training across the whole health and social care system in Bury. With a very manual process in place, this was proving very time consuming and difficult to scale up. Trying to keep track of different trainers, course dates, ensuring the most up-to-date course materials were used, and trying to train users to be able to deliver training was causing bottlenecks.

## Solution
Having assessed commercial off-the-shelf solutions and realising that nothing was going to fit the bill, we came to the conclusion that a custom-built solution was the answer. Being able to have fine-grain control was key in ensuring there was little-to-no distruption in the way they deliver their training on this new platform. We separated the platform out into two distinct system:

### Website
The front-end website served as a place to provide information about BuryLCO and the courses they offered. We used a mobile-first, component-first approach to building the website, using Storybook to create a UI library. All the component were backed with unit and component tests using Jest and Vue Test Utils, as well as VRT to ensure nothing was affected unintentially.

### Account area
The account area served as a central place for all users to log into. As we didn't want to have different portals for each user type to log into (admins, trainers and users) we created a single account area and displayed different pages specific to the type of user that had logged in.

#### Admin users
Admins were able to manage users, view highly customisable reports, create new course modules, amongst other things.

#### Trainers
Trainers were able to see which course dates they had been assigned to, download materials for each course module, mark user attendance, and mark pass/fail status for each user on a particular course module.

#### Users
Users were able to view their upcoming course dates for courses they'd enrolled in, certificates they had been given upon the successful completion of a course.
