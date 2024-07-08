# NestJS Shared JWT

`nestjs-sharedjwt` is a shared JWT authentication package for NestJS microservices. It provides a consistent way to implement JWT authentication across multiple microservices by sharing common JWT strategy, guard, and utilities such as `JwtService`.

## Features

- **JWT Strategy**: Configurable JWT strategy for NestJS applications.
- **JWT Auth Guard**: Protect your routes using JWT authentication.
- **JwtService**: Utility service for signing and verifying JWT tokens.
- **Shared Auth Module**: Reusable Auth module that can be imported into any NestJS microservice.

## Installation

### Step 1: Install the Shared Package

Add the shared package to your microservice by specifying the GitHub repository in your `package.json`:

```json
{
  "dependencies": {
    "loopy-sharedjwt": "git+https://github.com/wildanrhmn/nestjs-sharedjwt.git"
  }
}
```

### Step 2: Get your .env working in your NestJs Services

Configure these .env value in your `.env`:

```json
AUTH_JWT_SECRET=YOUR_SECRET
AUTH_JWT_SECRET_KEY=YOUR_SECRET_KEY
AUTH_JWT_TOKEN_EXPIRES_IN=1d
```

