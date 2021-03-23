<template>
    <div class="nav">
        <nav class="nav-button" :class="{navShown: showNav}">
            <div class="container">
                <i @click="showMenu()" class="material-icons">menu</i>
            </div>
            <div class="container two">
                <i @click="showMenu()" class="fa fa-plus fa-3x x"></i>
            </div>
        </nav>
        <div class="menu" :class="{showMenu: !showNav}">
            <ul>
                <li><p @click="$emit('home'); showNav = false">Home</p></li>
                <li><p @click="$emit('about'); showNav = false">About</p></li>
                <li><p @click="$emit('projects'); showNav = false">Projects</p></li>
                <li><p @click="$emit('contact'); showNav = false">Contact</p></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            showNav: false,
        }
    },
    methods: {
        showMenu() {
            this.showNav = !this.showNav
            this.$emit('showNav')
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.nav {
    width: 100vw;
    height: 100vh;
    position: relative;
    .nav-button {
        z-index: 3;
        width: 15rem;
        height: 15rem;
        background: $navButton-color;
        position: fixed;
        border-radius: 50%;
        left: -7.5rem;
        top: -7.5rem;
        transition: transform 500ms ease-in-out;
        transform-origin: center;
        &.navShown {
            transform: rotate(-90deg);
        }
        .container {
            &.two {
                left: 0;
                i {
                    margin-left: 1.5rem;
                    margin-bottom: 1.5rem;
                    transform: rotate(45deg);
                }
            }
            width: 50%;
            height: 50%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            right: 0;
            bottom: 0;
            i {
                color: $menu-font-color;
                margin-right: 1.5rem;
                margin-bottom: 1.5rem;
                cursor: pointer;
                transform: scale(2);
            }
        }
    }
    .menu {
        z-index: 2;
        transition: left 500ms ease-in-out;
        left: 0rem;
        &.showMenu {
            /*z-index: -1;*/
            left: -10rem;
        }
        position: absolute;
        bottom: 0;
        ul {
           list-style-type: none;
           text-align: left;
           padding: 1rem;
           line-height: 2.25;
           li {
               font-size: 150%;
               p {
                    color: $menu-font-color;
                    cursor: pointer;
                    width: 100vw;
                    &::after {
                        content: '';
                        position: absolute;
                        width: 100vw;
                        height: 3rem;
                        left: 0;
                        border-block: .25rem solid rgba(0,0,0,0.6);

                        transition: transform 800ms ease-in;
                        transform-origin: top right;
                        transform: scaleX(0);
                    }
                    &:hover::after {
                        transform-origin: bottom left;
                        transform: scaleX(1);
                    }
               }               
           }
        }
        
    }
    @media only screen and (max-width: 768px) {
        .menu {
            bottom: 4rem;
        }
    }
}
    
</style>