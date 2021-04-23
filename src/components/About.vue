<template>
    <div class="container">
        <div class="body">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="header">
                            <img src="@/assets/me.png" class="meImg">
                            <div class="personalInfo">
                                <h4>JD Blackman</h4>
                                <h4>JBlack262@west-mec.org</h4>
                                <h4>123-456-7890</h4>
                            </div>
                        </div>
                        <p class="description">Dedicated, Efficient, first year Coding student who is able to work quickly and able to think critically, seeking the position of Front-End UI/UX Developer.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <ul class="education">
                            <div>
                                <h3>West-MEC Coding Program</h3>
                                <div class="info">
                                    <p>Phoenix, AZ</p>
                                    <p>Expected Grad Date: May, 2022</p>
                                    <p>GPA: 4.0</p>
                                </div>
                                <p>This two-year interactive program prepares students for a career as a software developer. The program teaches students how to design and develop software, build apps for phones, tablets, websites, and write and test computer code.</p>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <ul class="education">
                            <div>
                                <h3>Ironwood High School</h3>
                                <div class="info">
                                    <p>Glendale, AZ</p>
                                    <p>Expected Grad Date: May, 2022</p>
                                    <p>GPA: 3.5</p>
                                </div>
                                <p>I excelled in mathematics and science, took computer science classes as well as 3 Engineering courses. </p>
                                <p></p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <ul class="skills">
                            <li>Able to implement the steps in the System Development Life Cycle (e.g. planning, analysis, design, developments, testing, implementation, maintenance)</li>
                            <li>Ability to develop program requirements/specifications and a testing plan (e.g. user stories, automated testing, test procedures)</li>
                            <li>Understands the process of decomposing a large programming problem into smaller, more manageable procedures</li>
                            <li>Knowledge of problem-solving and troubleshooting strategies applicable to software development</li>
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
                    .education {
                        padding: 0;
                        div {
                            .info {
                                display: flex;
                                justify-content: space-around;
                            }
                            p {
                                text-align: left;
                                font-size: 1.75rem;
                                margin: 1rem;
                            }
                        }
                    }
                    .header {
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        .meImg {
                            width: 10rem;
                            height: 10rem;
                            border-radius: 50%;
                            margin: 1rem;
                        }
                        .personalInfo {
                            h4 {
                                margin: 1.5rem 1rem;
                            }
                        }
                    }
                    .description {
                        margin: 0 10vw;
                        font-size: 1.75rem;
                    }
                    .skills {
                        text-align: left;
                        li {
                            margin: .75rem 0;
                            font-size: 1.5rem;
                        }
                    }
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
    @media screen and (max-width: 460px) {
        .info {
            flex-direction: column;
        }
        .header {
            flex-direction: column;
        }
    }
</style>