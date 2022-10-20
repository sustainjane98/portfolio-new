
# Jane Will Portfolio

My Portfolio for knowing my skills as a software developer and more.




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`EMAIL_USERNAME` An emails username for the smtp server

`EMAIL_PASSWORD` An emails password for the smtp server

`EMAIL_HOST` An host of the smtp server

`EMAIL_PORT` An port of the smtp server

`EMAIL_IMAP_HOST` An host of the imap server

`EMAIL_IMAP_PORT` An port of the imap server

`EMAIL_IMAP_SECURITY` The security protocol for imap server

`EMAIL_SECURITY` The security protocol for smtp server
## Run Locally

Clone the project

```bash
  git clone https://github.com/jawil003/portfolio-new
```

Go to the project directory

```bash
  cd portfolio-new
```

Install dependencies

```bash
  npm i -g yarn
  yarn
  yarn global add lerna
```

Start the server

```bash
  yarn workspace @portfolio/frontend run dev
```

Optional: Run the tests

```bash
  yarn run test
```


## Authors

- [@jawil003](https://github.com/jawil003)

