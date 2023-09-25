<script setup>

</script>

<template>
    <div class="old">
        <div class="container">
            <div class="old__box">
                <a class="old__link" href="https://old.dunyo.info" target="_blank">{{ $t('old') }}</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/main.scss';

    .old{
        background-color: $colorLightBlue;
        &__box{
            padding: 10px 0px;
            text-align: center;
        }
        &__link{
            color: #fff;
        }
    }
</style>