<template>
  <div class="text-white wrapper">
    <h1 class="about-me span-about">About Me</h1>
    <div class="intro">
      <p class="text-center text-description leading-relaxed">Matías Cabrejos</p>
      <img
        src="images/profilepic2.jpg"
        class="rounded-xl mx-auto my-2 object-scale-down w-60"
        alt=""
      />
      <div class="text-center text-description">
        <p class="span-about leading-relaxed">Vue Developer</p>
        <p class="leading-relaxed">Location: Buenos Aires, Argentina</p>
        <p class="leading-relaxed">Languages: English, Spanish</p>
        <div class="w-full mb-4"></div>
        <div class="bg-line"></div>
      </div>
      <h1 class="text-title">Hi there! Let me introduce myself</h1>
      <div class="text-description">
        <p class="leading-relaxed">
          I'm Matías Cabrejos, a Front-End Developer who is passionate about
          programming and especially of VueJS.
        </p>
        <p class="leading-relaxed">
          I'm always curious about new skills, tools, and concepts. This gets me
          to being constantly learning about new technologies.
        </p>
        <p class="leading-relaxed">
          I strongly believe that being a good developer is more than just
          knowing how to write code. So I've learned about soft skills like
          Communication, Flexibility, TeamWork and Self-Confidence in order to
          become a well rounded developer.
        </p>
        <p class="leading-relaxed">
          I've learned english since I was a kid. I can speak and write english
          fluently.
        </p>
        <p class="leading-relaxed">
          Besides coding, I enjoy playing football and running. I'm also really
          interested into the crypto world and economics.
        </p>
        <p class="leading-relaxed">
          I'm looking forward to new challenges. I'm open minded about learning
          a new tech stack if needed.
        </p>
        <p class="leading-relaxed">
          I'm currently available for freelance projects or full-time work. If
          you're interested in working with me, please get in touch using one of
          the methods below.
        </p>
      </div>
    </div>
    <div class="text-description">
      <h1 class="text-title">What I Do Well</h1>
      <p class="leading-relaxed">
        Tech Stack: HTML, CSS, Sass, Tailwind CSS, JavaScript, VueJS, NuxtJS.
      </p>
      <p class="leading-relaxed">
        Deployment: Firebase, Netlify, Heroku, Vercel.
      </p>
      <p class="leading-relaxed">
        Soft Skills: Communication, Flexibility, TeamWork, Self-Confidence.
      </p>
    </div>
    <div class="text-description">
      <h1 class="text-title">Get In Touch</h1>
      <p class="leading-relaxed">Feel free to:</p>
      <ul>
        <li class="leading-relaxed">
          DM me on
          <a
            href="https://www.linkedin.com/in/matias-ignacio-cabrejos-103a83220/"
            >Linkedin ⚡.</a
          >
        </li>
        <li class="leading-relaxed">
          📧 me at
          <a href="mailto:cabrejosmts@gmail.com">cabrejosmts@gmail.com.</a>
        </li>
      </ul>
    </div>
    <div class="text-description">
      <h1 class="text-title">What's Next?</h1>
      <p class="leading-relaxed">
        Every day I code in order to get better about the skills I currently
        have.
      </p>
      <p class="leading-relaxed">
        Right now I'm learning about Back-End development using technologies as
        NodeJS, ExpressJS and Databases as SQL, MongoDB.
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply max-w-screen-xl lg:mx-auto mx-2 my-4 text-center lg:text-left md:text-left;
}

.text-title {
  @apply py-4 text-base font-semibold;
  color: #17b5cb;
}

.text-description {
  @apply text-base font-semibold text-white;
}

.bg-line {
  @apply h-1 mx-auto w-60 my-0 py-0 rounded-t animate-pulse;
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

a:hover {
  color: #17b5cb;
}
</style>
