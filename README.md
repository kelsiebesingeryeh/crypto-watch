# CryptoWatch

View the deployed site [here](https://crypto-watch-alpha.vercel.app/).

### Table of Contents
- [Introduction](#introduction)
- [Instructions](#set-up-instructions)
- [Project Planning](#project-planning)
- [Features](#features)
- [Challenges and Wins](#challenges-and-wins)
- [Tech Stack](#tech-stack)

## Introduction
We were tasked to build an application that serves the need of a very small, very niche audience using an open API. I started my career producing FinTech events, some of which included Cryptocurrency and Bitcoin. I have always been fascinated by the idea of alternative currency and the power behind Blockchain technology to help with financial inclusion for the underbanked and underserved. I created this application for three different types of users - a skeptic, someone who may not know what cryptocurrency is and needs some more guidance, a curious user - someone who knows about crypto and just wants to follow the markets, a interested user -someone who is going to buy crypto and needs some information on where to go.

## Set-Up Instructions
1. Clone the respository

```git@github.com:kelsiebesingeryeh/crypto-watch.git```

2. Install dependencies

```npm install```

3. Start the app in development mode

```npm start```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

5. Start the test suites

```npx cypress open```

6. To Run the testing suite hit 'run integration tests'

7. Cypress will open a new window to run all the tests. Watch the magic happen in real time!

## Project-Planning
Before I wrote any code, I laid out exactly how I wanted everything to look from code architecting, to wireframing to creating milestones, iterations and issues in my project board.
- [Code Architecture Planning Document](https://docs.google.com/spreadsheets/d/1SW2n_IZGMDNepVv4uPsDmclpP6XuVnBtv2_5lyqu8-0/edit?usp=sharing)
- [Wireframes](https://kelsielbesinger81110.invisionapp.com/freehand/cryptopedia-XyQLeHM2u)
- [Project Board](https://github.com/kelsiebesingeryeh/crypto-watch/projects/1)

## Features
When a user goes to the website, they are greeted on a homepage with three options to chose from.
![homepage](https://i.imgur.com/1k9T6bw.png)
![demo-video](https://media.giphy.com/media/fB7DjuTJerp03OYMJo/giphy.gif)

A user can select - Cryptopedia, Cryptocurrencies or Exchanges. Each category will route a user to a specific page based on their needs.

#### Cryptopedia
If a user is new to cryptocurrency, they can select "I'm new' and will be taken to a "Cryptopedia" page which is essentially a dicionary for all things crypto.
![cryptopedia](https://i.imgur.com/plTByvj.png)

#### Cryptocurrencies
If a user is curious about cryptocurrency, they can select "I'm curious" and will be taken to a Cryptocurrencies page which displays the top 100 cryptocurrencies currently trending along with live data on the coin. They can view market information. The user can also search for a coin by name or symbol. The user can also add a coin to their "favorites"
![cryptocurrencies](https://i.imgur.com/e92XMd4.png)

#### CryptocurrencyDetails
If a user is interested in a particular coin, they can click on the coin name and will be taken to a details page. This page gives more details on the coin including descriptions, team, tag and website links.
![cryptocurrencyDetails](https://i.imgur.com/CF3gQwZ.png)

#### Exchanges
If a user is looking to buy cryptocurrency, they can select "I'm looking to buy crypto" and will be taken to the 'Exchanges" page where they will be shown a list of live exchange data and information around where they can buy crypto.
![exchanges](https://i.imgur.com/le1Pv4y.png)


## Challenges and Wins
* **Challenges**: I would say my biggest challenge in this project was Cypress testing. I had made a plan and was implementing testing along the way with each iteration which was really helpful, however I hit a wall when it came to stubbing network requests and getting everything to test properly. I spent several hours researching stubbing and intercepting to ensure I was mocking the network request. I reached out to my mentor for support and ended up finding a good way to test the mocked data by adding some assertions. I felt that I had a good amount of test coverage during this process as well.
* **Wins**: My biggest win in this project would be the UI and how clean the data came out. I struggled a lot in the beginning with how to display the data in a meaningful way without it looking too boring. I love the colors, fonts, etc.. and feel of the site. It is very clean and minimal, but provides a lot of information. I'm proud of implementing not only the search feature but also adding in favorites. I also am proud that I used 4 API endpoints in this application to display all the information.  

## Tech Stack
Technologies used: 
* React, React Router
* REST API - multiple
* JavaScript
* CSS
* Cypress
* GitHub Projects

