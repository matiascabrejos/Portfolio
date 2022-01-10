<template>
  <div class="text-white wrapper">
    <div class="intro">
      <h1 class="text-title">Hi there!</h1>
      <p>
        I'm Matías Cabrejos, a Front-End Developer who is passionate about
        programming and especially of VueJS.
      </p>
      <p>I’m always curious about new skills, tools, and concepts.</p>
      <p>
        I'm constantly learning about technologies, scrum and improving my soft
        skills
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
    </div>
    <div class="fill">
      <p>Location: Buenos Aires, Argentina</p>
      <p>Languages: English, Spanish</p>
    </div>
    <div class="what">
      <h1 class="text-title">What I Do Well</h1>
      <p>
        Tech Stack: HTML, CSS, Sass, Tailwind CSS, JavaScript, VueJS, NuxtJS
      </p>
      <p>Deployment: Firebase, Netlify, Heroku</p>
    </div>
    <div class="touch">
      <h1 class="text-title">Get In Touch</h1>
      <p>Feel free to:</p>
      <ul>
        <li>DM me on Twitter ⚡</li>
        <li>📧 me at matias.cabrejos@hotmail.com</li>
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
  @apply max-w-screen-xl mx-auto;
}

.text-title {
  @apply py-4 text-base font-semibold;
  color: #17b5cb;
}

ul {
  list-style: none; /* Remove default bullets */
}

ul li::before {
  content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #17b5cb; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: 1em; /* Also needed for space (tweak if needed) */
}
</style>
