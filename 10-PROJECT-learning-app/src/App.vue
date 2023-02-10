<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

:root {
  --orange: #f0932b;
  --orange-light: #f5d5ae;
  --orange-light-2: #fff2e1;
  --gray: #cacaca;
  --gray-2: #a5a5a5;
  --gray-3: #8a8a8a;
  --color-light: white;
  --color-dark: black;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Work Sans', sans-serif;
  font-size: 62.5%;
  overflow-y: overlay;
}

body {
  background: var(--gray);
  font-size: 1.6rem;
}

ion-icon {
  font-size: 24px;
  display: block;
}

.row {
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1.6rem;
}

header {
  text-align: center;
  margin-top: 1.6rem;
}
header h1 {
  display: block;
  font-size: 3rem;
  font-family: 'Permanent Marker', cursive;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 2px solid var(--gray);
  padding: 0.5em;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--orange-light);
  background: var(--orange-light-2);
}

.form-control {
  margin: 1rem 0 1.6rem;
}

li {
  margin: 2.4rem auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
}

h3 {
  font-size: 2.4rem;
  font-family: 'Permanent Marker', cursive;
}

p {
  margin-bottom: 1em;
}
nav {
  position: relative;
}

a {
  text-decoration: none;
  color: inherit;
  padding: 0.2em 0.3em;
  position: relative;
  display: inline-flex;
  align-items: center;
  /* overflow: hidden; */
}

a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 98%;
  background: var(--orange-light);
  z-index: -1;
  transition: 250ms cubic-bezier(0.61, 0.92, 0.72, 1.28);
  transform: scaleY(0.4);
  transform-origin: bottom;
}

a:hover::before,
a:hover::before {
  transform: scaleY(1.01);
}

a > ion-icon {
  font-size: 0.9em;
  margin-left: 0.8rem;
}

ul {
  list-style: none;
}

.tabs {
  margin: 2.4rem 0;
}

.tabs > article {
  display: flex;
  justify-content: space-between;
}
</style>