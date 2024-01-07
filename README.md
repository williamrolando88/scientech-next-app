# Scientech

## Setup

To start working in the dev environment is required to have the following `.env` file in the root of the project:

```
# Firebase client config
FIREBASE_CLIENT={...}

# Firebase admin config
FIREBASE_ADMIN={...}

# Auth config
AUTH_SECRET=XXXXX #openssl rand -base64 32
AUTH_URL=http://localhost:3000/api/auth

# Forms config
FORMSPREE_SALES=XXXXXX
FORMSPREE_PROJECTS=XXXXXX
```

Each of the values can be found in the firebase console.

The `AUTH_SECRET` is a random string that will be used to sign the JWT tokens.

The `FORMSPREE_SALES` and `FORMSPREE_PROJECTS` are the form ids for the sales and projects forms respectively.

The `SERVICE_ACCOUNT` value is provided for Firebase to authenticate the admin console

## Development

Start by installing the dependencies:

```
yarn
```

To start the development server run:

```
yarn dev
```

By default the server will be running on port `3000`.

## Deployment

To deploy the project run:

```
yarn deploy
```

The deployment is done using vercel, it's automatically configured to deploy on every push to the `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
