<template>
<div id="wrapper">
  <!-- Header -->
  <header id="header">
    <div class="logo">
    </div>
    <div class="content">
      <div class="inner">
        <h1>DevelopAWE</h1>
          <p>Web design, web development, android and IOS Apps and everything else web related.</p>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="#intro">Intro</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main -->
  <div id="main">

    <!-- Intro -->
    <article id="intro">
      <h2 className="major">Intro</h2>
      <!-- eslint-disable-next-line -->
        <p>We are DevelopAWE. AWE stands for App, Web, and Everything. We aim to do everything web or app related for you. We will design and develop your website, host it for you, supply domains and keep your site up to date for you. We can also develop Android and IOS apps to suit your needs if you need an app built. “We will leave you in
          <strong>
            <em>AWE</em>
          </strong>”
        </p>
    </article>

    <!-- Work -->
    <article id="work">
      <h2 class="major">Work</h2>
      <!-- eslint-disable-next-line -->
      <p>Currently we have not finished any sites to display here. Please check back later to see what we have done. If you would like to inquire about having us build a site for you please <a href="#contact">contact</a> us. Thank you.
      </p>
    </article>

    <!-- About -->
    <article id="about">
      <h2 class="major">About</h2>
      <p>
        <!-- eslint-disable-next-line -->
        We are a small web company. We focus on web design and development,along with hosting options and domain purchasing.
      </p>
    </article>

    <!-- Contact -->
    <article id="contact">
      <h2 class="major">Contact</h2>
      <form method="post" action="#">
        <div class="field half first">
          <label for="name">Name</label>
          <input placeholder="Currently Disabled"
          disabled type="text" name="name" id="name" />
        </div>
        <div class="field half">
          <label for="email">Email</label>
          <input placeholder="Currently Disabled" disabled type="text" name="email" id="email" />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea
            placeholder="Currently Disabled"
            disabled name="message"
            id="message"
            rows="4"></textarea>
        </div>
        <ul class="actions">
          <li>
            <input type="submit" value="Send Message" disabled class="special" />
          </li>
          <li>
            <input disabled type="reset" value="Reset" />
          </li>
        </ul>
      </form>
      <ul class="icons">
        <li>
          <a href="#" class="icon fa-twitter">
            <span class="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon fa-facebook">
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon fa-instagram">
            <span class="label">Instagram</span>
            </a>
        </li>
        <li>
          <a href="https://github.com/DevelopAWE" class="icon fa-github" target="_blank">
            <span class="label">GitHub</span>
          </a>
        </li>
      </ul>
    </article>
  </div>
  <!-- Footer -->
  <footer id="footer">
    <p class="copyright">&copy; DevelopAWE 2018</p>
  </footer>
</div>
</template>

<script>
export default {
  name: 'Index',
};
</script>

<style>

</style>
