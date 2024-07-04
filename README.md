# CurrencyConverter
Currency converter app for Software Engineering Summative 1

## Introduction
My workplace is an international business and as such often requires the conversion of currency. To this end, I will begin the creation of an online currency converter internal to the company.
This will enable our business & finance departments to convert currency quickly and efficiently, without the worry of using publicly available tools - As preventing any potential data collection on company finances is a key security consideration.

## Scope
The tool must meet the following functional and nonfunctional requirements to be considered an MVP, with each to be tested when fitting to ensure the all requirements are met.

### Functional Requirements
- Currency Conversion
    - The tool must allow the user to select two currencies to convert between.
    - The resulting value should be displayed and be correct as per the conversion rate.
- User Interface
    - The tool must have a functional and easy to navigate interface.
    - This interface must be tested to ensure accessibility.
- Currency Options
    - The tool must clearly list all available conversions
    - The available options will at minimum include currencies of which the organisation is most active (Euro, Great British Pound, United States Dollar & Japenese Yen).
- Error Handling
    - The tool handles errors in a user friendly manner, providing relevant error messages.

### Non-Functional Requirements
- Reliablilty
    - The tool must work reliably and consistently, for both currency conversion and ensuring uptime.
- Usability
    - The tool must be easy to navigate for users of all technical ability.
    - The tool should be accessible on varying devices (Mobile, PC etc).
- Maintainability
    - The code will be well documented to enable future edits.
- Scalability
    - The system should be created to enable updates to scale, such as to add more conversion rates or enable multiple simultaneous conversions.
  
## Project Management
For this project I will utilise an AGILE iterative workflow, with these first two-three weeks serving as the first iteration, allowing the MVP of the converter to be created within a reasonable timeframe without the long planning phase of a waterfall based project.

To this end, I will use the Github Project's Kanban feature to create tickets, track progress of each task, and create new tickets as the project progresses:

![Currency Converter Kanban](https://github.com/CurtisScholey/CurrencyConverter/assets/97024501/6a0853ac-41c7-4328-9297-e931624b2245)

Tickets are moved through each category as they are needed. Each begins within "Backlog", within which they are worked on and finalized. Some tickets may need several revisions before being moved to the ready column. Once a ready ticket is going to be worked on it's moved to "in progress", and then moved either back to the backlog if revisions are needed or to "Review" to check all requirements are met, and then finally moved to "Done".

Tickets are also grouped together in two ways to ensure they are found easily:
![Example Ticket](https://github.com/CurtisScholey/CurrencyConverter/assets/97024501/41a1ebb0-45af-47a2-b946-617f827521c6)

Each ticket has been named with a tag at the start, for this example it is "DOC - ", short for Documentation. Similarly, tags are utilised, as seen with the "documentation" tag. Combined, each ticket's purpose is clearly displayed.

### Other Key Points

This example also includes a User story and Requirements section as is standard for all my tickets.
Each ticket has an attached User Story, providing context as to who will work on the task, what the task is, and what value it creates.
The requirements are also important as they are how a ticket is judged for progress. Only once every requirement is reached can the ticket be moved into the "Done" column.

The last key note is how updates are added to this project. Utilising Githubs pull requests feature, changes can be made in different branches before being commited to main, and as such developments can be made incrementally. For Example, ticket #2 as shown above talks on including pull requests, of which was missed during the initial writeup whilst the ticket was in progress and this oversigt was discovered during the "in review" column, and moved back to in progress. With this paragraph complete, the ticket will also have all requirements met and as such can be moved to "done". 

## Design
