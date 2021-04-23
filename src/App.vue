<template>
  <div id="app">
    <Nav @showNav="isNavShown = !isNavShown; fixedScrolling();" @home="showHome()" @about="showAbout()" @projects="showProjects()" @contact="showContact()"/>
    <div class="content" :class="{rotated: isNavShown}" v-on:scroll="handleScroll">
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
    handleScroll() {
      const content = document.querySelector('.content');
      if (content.scrollTop != 0) { //if you have scrolled down from the top of the page at all the nav-button will be transparent
        document.getElementById("nav-button").style.opacity = "0.8"
      } else {
        document.getElementById("nav-button").style.opacity = "1"
      }
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.8);
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  background: $menu-color;
  overflow-x: hidden;
  transition: 
  transform 500ms ease-in-out;
  transform-origin: top left;
  overflow-y: auto;
  &.rotated {
    transform: rotate(-22deg);
    overflow-x: hidden;
  }
  .main {
    position: absolute;
    width: 100%;
    transform-origin: left;
    transition: opacity 500ms ease-in-out;
    &.active {
      z-index: 999;
      opacity: 1;
      transform-origin: right;
    }
    &.inactive {
      display: none;
      z-index: -1;
      opacity: 0;
    }
  }
}
</style>