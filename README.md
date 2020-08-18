# Ultimate-Authentication
### Core of Ultimate Authentication
#### App use M.E.R.N Stack for create.
:gear: Server
##### packed:
1. @sendgrid/mail
2. body-parser : For get body from request
3. cors: ross-origin resource sharing
4. dotenv: get environment variable in .env file
###### you need contact [SendGrid](https://sendgrid.com/) to get API
```
NODE_ENV=development
PORT: 8000
CLIENT_URL=<your-computer-ip>:3000
DATABASE='<mongodb-uri-db>/<name-of-table>'
SENDGRID_API_KEY=<your-sendgird-api>   
JWT_SECRET=<your-secret-key>
JWT_ACCOUNT_ACTIVATION=<your-activation-key>
JWT_RESET_PASSWORD=<your-reset-password>
EMAIL_FROM=<Email-you-use-to-login-sendgrid>
//JWT key you can random as least 20 char consist of number, alphabet,...
```
:gear: Client
1. axios: create Method http for talk with server
2. use React and boostrap to create page
.env
```
REACT_APP_API=<your-computer-ip>:8000
```
::Note
1. This app don't have csrf defense so you can add later or i can do it later
2. ratelimitter to defense spam from malicous user.
