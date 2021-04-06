<template>
    <div class="container">
        <div class="body">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <h1 class="title" style="white-space: pre;">
                            <div class="james">
                                <span class="letter">J</span>
                                <span class="letter">a</span>
                                <span class="letter">m</span>
                                <span class="letter">e</span>
                                <span class="letter">s </span>
                            </div>
                            <div class="blackman">
                                <span class="letter">B</span>
                                <span class="letter">l</span>
                                <span class="letter">a</span>
                                <span class="letter">c</span>
                                <span class="letter">k</span>
                                <span class="letter">m</span>
                                <span class="letter">a</span>
                                <span class="letter">n</span>
                            </div>
                            
                        </h1>
                        <h3>Front-End UI UX Developer</h3>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <ul class="list">
                            <li><p @click="$emit('about')">About</p></li>
                            <li><p @click="$emit('projects')">Projects</p></li>
                            <li><p @click="$emit('contact')">Contact</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="about">
                            <div class="img">
                                <img src="@/assets/me.png" alt="James Blackman">
                            </div>
                            <p><span style="padding-left: 4rem;">Hi</span> my name is James Blackman, I have been coding since I was 10 years old. I love to make beautiful looking websites and would love to make you one too!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="resume">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .body {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        padding-block: 2rem;
        background: $body-color;
        .row {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-bottom: 1rem;
            &:first-child {
                margin-top: auto;
            }
            &:last-child {
                margin-bottom: auto;
            }
            .col {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-inline: 0.5rem;
                &:first-child {
                    margin-left: 1rem;
                }
                &:last-child {
                    margin-right: 1rem;
                }
                .card {
                    font-size: 2rem;
                    line-height: 1;
                    background: $card-color;
                    width: 100%;
                    height: 100%;
                    padding: 2rem 0;
                    border-radius: 0.25rem;
                    
                    text-shadow: 5px 5px 7.5px rgba(0, 0, 0, .9);
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.8);
                    .list {        
                        list-style: none;
                        padding: 0;
                        height: 100%;
                        margin: 0;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        li {
                            font-weight: bold;
                            text-shadow: 5px 5px 7.5px rgba(0, 0, 0, .9);
                            line-height: 1.75;
                            display: flex;
                            justify-content: center;
                            p {
                                padding: 0;
                                margin: 0;
                                cursor: pointer;
                                transition: 
                                transform 150ms ease-in-out,
                                text-shadow 150ms ease-in-out;
                                &:hover {
                                    transform: translate(-2.5px, -2.5px);
                                    text-shadow: 7.5px 7.5px 7.5px rgba(0, 0, 0, .8);
                                }
                            }
                        }
                    }
                    .title {
                        cursor: default;
                        display: flex;
                        justify-content: center;
                        .letter {
                            position: relative;
                            transition: color 2000ms linear;
                            &:hover {
                                transition: filter 0ms linear;
                                color: $menu-color;
                            }
                        }
                    }
                    .about {
                        display: flex;
                        padding: 2rem;
                        align-items: center;
                        p {
                            padding: 0 2rem;
                            line-height: 1.5;
                            text-align: left;
                        }
                        .img {
                            img {
                                border-radius: 50%;
                                width: 15rem;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1080px) {
        .body {
            flex-direction: column;
            height: 100%;
            padding-top: 8rem;
            .row {
                flex-direction: column;
                height: 100%;
                margin-inline: 1rem;
                margin-bottom: 0;
                .col {
                    flex-direction: row;
                    width: 100%;
                    margin-inline: 0rem;
                    &:first-child {
                        margin-left: 0rem;
                    }
                    &:last-child {
                        margin-right: 0rem;
                    }
                    margin-block: 1rem;
                    .card .title {
                        font-size: 3rem;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1600px) {
        .about {
            flex-direction: column;
        }
    }
    @media screen and (max-width: 768px) {
        .card .about {
            padding: 2rem 0;
            font-size: 90%;
        }
    }
    @media screen and (max-width: 440px) {
        .title {
            flex-direction: column;
        }
        .list {
            flex-direction: column;
        }
    }
</style>