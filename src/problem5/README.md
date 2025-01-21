# Express CRUD Server with TypeScript

## Description
This project is a backend server implemented using ExpressJS and TypeScript. It provides a CRUD interface to manage resources and persists data using a database connected via Prisma.

## Features
- **Create** a new resource.
- **List** all resources with optional name-based filtering.
- **Retrieve** details of a specific resource.
- **Update** details of an existing resource.
- **Delete** a resource.

## Prerequisites
- Node.js (>= 14.x)
- npm or yarn
- PostgreSQL or another database supported by Prisma

## Installation

1.  Clone the repository:
   ```bash
   git clone https://github.com/huy1992nd/code-challenge.git
   cd code-challenge/problem4

2. Install dependencies:
    npm install

3. Configure the database:
    copy .env.sample to .env

4. npx prisma migrate dev --name init

5. Make sure the PostgreSQL client is installed:
   npm install @prisma/client

## Running the Server
Start the server in development mode:

npm run dev
The server will run at http://localhost:3000.
