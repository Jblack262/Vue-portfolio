<template>
    <div class="container">
        <div class="body">
            <div class="col title">
                <div class="card">
                    <h1>James Blackman</h1>
                    <h3>Font-End UI UX Developer</h3>
                </div>
                
            </div>
            <div class="col">
                <div class="menu">
                    <div class="triangle one">
                        
                    </div>
                    <div class="row">
                        <div class="triangle two">
                            
                        </div>
                        <div class="triangle three">
                            
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
        display: flex;
        flex-direction: row;
        place-items: center;
        height: 100vh;

        
        .col {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-bottom: 15rem;

            .card {
            font-size: 200%;
            line-height: 1;
            background: #d0c3bd;
            padding: 5rem 10rem;
            transform: skew(20deg);
            h1, h3 {
                transform: skew(-20deg);
            }
            }

            .menu {
                width: 400px;
                height: 400px;
            }

            .row {
                display: flex;
                flex-direction: row;
            }

            .triangle {
                width: 0;
                height: 0;
                position: relative;
                &.one {
                    border-left: 200px solid transparent;
                    border-right: 200px solid transparent;
                    border-top: 150px solid red;
                }
                &.two {
                    border-left: 200px solid transparent;
                    border-right: 200px solid transparent;
                    border-bottom: 150px solid black;
                    transform: rotate(52.5deg);
                }
                &.three {
                    border-left: 200px solid transparent;
                    border-right: 200px solid transparent;
                    border-bottom: 150px solid red;
                    transform: rotate(-60deg);
                }
            }
        }
    }
</style>