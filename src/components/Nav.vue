<template>
    <div class="nav">
        <nav class="nav-button">
            <div class="container">
                <i @click="showMenu()" class="fa fa-plus fa-3x" :class="{navShown: showNav}"></i>
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
    .nav-button {
        z-index: 3;
        width: 15rem;
        height: 15rem;
        background: $navButton-color;
        position: fixed;
        border-radius: 50%;
        left: -7.5rem;
        top: -7.5rem;
        .container {
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
                transition: transform 500ms ease-in-out;
                &.navShown {
                    transform: rotate(-45deg);
                }
            }
        }
    }
    .menu {
        z-index: 1;
        transition: opacity 850ms ease-in-out;
        &.showMenu {
            z-index: -1;
            transition: opacity 300ms ease-in-out;
            opacity: 0;
        }
        z-index: 2;
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
                        border-block: .25rem solid rgba(0,0,0,0.3);

                        transition: transform 500ms ease-in-out;
                        transform-origin: right;
                        transform: scaleX(0);
                    }
                    &:hover::after {
                        transform-origin: left;
                        transform: scaleX(1);
                    }
               }               
           }
        }
        
    }
</style>