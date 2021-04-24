<template>
    <div class="container">
        <div class="body">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <h1>Contacts</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <h4>Socials</h4>
                        <div class="socials">
                            <a href="#"><i class="fa fa-linkedin-square" style="font-size:128px"></i></a>
                            <a href="#"><i class="fa fa-github-square" style="font-size:128px"></i></a>
                            <a href="#"><i class="fa fa-twitter-square" style="font-size:128px"></i></a>
                            <a href="#"><i class="fa fa-facebook-square" style="font-size:128px"></i></a>
                        </div>
                        <h4>Get in contact.</h4>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <h4>Get in contact</h4>
                        <form class="contact-form" @submit="sendEmail">
                            <div class="input">
                                <label>Name:</label>
                                <input type="text" name="user_name" v-model="from_name" required>
                            </div>
                            <div class="input">
                                <label>Email:</label>
                                <input type="email" name="user_email" v-model="reply_to" required>
                            </div>
                            <div class="input">
                                <label>Message:</label>
                            </div>
                            <div class="input">
                                <textarea name="message" v-model="message" required></textarea>
                            </div>
                            <input type="submit" value="Send" @submit="console.log('helloWorld')">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
    data() {
        return {
            message: '',
            reply_to: '',
            from_name: '',
        }
    },
    methods: {
        sendEmail: (e) => {
        emailjs.sendForm('service_tiq404a', 'template_knsskrs', e.target, 'user_6Uq2T5FnmqhSgTyWUcJQw')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
        }
    }
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
                    h4 {
                        margin: 2rem 0;
                    }
                    .contact-form {
                        .input {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            width: 70%;
                            margin: 0.5rem auto;
                        }
                        input {
                            height: 2rem;
                            color: black;
                            width: 15rem;
                            &:focus {
                                outline: none;
                            }
                            border-radius: .5rem;
                            border: none;
                        }
                        textarea {
                            color: black;
                            resize: none;
                            width: 100%;
                            height: 5rem;
                            &:focus {
                                outline: none;
                            }
                            border-radius: .5rem;
                        }
                    }
                    .socials {
                        i {
                            margin: 0 1rem;
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
    @media screen and (max-width: 768px) {
        .input {
            flex-direction: column;
        }
    }
</style>