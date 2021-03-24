<template>
  <div id="app">
    <Nav @showNav="isNavShown = !isNavShown; fixedScrolling();" @home="showHome()" @about="showAbout()" @projects="showProjects()" @contact="showContact()"/>
    <div class="content" :class="{rotated: isNavShown}">
      <Home class="main" :class="[home ? 'active' : 'inactive']" @about="showAbout()" @projects="showProjects()" @contact="showContact()"/>
      <About class="main" :class="[about ? 'active' : 'inactive']"/>
      <Projects class="main" :class="[projects ? 'active' : 'inactive']"/>
      <Contact class="main" :class="[contact ? 'active' : 'inactive']"/>
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
      } else {
        document.getElementsByTagName('html')[0].style.overflowY = "";
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
  overflow-y:auto;
  overflow-x: hidden;

  transition: 
  transform 500ms ease-in-out,
  height 2000ms linear;
  transform-origin: top left;
  &.rotated {
    transform: rotate(-22deg);
    transition: transform 500ms ease-in-out, height 200ms linear;
    height: 200vh;
    overflow-x: hidden;
  }

  .main {
    position: absolute;
    width: 100vw;
    transform-origin: left;
    transition: opacity 500ms ease-in-out;
    &.active {
      opacity: 1;
      transform-origin: right;
    }
    &.inactive {
      opacity: 0;
    }
  }
}
</style>
