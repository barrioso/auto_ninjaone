# NinjaOme QA Automation Assignment
***
This project includes the test automation suite for the NinjaOne Logi-in Page integrating technologies such as Playwrith, Cucumber and JS

---
## Run cucumber scrips (Node.js Version) 
1. Clone the repository
2. Navigate to the root folder 
3. Run the comand "npm install"
4. Run the cucumber demo test "npx cucumber-js" (Expected to see the results and the execution ran)
---

## Tests for a Specific Environment  
***
Run tests by specifying the ENV variable, example:

- [For QA:] ENV=qa npx cucumber-js
- [For PROD:] ENV=prod npx ucumber-js

## Run All 
ENV=prod npx cucumber-js

## Run by tag
ENV=prod npx cucumber-js --exit --tags @smoke

## Run by feature
ENV=prod npx cucumber-js ./features/LoginPage.feature --exit

## Run by feature with progress bar and html report
ENV=prod npx cucumber-js --exit --format progress-bar --format "html":"cucumber-report.html"
