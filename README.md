# Finance Droid

A simple api to check the current stock prices for your favourite stocks.

# Run locally

To test the function locally use:

```
npm start
```

# Deployement

Project is deployed to AWS lambda using `sls` [serverless](https://www.serverless.com/framework/docs/). After aws credentials have been set using `aws configure` using the aws cli. Simply use the command: 

```
sls deploy
```
