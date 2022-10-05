<template>
  <ParentLayout>
    <template #page-bottom>
      <CustomFooter />
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import CustomFooter from './CustomFooter.vue';
</script>

<style lang="css">
:root {
  --c-palette-dark: #07070a;
  --c-palette-light: #fffff3;
  /* don't forget to replace the hex code project wide
  and regenerate the icons :-)
  if you change --c-palette-1
  */
  --c-palette-1: #18a558;
  --c-palette-2: #a3ebb1;
  --c-palette-3: #21b6a8;
  --c-palette-4: #116530;
  --c-brand: var(--c-palette-1);
  --c-brand-light: var(--c-palette-2);
  --c-bg: var(--c-palette-light);
  --c-bg-dark: var(--c-palette-dark);
  --c-bg-light: var(--c-bg);
  --c-bg-lighter: var(--c-bg);
  --c-bg-navbar: var(--c-bg);
  --c-bg-sidebar: var(--c-bg);
  --c-bg-arrow: #cccccc;
  --c-text: var(--c-palette-dark);
  --c-text-hover-brightness: 0.9;
  --c-text-accent: var(--c-brand);
  --c-text-light: var(--c-text);
  --c-text-lighter: var(--c-text);
  --c-text-lightest: var(--c-text);
  --c-text-quote: var(--c-palette-4);
  --c-border: var(--c-palette-2);
  --c-border-dark: var(--c-palette-4);
  --c-tip: var(--c-brand);
  --c-tip-bg: var(--c-palette-2);
  --c-tip-title: var(--c-text);
  --c-tip-text: var(--c-text);
  --c-tip-text-accent: var(--c-text-accent);
  --c-warning: #e7c000;
  --c-warning-bg: #fffae3;
  --c-warning-title: #ad9000;
  --c-warning-text: #746000;
  --c-warning-text-accent: var(--c-text);
  --c-danger: #cc0000;
  --c-danger-bg: #ffe0e0;
  --c-danger-title: #990000;
  --c-danger-text: #660000;
  --c-danger-text-accent: var(--c-text);
  --c-details-bg: #eeeeee;
  --c-badge-tip: var(--c-tip);
  --c-badge-warning: var(--c-warning);
  --c-badge-danger: var(--c-danger);
  --t-color: 0.3s ease;
  --t-transform: 0.3s ease;
  --code-bg-color: var(--c-palette-dark);
  --code-hl-bg-color: rgba(0, 0, 0, 0.66);
  --code-ln-color: var(--c-palette-light);
  --code-ln-wrapper-width: 3.5rem;
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --font-family-code: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  --navbar-height: 3.6rem;
  --navbar-padding-v: 0.7rem;
  --navbar-padding-h: 1.5rem;
  --sidebar-width: 20rem;
  --sidebar-width-mobile: calc(var(--sidebar-width) * 0.82);
  --content-width: 46.25em;
  --homepage-width: 60em;
  /* font-size */
  --text-size: 1.1rem;
  --h1: calc(var(--text-size) * 1.8);
  --h2: calc(var(--text-size) * 1.5);
  --h3: calc(var(--text-size) * 1.3);
  --h4: calc(var(--text-size) * 1.15);
  --h5: calc(var(--text-size) * 1.05);
  /*hover and focus*/
  --scale-start: 1;
  --scale-end: 1.02;
  --scale-time: 250ms;
  --interact-pd: 0em;
  --interact-bd-rad: 0.25em;
}

html.dark {
  --c-bg: var(--c-palette-dark);
  --c-bg-light: var(--c-palette-light);
  --c-bg-lighter: var(--c-bg-light);
  --c-text: var(--c-palette-light);
  --c-text-dark: var(--c-palette-dark);
  --c-text-hover-brightness: 1.4;
  --c-text-light: var(--c-text);
  --c-text-lighter: var(--c-text);
  --c-text-lightest: var(--c-text);
  --c-tip: var(--c-brand);
  --c-tip-text: var(--c-bg-dark);
  --c-tip-title: var(--c-tip-text);
  --c-tip-text-accent: var(--c-text-accent);
  --c-warning: #f8ca00;
  --c-warning-bg: #7e755b;
  --c-warning-title: #f8ca00;
  --c-warning-text: #362e00;
  --c-danger: #940000;
  --c-danger-bg: #806161;
  --c-danger-title: #610000;
  --c-danger-text: #3a0000;
  --c-details-bg: #323843;
  --code-hl-bg-color: #363b46;
}

/* Typo*/
h1,
h2,
h3,
h4,
h5 {
  color: var(--c-brand);
}
h1 {
  font-size: var(--h1);
  text-align: center;
}
h2 {
  font-size: var(--h2);
}
h3 {
  font-size: var(--h3);
}
h4 {
  font-size: var(--h4);
}
h5 {
  font-size: var(--h5);
}
hr {
  margin: 2em auto;
  width: 10em;
  height: 2px;
}
a,
button {
  transform: scale(var(--scale-start));
  transition: transform var(--scale-time);
  display: inline-block;
}
a:hover,
button:hover,
a:focus,
button:focus,
a:hover .navbar .site-name,
a:focus .navbar .site-name {
  transform: scale(var(--scale-end));
}

a:hover,
a:focus {
  border-radius: 0 var(--interact-bd-rad) 0 var(--interact-bd-rad);
}
.dropdown-wrapper .nav-dropdown .dropdown-item a:hover,
a:hover .navbar .site-name,
a:hover {
  filter: brightness(var(--c-text-hover-brightness));
  padding: 2px;
}
.dropdown-wrapper .nav-dropdown .dropdown-item a:focus,
a:focus .navbar .site-name,
a:focus {
  border: 2px dashed var(--c-brand-light);
}

.dark code {
  color: var(--c-text-dark);
}

/* Layout */
.post {
  margin: 1em 0;
  padding: 1.25em 1em;
  border-radius: 8px;
  border: 1px solid var(--c-brand-light);
}

.post h2 {
  margin-top: 0;
}

.theme-default-content .post h2 {
  padding-top: 0.25rem;
}

.post p {
  color: var(--c-text);
}

.article img,
.post a {
  width: 100%;
}

.theme-default-content:not(.custom) img {
  width: 100%;
}

.image-cropped-wrapper {
  max-height: 5em;
  overflow: hidden;
}
@media (min-width: 36em) {
  .image-cropped-wrapper {
    max-height: 12em;
  }
  .image-cropped-wrapper img {
    width: 100%;
  }
}

html.dark tr:nth-child(2n) {
  background-color: var(--c-bg-dark);
}

iframe.contact-form {
  height: 50em;
}
iframe.newsletter-embed {
  width: 100%;
  height: 17.5em;
}
</style>
