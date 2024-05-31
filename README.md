# AirPodsMax Commerce

Welcome to AirPodsMax Commerce! This project is an e-commerce platform specifically for Apple's AirPods Max and AirPods products. It provides a modern, seamless, and secure online shopping experience for users.

## Project Overview

AirPodsMax is built with the latest technology to ensure users have a smooth and secure online shopping experience. The platform leverages modern frameworks and tools.

## Tech and Packages Used

Details of all packages used can be found in `package.json`. The main stack includes:

- **Next.js 14.2**: [Official documentation](https://nextjs.org/docs)
- **TypeScript 5.4**: [Official documentation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-4.html)
- **TailwindCSS 3.4**: [Official documentation](https://tailwindcss.com/docs/)
- **Prisma 5.12**: [Official documentation](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql)
- **Zustand 4.5**: [Official documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)

## Project Structure

```
airpodsmax-commerxe
|- public
|- src
|  |- app
|  |  |- admin
|  |  |- api
|  |- components
|  |- constants
|  |- lib
|  |- types
|  |- utils
packages
|- components.json
|- next.config.mjs
|- tailwind-config
```

### Directory Overview

- **public**: Contains static assets.
- **src/app/admin**: Admin-related pages and components, allowing for product management and administrative tasks.
- **src/app/api**: API calls and server-side actions.
- **src/components**: Reusable UI components.
- **src/constants**: Global constants used across the project.
- **src/lib**: Utility functions and libraries.
- **src/types**: TypeScript type definitions.
- **src/utils**: Common utility functions.

## Installation and Setup

To set up the project locally, you need to have Node.js and npm (or yarn) installed.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/StrombergT/AirPodsMax-commerce.git
   ```

2. Navigate to the project directory

   ```bash
   cd AirPodsMax-commerce
   ```

3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Enviroment variables

Set up the environment variables in a `.env file`:

```
DATABASE_URL
NEXTAUTH_SECRET
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
NEXT_PUBLIC_API_BASE_URL
```

### Run the Development Server

```bash
- npm run dev
# or
- yarn dev
```

## Usage

- Setup is done, your browser will be navigated to `http://localhost:3000`

## Deployment

### Vercel

The project is deployed on Vercel. If you don't have an account on vercel follow this.

- Sign in to [Vercel](https://vercel.com/) or create an account.
- Install the Vercel CLI:

```bash
 npm install -g vercel
```

- Run the deployment command in project directory:

```bash
 vercel
```

- Follow the promps to link your project and configure deployment settings.
- Setup the necessary eniroment variables in Vercel Dashboard

## Contact

For any questions, please contact [StrombergT](https://github.com/StrombergT)
