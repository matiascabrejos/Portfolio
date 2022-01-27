<template>
  <div class="text-white wrapper">
    <h1 class="about-me">About <span class="span-about">Me</span></h1>
    <div class="intro">
      <h1 class="text-title">Hi there! Let me introduce myself</h1>
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
        Besides coding I've learned about soft skills like Communication,
        Flexibility, TeamWork and Self-Confidence in order to become a well rounded developer.
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
    </div>
    <div class="touch">
      <h1 class="text-title">Get In Touch</h1>
      <p>Feel free to:</p>
      <ul>
        <li>DM me on Linkedin ⚡</li>
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

.about-me {
  @apply font-bold text-2xl md:text-3xl lg:text-4xl text-white text-center;
}

.span-about {
  @apply animate-pulse;
  color: #17b5cb;
}
</style>
