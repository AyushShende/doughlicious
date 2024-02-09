# Doughlicious - Full Stack Pizza Ordering Application

## Overview

Doughlicious is a full stack pizza ordering application for a pizzeria, leveraging the latest technologies to provide a seamless and delightful user experience. The application is built using Next.js (v14 with server actions).

Visit the deployed application on Vercel: [Doughlicious](https://doughlicious.vercel.app/).

## Features

1. User Authentication: NextAuth handles user authentication, ensuring secure and personalized experiences.

2. Pizza Ordering: Users can explore a diverse menu, customize their orders, and seamlessly place them.

3. Real-Time Order Updates: Supabase enables real-time order updates, allowing customers to track order status.

4. Secure Payment Integration: Stripe is integrated for secure and reliable online payments.

5. Responsive Design with Tailwind: Tailwind CSS ensures a responsive and visually appealing design.

6. Robust Validation with Zod: Zod is employed for robust data validation, enhancing overall reliability.

## Tech Stack

- Next.js v14
- React
- Tailwind CSS
- Prisma
- PostgreSQL (hosted on Supabase)
- Supabase (Real-time updates)
- NextAuth (Authentication)
- Stripe (Payment Integration)
- TypeScript
- Zod (Validation)

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**

```
git clone https://github.com/AyushShende/doughlicious.git
```

2. **Install dependencies:**

```
cd doughlicious
npm install
```

3. **Add environment variable:**

create a `.env` file in your root dir and define the variables as shown in example env file.

4. **Run the application:**

```
npm run dev
```

Visit http://localhost:3000 in your browser.

## Deployment

The application is deployed on Vercel. For deployment instructions and additional details, refer to the official Vercel documentation.
