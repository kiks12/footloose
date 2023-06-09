# Footloose

Footloose is a business between two enthusiastic sneaker heads, it is primarily a shoe retailer business. This website will increase the internet presence of the company, aside from, of course, the facebook marketplace.

# Frameworks and Tools

| Framework     | Version  |
| ------------- | -------- |
| React JS      | 18.2.0   |
| Next JS       | 13.4.4   |
| Prisma (ORM)  | 4.15.0   |
| Tailwind CSS  | 3.3.2    |
| Typescript    | 5.0.4    |
| Framer Motion | 10.12.16 |
| Node JS       | 19.4.0   |
| npm           | 9.2.0    |

# Getting Started

Step 1: Clone the repository [https://github.com/kiks12/footloose](https://github.com/kiks12/footloose)

Step 2: Install Node JS from the internet [https://nodejs.org/en/download](https://nodejs.org/en/download)

Step 2.1: See node version

```jsx
node --version
```

Update if necessary

Step 2.2: See npm version

```jsx
npm --version
```

Step 3: Run the following code on the terminal to install dependencies

```jsx
npm install
```

Step 4: Download Postrgesql and Pgadmin 4 (disregard if already available)

Step 5: Create database called footloose using the Pgadmin 4

refer to this video: [https://www.youtube.com/watch?v=Fb2UHQJMsYQ](https://www.youtube.com/watch?v=Fb2UHQJMsYQ)

Step 6: Using the terminal, run the prisma migration

```jsx
npx prisma migrate dev --name "<name>"
```

Step 7: Change necessary information in the DATABASE_URL in the .env file

```jsx
DATABASE_URL = "postgresql://postgres:francisjames11@localhost:5432/footloose";
DATABASE_URL = "postgresql://username:password@localhost:port/database";
```

Step 8: Seed your database

```jsx
npx prisma db seed
```

Step 9: Run the app in development

```jsx
npm run dev
```
