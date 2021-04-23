<template>
    <div class="container">
        <div class="body">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <ul>
                            <li>https://jblack262.github.io/group-bootstrap-website/</li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <ul>
                            <li>https://nlvya.github.io/sorting-algorithm/</li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <ul>
                            <li>https://jblack262.github.io/Car-Website/</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <ul>
                            <li>https://jblack262.github.io/jQuery-WestMec-Page/</li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <ul>
                            <li>https://jblack262.github.io/Gallery-Website-Add-on-Project/</li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <ul>
                            <li>https://roswal213.github.io/Unit-Group-Project/</li>
                        </ul>
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
                }
            }
        }
    }
    @media screen and (max-width: 1530px) {
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
                }
            }
        }
    }
</style>