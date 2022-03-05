<template>
  <div class="text-white wrapper">
    <h1 class="about-me">About <span class="span-about">Me</span></h1>
    <div class="w-full mb-4">
      <div class="bg-line"></div>
    </div>
    <div class="intro">
      <img src="images/faker.jpg" class="rounded-xl mx-auto my-2" alt="" />
      <h1 class="text-title">Hi there! Let me introduce myself</h1>
      <div class="text-description">
        <p>
          I'm Matías Cabrejos, a Front-End Developer who is passionate about
          programming and especially of VueJS.
        </p>
        <p>I’m always curious about new skills, tools, and concepts.</p>
        <p>
          I'm constantly learning about technologies, scrum and improving my
          soft skills
        </p>
        <p>
          Besides coding I've learned about soft skills like Communication,
          Flexibility, TeamWork and Self-Confidence in order to become a well
          rounded developer.
        </p>
        <p>
          Besides coding, I enjoy playing football and running. I'm also really
          interested into the crypto world and economics.
        </p>
        <p>
          In my free time when i'm not coding, I enjoy playing football and
          running, I'm also really enthusiastic about the crypto world and
          economics
        </p>
        <p>I’m looking forward to new challenges</p>
        <p>Full availability</p>
        <p>
          I'm currently available for freelance projects or full-time work. If
          you're interested in working with me, please get in touch using one of
          the methods below.
        </p>
      </div>
    </div>
    <div class="fill text-base font-semibold">
      <p>Location: Buenos Aires, Argentina</p>
      <p>Languages: English, Spanish</p>
      <p>Email: matias.cabrejos@hotmail.com</p>
    </div>
    <div class="what">
      <h1 class="text-title">What I Do Well</h1>
      <p>
        Tech Stack: HTML, CSS, Sass, Tailwind CSS, JavaScript, VueJS, NuxtJS
      </p>
      <p>Deployment: Firebase, Netlify, Heroku</p>
      <p>Soft Skills: Communication, Flexibility, TeamWork, Self-Confidence</p>
    </div>
    <div class="touch">
      <h1 class="text-title">Get In Touch</h1>
      <p>Feel free to:</p>
      <ul>
        <li>DM me on Linkedin ⚡</li>
        <li>📧 me at <a href="mailto:matias.cabrejos@gmail.com">matias.cabrejos@gmail.com</a> matias.cabrejos@gmail.com</li>
      </ul>
    </div>
    <div>
      <h1 class="text-title">What's Next?</h1>
      <p>
        Every day I code in order to get better about the skills I currently
        have.
      </p>
      <p>
        Right now I'm learning about Back-End using technologies as NodeJS,
        ExpressJS. As well as databases as SQL, MongoDB.
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply max-w-screen-xl lg:mx-auto mx-2 my-4;
}

.text-title {
  @apply py-4 text-base font-semibold;
  color: #17b5cb;
}

.text-description {
  @apply text-base font-semibold text-white;
}

.bg-line {
  @apply h-1 mx-auto w-64 my-0 py-0 rounded-t animate-pulse;
  background-color: #17b5cb;
}

ul {
  list-style: none; /* Remove default bullets */
}

ul li::before {
  @apply animate-pulse;
  content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #17b5cb; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: 1em; /* Also needed for space (tweak if needed) */
}

.about-me {
  @apply font-bold text-2xl md:text-3xl lg:text-4xl text-white text-center my-2;
}

.span-about {
  color: #17b5cb;
}
</style>
