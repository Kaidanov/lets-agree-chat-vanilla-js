# Let's Agree Chat Application

This is a chat application built with Node.js and Socket.io. It allows users to send and receive messages in real time. Additionally, the chat features an AI helper that listens to the conversation and corrects any false facts shared by the participants.

## Installation

### Clone the Repository

First, clone the repository to your local machine:


```git clone https://github.com/Kaidanov/letsagree.git```



Navigate to the project directory:

``` cd letsagree ```

**Tip: Use pnpm to optimize the reuse and versioning of packages.

##Install the dependencies:

``` pnpm install ```

Usage

``` pnpm start ```

this will run the node server and allow you to access and visit http://localhost:3000.

## Working with open ai node project 

Refer to the OpenAI Node.js quickstart guide for integrating AI capabilities: OpenAI Quickstart.
https://platform.openai.com/docs/quickstart?context=node


To run your Node.js project locally, you can follow these steps:

Install Dependencies: Navigate to your project directory in the terminal and run pnpm install to install all the dependencies listed in your package.json file.

Start the Server: If your package.json file has a start script, you can start your server with the command pnpm start. The start script usually looks something like this:

"scripts": {
  "start": "node server/index.js"
}

In this case, node server/index.js starts your server. If your start script is different, adjust the command accordingly.

Open the Application: If your server is set up to run on a specific port (like 3000), you can open your application in a web browser by navigating to http://localhost:3000.
Remember to check the console for any error messages if your application isn't working. These can provide clues about what's going wrong.

heroku login
heroku create
# Push code to Heroku
git push heroku main

# Update the remote for Heroku
heroku git:remote -a your-heroku-app-name

# For GitHub, add changes to main branch
git add .

# Commit the changes
git commit -m "Update code"

# Push the changes to the main branch on GitHub
git push origin main

# Publish the main branch to Heroku
git push heroku main

=======

To run your Node.js project locally, you can follow these steps:

Install Dependencies: Navigate to your project directory in the terminal and run pnpm install to install all the dependencies listed in your package.json file.

Start the Server: If your package.json file has a start script, you can start your server with the command pnpm start. The start script usually looks something like this: 

"scripts": {
  "start": "node server/index.js"
}

In this case, node server/index.js starts your server. If your start script is different, adjust the command accordingly.

Open the Application: If your server is set up to run on a specific port (like 3000), you can open your application in a web browser by navigating to http://localhost:3000.
Remember to check the console for any error messages if your application isn't working. These can provide clues about what's going wrong.

heroku login
heroku create
## Push code to Heroku
git push heroku main

## Update the remote for Heroku
heroku git:remote -a your-heroku-app-name

## For GitHub, add changes to main branch
git add .

## Commit the changes
git commit -m "Update code"

## Push the changes to the main branch on GitHub
git push origin main

## Publish the main branch to Heroku
git push heroku main


## Add api key for openai api usage
  https://platform.openai.com/api-keys

## Add var of api on Heroku
  GO to settings -> Config Vars

## add .env
  Add a local file .env and add there a key OPENAI_API_KEY= '___Here_Is_You_API_Key'


## Check logs on Heroku server while running the app

To check the logs of your Heroku application, you can use the heroku logs command in your terminal. Here's how you can do it:

Open your terminal.
Navigate to your project directory.
Run the following command:

```heroku logs --tail```

This command will show you the most recent logs and will continue to stream new logs as long as the command is running. To stop viewing the logs, you can press Ctrl + C.

Remember, you need to be logged into Heroku CLI and your project must be associated with a Heroku app to view its logs. If you're not logged in, you can do so by running heroku login.


