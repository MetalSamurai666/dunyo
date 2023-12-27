<script setup>
</script>

<template>
    <NuxtLayout name="alt-header">
        <div class="search">
            <SearchBox />
        </div>
    </NuxtLayout>
</template>

<style lang="scss">
    .search{
        padding-top: 157px;

        @media (max-width: 500px) {
            padding-top: 92px;
        }
    }
</style>