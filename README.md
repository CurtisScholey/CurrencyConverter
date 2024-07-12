# CurrencyConverter
Currency converter app for Software Engineering Summative 1
![image](https://github.com/user-attachments/assets/fbebf150-26db-48c2-9862-b608b495dc7c)
[Link to the site](https://curtisscholey.github.io/CurrencyConverter/)

[Link to the repository](https://github.com/CurtisScholey/CurrencyConverter/)

## Introduction
My workplace is an international business and as such often requires the conversion of currency. To this end, I will begin the creation of an online currency converter internal to the company.
This will enable our business & finance departments to convert currency quickly and efficiently, without the worry of using publicly available tools - As preventing any potential data collection on company finances is a key security consideration.

## User Documentation
To clone and test the repo, please follow these steps:

### Test node and npm versions (if not present, follow the install instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)):
```
node -v
```
```
npm -v
```
### Clone the repo:
```
git clone https://github.com/CurtisScholey/CurrencyConverter.git
```
You now have access to the repo, to test the repo use the following commands:

### Tests:
Smoke test site (Tests if it's online):
```
npm run-script testSite
```
Smoke test site UI:
```
npm run-script testUI
```
Logic functionality tests:
```
npm run-script testFunc
```

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
    - The available options will at minimum include currencies of which the organisation is most active (Euro, Great British Pound, United States Dollar & Japanese Yen).
- Error Handling
    - The tool handles errors in a user friendly manner, providing relevant error messages.

### Non-Functional Requirements
- Reliability
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

The last key note is how updates are added to this project. Utilising Githubs pull requests feature, changes can be made in different branches before being committed to main, and as such developments can be made incrementally. For Example, ticket #2 as shown above talks on including pull requests, of which was missed during the initial writeup whilst the ticket was in progress and this oversight was discovered during the "in review" column, and moved back to in progress. With this paragraph complete, the ticket will also have all requirements met and as such can be moved to "done". 

## Design
For initial design, I have used [Figma](https://www.figma.com/about/) to create a draft of how the site should look:

![FigmaDesign](https://github.com/CurtisScholey/CurrencyConverter/assets/97024501/9ae89615-e312-45fc-a49f-3a9dea847a9c)

This design includes the overall structure I aim to utilise within the tool, specifically a title & two input and dropdown boxes. I've also included the option to include conversion rate should that be of interest.

### Design Development

During the development of the HTML and CSS files, it was found that the previous structure was unideal for navigation via iterative A/B testing.  
By repeatedly improving and comparing the layout, it was found that the conversion should be automatic without having to click a button, and both boxes should allow for user input. It was also found that the conversion rate should be shown by default.:
![firstActiveDesign](https://github.com/CurtisScholey/CurrencyConverter/assets/97024501/78f459f5-6fda-4f6a-b705-c61a73387872)

The colours used are those specified by the companies branding: https://onbrand.astrazeneca.com/content/intelligentcontent/cabrandportal/brand/astrazeneca/astrazeneca-brand-portal.html

## Code & Testing

### Timeline
The development timeline was as follows:
- index.html & styles.css files were created
    - Initial site was tweaked until it was formatted correctly (As shown in the Design section)

- script.js file created to allow for the site to be functional
    - API key stored in the main script
    - Site function is ensured. Dropdowns allow currency selection and the site dynamically updates as per conversion rate.

- index.test.js file created to enable jest testing (featuring UI smoke tests)
- test.yml created to automatically test the site's UI on push

- config.js created to move the API key from script.js
- logic.js created to move the conversion function to allow testing and ensure better coding practise

- logic.test.js created for function testing
    - package.json updated to have multiple testing scripts
- site.test.js created to smoke test if the site is online
- test.yml updated to run testing in each test. file 

- final changes for accessibility implemented.

### Coding Practises
Throughout the development of the tool I ensured all areas of the code are readable and commented. By utilising camel case for variable names and correct indentation the code is easily accessible for any other developers. For example, the top of the script.js file is as follows:
![image](https://github.com/user-attachments/assets/a195f33c-578d-4f1a-b8ac-60a3a73b2ed4)

### Ongoing Testing
During the development lifecycle, it was important to consistently test the functionality of the code. To this end I have made use of [github actions](https://docs.github.com/en/actions) and created a workflow to automatically run each of the test files whenever a change is made (On a merge or push). We'll first explore each of these tests individually and then how they work within the repo.

#### Smoke Tests
By running the command:
```
npm run-script testSite
```
A test is run to check that the site is currently running and accessible via protocol code. This can be seen in the following:
![successfulSiteTest](https://github.com/user-attachments/assets/9a269a9c-e62b-43d4-8db3-d5a0d6a89d7c)

This allows ongoing maintenance as any change that would result in a failed test has directly caused the site to be inaccessible and can then be easily located and rectified.

Similarly, by running the command:
```
npm run-script testUI
```
A test is run in a JSDOM environment on all of the UI elements of the page. For example it checks that the input values are usable but limit text from being entered. This can be seen here:

![successfulUITest](https://github.com/user-attachments/assets/32433aeb-7479-4bb5-9661-386e6a06c8ea)

As seen, a wide variety of smoke tests are ran, and as such ensure functionality across the board and as before should any fail we can locate the cause with the documented changes of the push.

#### Functionality Tests
In contrast to the smoke tests, the logic of the tools function must also be tested. By running the command:
```
npm run-script testFunc
```
A large sum of tests are carried out to ensure that the logic of the function is correctly calculating conversions. The results of running the test can be seen here:
![successfulFuncTest](https://github.com/user-attachments/assets/e371c1ab-d45f-45b9-854f-79e41fccbcc8)

As shown, a great variety of tests are run. Specifically, to ensure extensive testing, it checks for each of the following inputs to work:
- Positive
- Negative
- Decimal
- Zero integer
- Edge case
- Reverse (Specifically using the second box's value as the conversion rate is to be divided instead of multiplied)

#### On Push
When changes are made to the code and pushed to the repo, the workflow as prompted by github actions runs and displays the results of the tests, as seen by the checkmark:

![image](https://github.com/user-attachments/assets/d63ec31f-9c43-43b8-8bd4-9b5e365e0f01)

When a push is made the practise is to see if any tests fail before making any new changes, as we can catch what causes the error immediately. We can see each step by looking in the actions tab and even re-run all the jobs should we wish to test again:

![image](https://github.com/user-attachments/assets/0ea72989-4656-4919-9714-f18b79618d87)

## Performance & Accessibility
Once the functional aspects of the tool were complete, it was time to explore the "This interface must be tested to ensure accessibility." section of the MVP requirements.
Utilising [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) I generated a report as to overall quality of the tool in 4 key areas: 
![image](https://github.com/user-attachments/assets/783cc021-e3c7-4a8e-a259-ed8fa89cc8dd)

- Performance - The performance of the page, such as load speed and responsiveness.
- Accessibility - The accessibility of the page, such as readability and labels.
- Best Practises - The practises used by the page, such as avoiding depreciated code.
- SEO - Search Engine Optimisation, how well the site is optimized for discovery - This area is somewhat redundant as the tool will be used exclusively internally.

This report noted that a key accessibility concern was the low contrast levels between the white text and grey background, as well as lacking a label for what each row is for as seen:
![image](https://github.com/user-attachments/assets/4b593e75-b800-4710-b537-fbcffc777614)
![image](https://github.com/user-attachments/assets/0eebf78e-f2c0-4961-af0d-872ed4060f82)

To fix this, I conducted A/B testing with employees as to what seemed best in terms of fixing these issues by presenting alternative designs. This testing resulted in the conclusion that the colours should be reversed, and that a label for "to" and "from" should be implemented.

As seen, this testing and implementation would increase the score to a green grade:

![image](https://github.com/user-attachments/assets/005a7172-4b07-41a2-850f-74ccc02b687e)
![image](https://github.com/user-attachments/assets/62c9b782-32da-4c69-9247-6f884f43971f)

## Evaluation

Overall I consider the development of this tool to be a resounding success. The site effectively communicates how to utilise it in an accessible and consisten manner. I've utilised design principles to ensure the site isn't overcrowded and enabling a smooth user experience. To explore more specifically as to the success of the project I'll discuss each of the MVP requirements.

### Functional Requirements
- Currency Conversion
    - The tool must allow the user to select two currencies to convert between.
    - The resulting value should be displayed and be correct as per the conversion rate.
  
**Result: As shown via UI and Functionality testing, the core functionality of the tool is successful.**

- User Interface
    - The tool must have a functional and easy to navigate interface.
    - This interface must be tested to ensure accessibility.
  
**Result: As shown via Google Lighthouse testing, the site is accessible and easy to navigate.**

- Currency Options
    - The tool must clearly list all available conversions
    - The available options will at minimum include currencies of which the organisation is most active (Euro, Great British Pound, United States Dollar & Japanese Yen).
  
**Result: As shown through UI testing, we have not only the key currencies but a list of a great many via API**

- Error Handling
    - The tool handles errors in a user friendly manner, providing relevant error messages.
  
**Result: As shown via UI testing, the user cannot enter invalid inputs, and as shown with Site testing, should the site be inaccessible an error message is given.**

### Non-Functional Requirements
- Reliability
    - The tool must work reliably and consistently, for both currency conversion and ensuring uptime.
  
**Result: Thorough testing ensures that functionality wise the tool is correct, and uptime wise each push passes the site test**

- Usability
    - The tool must be easy to navigate for users of all technical ability.
    - The tool should be accessible on varying devices (Mobile, PC etc).
  
**Result: Google lighthouse testing confirms accessibility to those with needs of screen readers and the likes, and that the tool is functional on mobile devices.**

- Maintainability
    - The code will be well documented to enable future edits.
  
**Result: As shown within the coding practises section, the code is well commented and readable**
- Scalability
    - The system should be created to enable updates to scale, such as to add more conversion rates or enable multiple simultaneous conversions.
  
**Result: With the logic stored in a separate file, updates to scale such as adding more conversions at once are easily achievable**


