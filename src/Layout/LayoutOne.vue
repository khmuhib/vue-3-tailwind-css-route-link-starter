<template>
    <div class="flex flex-col min-h-screen font-Roboto">
        <Navbar />
        <RouterView />
    </div>
</template>


<script>
import { RouterView } from 'vue-router';
import Navbar from './../../components/Navbar.vue';

export default {
    name: "LayoutOne",
    components: {
        Navbar,
        RouterView
    }

}

</script>

<style scoped>

</style>