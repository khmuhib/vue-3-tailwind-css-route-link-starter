<template>
  <div class="">
    <div class="container bg-slate-500">
        <div class="">
            <SectionOneComponent></SectionOneComponent>
            <div class="bg-green-500 h-[400px] relative w-[700px] m-auto">
                <p
                    class="py-5 bg-red-400 rounded-full w-[200px] h-[200px] p-[50px] absolute top-0 left-0 right-0 bottom-0 m-auto">
                </p>
            </div>
        </div>


        <div class="container text-center py-5">
            <div class="row">
                <div class="col-md-4 col-12 py-5 bg-green-500">
                    Column
                </div>
                <div class="col-md-4 col-12 py-5 bg-yellow-500">
                    Column
                </div>
                <div class="col-md-4 col-12 py-5 bg-pink-500">
                    Column
                </div>
            </div>
        </div>
    </div>

    <div class="container py-10">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-y-3 gap-x-3">
            <HomeCardComponent></HomeCardComponent>
            <HomeCardComponent></HomeCardComponent>
            <HomeCardComponent></HomeCardComponent>
        </div>
    </div>

    
  </div>
</template>

<script>
import HomeCardComponent from '../components/Home/HomeCardComponent.vue';
import SectionOneComponent from '../components/Home/SectionOneComponent.vue';
import TextComponentVue from '../components/TextComponent.vue';
export default {
  components: {
    TextComponentVue,
    SectionOneComponent,
    HomeCardComponent
  }

}
</script>

<style>

</style>