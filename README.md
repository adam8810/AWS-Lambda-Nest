# AWS Lambda Nest Functions

Simple Lambda functions for interacting with Nest Thermostats. These can be used with AWS API Gateway to call these functions via HTTP.

## Setup
You'll need to get an access token from Nest's developer console.

1. Go to the Nest's [Products page](https://developer.nest.com/products) (This will redirect you to the login if you haven't logged in yet).
2. Create a New Product and give it the following permissions:
	- Thermostat
	- Away
3. Obtain an access token using the ["Set Up Authorization"](https://developer.nest.com/documentation/cloud/how-to-auth/) docs.
4. For the following Lambda Functions you will need to add your Nest access token to the corresponding config.js file in each directory.

### NestAwayPut

1. Navigate to `/away/put` and run `npm install` to install the necessary modules. You can test to make sure everything is working by running `node handler.js away` or `node handler.js home` to make sure the script can communicate to Nest's API correctly.
2. Run `sh build.sh` to zip the required files into a `package.zip` for the next step.
3. In AWS, create a new Lambda Function. Skip all the provided blueprints. Choose a name similar to "NestPutAway" and make sure the runtime is "Node.js" then select the "Upload a .ZIP file" radio button.
3. Press "Upload" and upload the `package.zip` file from step 2.
4. For the Role choose the "Basic Execution" role. Change Timeout to 5 seconds.
5. Now go to AWS API Gateway and create a new API.
6. Create a new Resource called 'Nest' with a path of `/nest`.
7. Within the newly created `Nest` resource create another resource called "Away" with a path of `/away`
8. Within the `Away` resource create a new Method for `PUT`.
9. Choose the "Lambda Function" radio button and choose the region your Lambda function is living on. For Lambda Function, start typing the name of the Lambda Function you setup in step 3.
10. In the "Method Execution" page for `/nest/away` PUT, click into the "Integration Request" section.
11. Expand the "Mapping Templates" heading and click "Add mapping template". Type "application/json" and press the check button.
12. Click the pencil button on the far right of Input passthrough. Change the dropdown to "Mapping Template".
13. Back in the project, copy the text from `mapping-template.json` and paste it into this text area. Press the checkbox to save.


Take a look at  [StackOverflow](http://stackoverflow.com/a/31345080/610982)