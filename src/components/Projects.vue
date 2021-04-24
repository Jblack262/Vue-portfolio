<template>
    <div class="container">
        <div class="body">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <h1>My Projects</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="websiteCard">
                            <p>Nintendo Side-scroller</p>
                            <a href="https://jblack262.github.io/group-bootstrap-website/" target="_blank">
                                <img src="@/assets/websiteThumbnails/website1.png">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="websiteCard">
                            <p>Sorting Algorithm</p>
                            <a href="https://nlvya.github.io/sorting-algorithm/" target="_blank">
                                <img src="@/assets/websiteThumbnails/website2.png">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="websiteCard">
                            <p>Model Car Store</p>
                            <a href="https://jblack262.github.io/Car-Website/" target="_blank">
                                <img src="@/assets/websiteThumbnails/website3.png">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="websiteCard">
                            <p>West-MEC Homepage</p>
                            <a href="https://jblack262.github.io/jQuery-WestMec-Page/" target="_blank">
                                <img src="@/assets/websiteThumbnails/website4.png">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="websiteCard">
                            <p>Cheez-it fan page</p>
                            <a href="https://jblack262.github.io/Gallery-Website-Add-on-Project/" target="_blank">
                                <img src="@/assets/websiteThumbnails/website5.png">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="websiteCard">
                            <p>Pool Building Business</p>
                            <a href="https://roswal213.github.io/Unit-Group-Project/" target="_blank">
                                <img src="@/assets/websiteThumbnails/website6.png">
                            </a>
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
                    .websiteCard {
                        p {
                            margin-top: 0;
                        }
                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1180px) {
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
                    .card {
                        font-size: 4vw;
                    }
                }
            }
        }
    }
</style>