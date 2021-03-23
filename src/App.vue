<template>
  <div id="app">
    <Nav @showNav="isNavShown = !isNavShown; fixedScrolling();" @home="showHome()" @about="showAbout()" @projects="showProjects()" @contact="showContact()"/>
    <div class="content" :class="{rotated: isNavShown}">
      <Home class="main" :class="{active: home}"/>
      <About class="main" :class="{active: about}"/>
      <Projects class="main" :class="{active: projects}"/>
      <Contact class="main" :class="{active: contact}"/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Home,
    About,
    Projects,
    Contact,
  },
  data() {
    return {
      isNavShown: false,
      home: true,
      about: false,
      projects: false,
      contact: false,
    }
  },
  methods: {
    showHome() {
      this.home = true;
      this.about = false;
      this.projects = false;
      this.contact = false;

      this.isNavShown = false;
    },
    showAbout() {
      this.home = false;
      this.about = true;
      this.projects = false;
      this.contact = false;
      
      this.isNavShown = false;
    },
    showProjects() {
      this.home = false;
      this.about = false;
      this.projects = true;
      this.contact = false;
      
      this.isNavShown = false;
    },
    showContact() {
      this.home = false;
      this.about = false;
      this.projects = false;
      this.contact = true;
      
      this.isNavShown = false;
    },
    fixedScrolling() {
      //if the nav menu is shown then scroll to the top of the page and disabled scrolling, otherwise go back to normal scrolling
      if (this.isNavShown) {
        window.scroll(0,0);
        document.getElementsByTagName('html')[0].style.overflow = "hidden";
        console.log(this.isNavShown)
      } else {
        document.getElementsByTagName('html')[0].style.overflowY = "scroll";
        console.log(this.isNavShown)
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";
* {
  font-family: 'Roboto', sans-serif;
  color: $main-font-color;
}
body,html {
  margin: 0;
  padding: 0;
  max-height: 100vh;
  overflow: hidden;
  background: $menu-color;
  z-index: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
}
.content {
  z-index: 2;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: $body-color;
  padding: 7.5rem 0 0 0;

  overflow-y: scroll;

  transition: 
  transform 500ms ease-in-out,
  height 1000ms linear;
  transform-origin: top left;
  &.rotated {
    transform: rotate(-22deg);
    transition: transform 500ms ease-in-out, height 200ms linear;
    border-left: .25rem solid $navButton-color;
    height: 160vh;
    overflow-x: hidden;
  }

  .main {
    display: none;
    visibility: hidden;
    &.active {
      display: block;
      visibility: visible;
    }
  }
}
</style>
