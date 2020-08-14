# Frontend Mentor - Intro component with sign up form

![Design preview for the Intro component with sign up form coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this introductory component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design to work to. 

The designs are in JPG static format. This will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. This should help train your eye to perceive differences in spacings and sizes.

If you would like the Sketch file in order to inspect the design in more detail it is available to [purchase here]().

You will find all the required assets in the `/images` folder. The assets are already optimized.

There is also a `style-guide.md` file, which contains the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). This will make it easier to share your code with the community if you need some help. If you're not sure how to do this, [have a read through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a URL. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, but we recommend using [Vercel](https://bit.ly/fem-vercel). We've got more information about deploying your project with Vercel below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes that you could create to make reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.
7. If you'd like to try making your project fully responsive, we'd recommend checking out [Sizzy](https://bit.ly/fm-sizzy). It's a great browser that makes it easy to view your site across multiple devices.

## Deploying your project

As mentioned above, there are a number of ways to host your project for free. We recommend using [Vercel](https://bit.ly/fem-vercel) as it's an amazing service and extremely simple to get set up with. If you'd like to use Vercel, here are some steps to follow to get started:

1. [Sign up to Vercel](https://bit.ly/fem-vercel-signup) and go through the onboarding flow, ensuring your GitHub account is connected by using their [Vercel for GitHub](https://vercel.com/docs/v2/git-integrations/vercel-for-github) integration.
2. Connect your project to Vercel from the ["Import project" page](https://vercel.com/import), using the "From Git Repository" button and selecting the project you want to deploy.
3. Once connected, every time you `git push`, Vercel will create a new [deployment](https://vercel.com/docs/v2/platform/deployments) and the deployment URL will be shown on your [Dashboard](https://vercel.com/dashboard). You will also receive an email for each deployment with the URL.

## Sharing your solution

There are multiple places you can share your solution:

1. Submit it on the platform so that other users will see your solution on the site. Here's our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) to help you do that.
2. Share your solution page in the **#finished-projects** channel of the [Slack community](https://www.frontendmentor.io/slack).
3. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor** including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.

## Giving feedback

Feedback is always welcome, so if you have any to give on this challenge please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀

## Community Sponsors

A massive thank you to our community sponsors!

- [Sizzy](https://bit.ly/fm-sizzy) is an extremely useful browser designed specifically to improve a developer's workflow when building websites. You can fire up multiple device emulators and run them all in sync while building out your web pages. Perfect for helping build fully responsive websites!
- [Diversify Tech](https://bit.ly/fem-diversify-tech) is an amazing resource for underrepresented people in tech. The site features job listings for anyone seeking new opportunities. The resource section is also full of useful links to dive into!
- [Dracula PRO](https://bit.ly/fem-dracula) is a beautiful dark theme to help keep you focused and productive while you code. The theme isn't just for your editor either. You can also apply it to your most-used apps like your terminal and even Slack!
# intro-component








<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- displays site properly based on user's device -->

    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./images/favicon-32x32.png"
    />
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
      rel="stylesheet"
    />

    <title>Frontend Mentor | Base Apparel coming soon page</title>
  </head>
  <body>
    <!--  Email Address -->

    <div class="container">
      <div class="logo">
        <img src="images/logo.svg" alt="Base Apparel Logo" />
      </div>

      <div class="hero-image">
        <img src="images/hero-mobile.jpg" alt="Hero image" />
      </div>

      <div class="content">
        <h2>
          We're <br /><strong
            >coming <br />
            soon</strong
          >
        </h2>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>

        <form action="#" class="form" id="register-form" novalidate>
          <div class="input-form">
            <input type="text" aria-label="Email Address" placeholder="Email Address">
          </div>
          <button type="submit" class="btn-submit" id="btn-submit">E</button>

        </form>
      </div>

      <footer>
        <p class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
            >Frontend Mentor</a
          >. Coded by <a href="#">NI1GHTMARE</a>.
        </p>
      </footer>
    </div>
  </body>
</html>






:root {
  --Desaturated-Red: hsl(0, 36%, 70%);
  --Soft-Red: hsl(0, 93%, 68%);
  --Dark-Grayish-Red: hsl(0, 6%, 24%);
  /* --gradient: 135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%);
  --Gradient2: 135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%); */
}

html,
body {
  margin: 0;
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  background-color: hsl(252, 3%, 32%);
  /* background-image: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%)); */
}

.container {
  display: inherit;
  flex-direction: column;
  flex: 1 0 auto;
  border: 2px solid chartreuse;
}

.logo {
  display: flex;
  padding: 35px 20px 35px 40px;
  background-image: linear-gradient(
    135deg,
    hsl(0, 0%, 100%),
    hsl(0, 100%, 98%)
  );
  border: 1px solid red;
}

.logo img {
  width: 8rem;
  border: 1px solid fuchsia;
}

.hero-image {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid cyan;
}

.hero-image img {
  max-width: 100%;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--Desaturated-Red);
  padding: 30px;
  border: 1px solid fuchsia;
}

.content h2 {
  font-size: 40px;
  letter-spacing: 13px;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 40px;
  border: 1px solid blue;
}

.content h2 strong {
  color: initial;
}

p {
  text-align: center;
  border: 1px solid blue;
}

.form {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  border: 1px solid red;
}

.input-form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 2px dotted orange;
}

input {
  flex: 2;
  padding: 1.5em 1.5em;
  border-radius: 50px;
  border: 1px solid hsl(0, 36%, 70%);
  background: transparent;
}

input::placeholder {
  color: var(--Desaturated-Red);
}

.btn-submit {
  align-self: flex-end;
  position: absolute;
  height: 4.5em;
  width: 6em;
  margin-left: 0;
  background-image: linear-gradient(
    to right,
    hsl(0, 80%, 86%),
    hsl(0, 74%, 74%)
  );
  border-radius: 50px;
  border: none;
}

footer {
  text-align: center;
  flex-shrink: 0;
  padding: 5px;
  background-color: rgba(185, 182, 211, 0.4);
  border: 1px solid blue;
}

.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  text-decoration: none;
  color: hsl(228, 45%, 44%);
}
