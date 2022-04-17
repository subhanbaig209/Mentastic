<h1>Inspiration:</h1>

Students and people in the workforce have been under a lot of pressure over the last couple of years due to the pandemic, and with spring coming to and end for many schools across the US, students are under a lot of pressure to end the year strong. Allowing to manage that stress is an important part of their health that shouldn't be neglected.

<h1>What it does:</h1>

The user first signs in to the app or creates an account if it is their first time using it. After signing in or creating an account, the Twilio API sends you a confirmation email. Then, the app sends you to the main page, which is the dashboard. Our app provides a comprehensive dashboard and UI to track an individuals mental health by providing graphs, resources, and a chatbot to help them manage their stress and keep track of their health. The dashboard-like UI allows for easy navigation and customization.

<h1>How we built it:</h1>

Our app was built using a MERN stack, using MongoDB, Express, React, and Node.JS to create a fully functional web app. We used libraries such as Chart.js and Reach Router to allow for an interactive experience for the user.

<h1>Challenges we ran into:</h1>

The chatbot implementation was difficult to create, since we had to make it dynamic in order for the bot to answer anything that the user inputs. We also had trouble sending an email to the user after they registered an account to our website, due to never using the Twilio API before. We also had to research a good prototype for the dashboard page, since we made it out of scratch.

<h1>Accomplishments that we're proud of:</h1>

The UI, interactivity and user flow that our app provides is something we're proud of. Additionally, we got the Twilio Email API to work, which sends an email to the user when they register for an account. We also included a backend for our app, where we created REST APIs for login/signup functionality.

<h1>What we learned:</h1>

We learned how to create a dynamic user interface with React libraries such as Chart.js and Bootstrap. We also learned how to create a chatbot dynamically and provide confirmation messages via Twilio.

<h1>What's next for Mentastic:</h1>

We plan to make the dashboard much more customizable for user experience. This includes adding more metrics, resources, and add more services for the user. We also plan to implement the Twilio SMS API with the chatbot we created so that the user can speak to a mental health professional on their phone. We are also planning to create predictive models in our insights page so that we can better help our users plan out their day.

<h1> How to Run </h1>
<ol>
<li> clone the repository </li>
<li> cd chatbot and npm i </li>
<li> cd backend and npm i </li>
  <li> npm start </li>
</ol>
