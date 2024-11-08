# Raisin FE tech challenge

Dear Candidate,

Here you can find our detailed tech challenge for your kind consideration. Please let us know if you would have any questions about our tech challenge.

Yours truly,
Raisin.

## API

It is a node/express server which returns data from a JSON file. You don't have to run anything else than running the server: the `frontend` project is configured to fetch data from this server.

## Frontend

It is a React application created with `create-react-app`. There is only one implemented feature: a list of Product Offers (see branch `develop`). The data is real and was taken from our development mocks.

## Prerequisites:

Node: v15 or higher
yarn: v1.22.4 or higher

## Installation and start up script

First thing is to install both projects: navigate within your terminal to each project folders and run `yarn`.

To start both projects: with your terminal, navigate to `frontend/` and run `yarn start`. The `start` script will navigate to the api folder and start the server and will also start the frontend project.

To check the API use your favorite browser to navigate to `http://localhost:3001/product-offers`. The expected output is a JSON array with objects. Now to check the frontend, use `http://localhost:3000`.

## The challenge

### Implementation: Raisin DS Offers table

Please find below the ticket that was started but **not** finished by our working student:

---

#### User story

**As a** Raisin customer,  
**I want** to see the Offers table  
**Because** I want to check the latest offers.

#### Acceptance criteria

- The web app should run without any issues.
- ~~All the offers returned from the `product-offers` endpoint should be displayed~~ (Completed)
- ~~The following data should be displayed upfront about each offer:~~ (Completed)

| [bank name]             |        |                      |                        |
| ----------------------- | ------ | -------------------- | ---------------------- |
| [nominal_interest_rate] | [term] | [country + currency] | [open accopunt button] |
| [product details]       |        |                      |                        |

- After click on "product details", the user should be able to view the following details about each offer:

| Interest Information                  |                        |
| ------------------------------------- | ---------------------- |
| Effective rate                        | [percentage_value] p.a |
| Nominal rate                          | [percentage_value] p.a |
| Term                                  | [ x ] Year/s           |
| Availability                          | [text]                 |
| Interest in case of early termination | [percentage_value] p.a |

| Product Details           |                     |
| ------------------------- | ------------------- |
| Deposit guarantee         | [amount]            |
| Currency                  | [currency]          |
| Min/Max investment amount | [min - max amounts] |
| Withholding tax           | [text]              |

#### Technical details

You can find all the dynamic information you need to display in the `product-offers` endpoint. You might need to get a bit creative with matching the data from the API response to the data that needs to be displayed in the table!
The designs and the way the details component is displayed is up to you.

---

#### Some background on the status of the story:

Our working student has already started working on this task and has left some notes about his progress

- Wire FE with the Node BE and test the GET endpoint ✔ Completed
- Create reusable `Header` component ✔ Completed
- Create `ProductOffers` page component and fetch API data. ✔ Completed
- Create `List` component ✔ Completed
- Create `OfferCard` component (ready for code review)
- Create `OfferDetails` component and add unit test coverage

#### Your tasks:

Our working student went on vacation and left the ticket unfinished. Your task is to pick it up and finish implementing the Offers table. There are 2 tasks left in order to finish this ticket:

- Review the `OfferCard`. The working student went on vacation in a hurry and forgot to open a pull request. The implementation is done in the branch `develop`. Before anything else you should create a pull request and then do the code review. You don't have to write/change the code, nor merge the pull request, just make comments/suggestions on merge request so the working student can work on improvements on his return. That's the first task.
- Implement the `OfferDetails` component which displays the data mentioned in the ticket. Please create a new branch out of `develop`, do the implementation of `OffersDetails` and then open a pull request. Unit tests will be added advantage. Instead of requesting to merge it into master, select it to be merged back into `develop` branch. You don't have to merge this branch either, just open the pull request. This is the second task.

#### Please make sure to click on `Submit review` once you add comments for first task.

#### One last thing:

Github Templates has the limitation of not being able to preserve the history of branches. Due to this, you will notice that when trying to open a pull request from `develop` towards `master`, you will get `There isn't anything to compare`. To fix this, you can follow the steps below:

```
git checkout develop
git rebase origin/master -Xtheirs
git add .
git rebase --continue (continue)
git push --force
```

**GOOD LUCK!**
