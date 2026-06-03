## Code Build Education Artificial Intelligence API

## Create init project

```
    yarn init -y
```

## Create tsconfig.json

```
    yarn tsc --init
```

## Install

```
    yarn install
```

## Build

```
    yarn build
```

## Dev

```
    yarn dev
```

## Run

```
    yarn start
```

## Prisma

```
    npx prisma init --datasource-provider mongodb
```

## Prisma Client

```
    npx prisma generate
```

## ESLint

```
    npx eslint --init
```

## Jest

```
    npx jest --init
```

## Dependencies

```
    yarn add express
    yarn add @prisma/client
    yarn add dotenv
    yarn add joi
    yarn add cors
    yarn add openai
    yarn add supertest
```

## Dependecies Dev

```
    yarn add @types/express -D
    yarn add @types/cors -D
    yarn add @types/node -D
    yarn add @types/jest -D
    yarn add @types/supertest -D
    yarn add prisma -D
    yarn add ts-node -D
    yarn add typescript -D
    yarn add ts-node-dev -D
    yarn add ts-standard -D
    yarn add eslint -D
    yarn add jest -D
    yarn add ts-jest -D
```

## Create docker image

```
    docker build -t code-build-education-artificial-intelligence-api .
```

## Run docker image

```
    docker run -p 5001:5001 code-build-education-artificial-intelligence-api
```
## Remove docker image

```
    docker rmi 
```

## Tag docker image

```
    docker tag code-build-education-artificial-intelligence-api:latest thenowrock/code-build-education:artificial-intelligence-api-latest
```

## Push docker image

```
    docker push thenowrock/code-build-education:artificial-intelligence-api-latest
```
