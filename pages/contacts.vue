<script setup></script>

<template>
    <NuxtLayout name="alt-header">
        <div class="contacts page">
            <div class="contacts__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.034696623224!2d69.27720117659723!3d41.30810880090812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b33541b14d3%3A0xc3f1fa43b817208f!2sMinistry%20of%20Foreign%20Affairs!5e0!3m2!1sen!2s!4v1688470067066!5m2!1sen!2s" width="100%" height="520" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="container">
                <div class="contacts__box">
                    <div class="contacts__left">
                        <div class="contacts__title">{{ $t('contact_info') }}</div>

                        <ul class="contacts__list">
                            <li class="item">
                                <div class="item__left">
                                    <img src="@/assets/logo/contacts/location.svg">
                                </div>

                                <div class="item__right">
                                    <a href="https://yandex.com/maps/10335/tashkent/?from=mapframe&ll=69.281754%2C41.308870&mode=usermaps&source=mapframe&um=constructor%3A1fbbb3b70814e6bd5aa8e62ad3354bbe416d5de2e1415e08a4ac8219ec7cd1f1&z=16">{{ $t('address') }}</a>
                                </div>
                            </li>

                            <li class="item">
                                <div class="item__left">
                                    <img src="@/assets/logo/contacts/phone.svg">
                                </div>

                                <div class="item__right">
                                    <a href="tel:+998712391776">+99871-239-17-76</a>
                                </div>
                            </li>

                            <li class="item">
                                <div class="item__left">
                                    <img src="@/assets/logo/contacts/mail.svg">
                                </div>

                                <div class="item__right">
                                    <a href="mailto:jahon@mfa.uz">Dunyo@mfa.uz</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="contacts__right">
                        <div class="contacts__title">{{ $t('feedback') }}</div>

                        <div class="contacts__inputs">
                            <div class="item">
                                <div class="item__top">{{ $t('name') }}</div>

                                <div class="item__bot">
                                    <input type="text">
                                </div>
                            </div>

                            <div class="item">
                                <div class="item__top">{{ $t('email') }}</div>

                                <div class="item__bot">
                                    <input type="email">
                                </div>
                            </div>
                            
                            <div class="item big">
                                <div class="item__top">{{ $t('text') }}</div>

                                <div class="item__bot">
                                    <textarea name="text" cols="30" rows="15"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="contacts__send">
                            <button>{{ $t('send') }}</button>
                        </div>
                    </div>
                </div>
            </div>

            <Sponsors />
        </div>
    </NuxtLayout>
</template>

<style lang="scss">
@import '@/assets/styles/components/contacts.scss';
</style>