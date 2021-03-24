<template>
    <div class="container">
        <div class="body">
            <div class="col title">
                <div class="card">
                    <h1 style="white-space: pre;">
                        <span class="letter">J</span>
                        <span class="letter">a</span>
                        <span class="letter">m</span>
                        <span class="letter">e</span>
                        <span class="letter">s </span>
                        <span class="letter">B</span>
                        <span class="letter">l</span>
                        <span class="letter">a</span>
                        <span class="letter">c</span>
                        <span class="letter">k</span>
                        <span class="letter">m</span>
                        <span class="letter">a</span>
                        <span class="letter">n</span>
                    </h1>
                    <h3>Font-End UI UX Developer</h3>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <ul class="list">
                        <li>About Me</li>
                        <li>See My Projects</li>
                        <li>Get In Contact</li>
                    </ul>
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
        display: flex;
        flex-direction: row;
        place-items: center;
        height: 100%;
        overflow: hidden;
        
        .col {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;    

            font-size: 1.4rem;
            .card {
                line-height: 1;
                background: $body-accent;
                padding: 3rem 0;
                width: 95%;
                border-radius: 0.25rem;


                text-shadow: .5rem .5rem 5px rgba(0, 0, 0, 0.175);

                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                .list {
                    list-style-type: none;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                    line-height: 1.5;
                    li {
                        cursor: pointer;
                        transition: 
                        transform 150ms ease-in-out,
                        text-shadow 150ms ease-in-out;
                        &:hover {

                            text-shadow: .75rem .75rem 5px rgba(0, 0, 0, 0.1);
                            transform: translate(-.25rem, -.25rem);
                        }
                    }
                }
                .letter {
                    position: relative;
                    transition: filter 2000ms linear;
                    &:hover {
                        transition: filter 0ms linear;
                        filter: brightness(1.75);                        cursor: default;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        .body {
            flex-direction: column;
        }
        .card {
            margin-block: 1rem;
            &:first-child {
                margin-top: 0.5rem;
            }
            padding: 0;
        }
    }
</style>