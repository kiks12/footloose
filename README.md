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

# Getting Started

Step 1: Clone the repository [https://github.com/kiks12/footloose](https://github.com/kiks12/footloose)

Step 2: Run the following code on the terminal to install dependencies

```jsx
npm install
```

Step 3: Download Postrgesql and Pgadmin 4 (disregard if already available)

Step 4: Create database called footloose using the Pgadmin 4

Step 5: Using the terminal, run the prisma migration

```jsx
npx prisma migrate dev --name <name>
```

Step 6: Change necessary information in the DATABASE_URL in the .env file

```jsx
DATABASE_URL = "postgresql://postgres:francisjames11@localhost:5432/footloose";
DATABASE_URL = "postgresql://username:password@localhost:port/database";
```

Step 7: Seed your database

```jsx
npx prisma db seed
```

Step 8: Run the app in development

```jsx
npm run dev
```
