<template>
    <div>
      <transition name="fade">
        <app-loader v-if="!isLoaded"></app-loader>
      </transition>
      <app-jumbotron></app-jumbotron>
      <app-countdown></app-countdown>
      <app-profile></app-profile>
      <app-our-story></app-our-story>
    </div>
</template>
<script>
import AppCountdown from './Countdown.vue'
import AppJumbotron from './Jumbotron.vue'
import AppLoader from './Loader.vue'
import AppOurStory from './OurStory.vue'
import AppProfile from './Profile.vue'
export default {
  components:{
    AppCountdown,
    AppJumbotron,
    AppLoader,
    AppOurStory,
    AppProfile
  },
  data(){
    return {
      isLoaded: false
    }
  },
  methods:{

  },
  mounted(){
    let self = this;
    setTimeout(function(){
      self.isLoaded = true
    },3000)
  }
}
</script>
<style>
  ::-webkit-scrollbar-button {
      background-color: #975a16;
  }
  ::-webkit-scrollbar {
      width: 4px;
  }
  ::-webkit-scrollbar-corner {
      background-color: #975a16;
  }
  ::-webkit-scrollbar-thumb {
      background-color: #f6ad55;
  }
  ::-webkit-scrollbar-track {
      background-color: #975a16;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .font-fredericka{
    font-family: 'Fredericka the Great', cursive;
  }
  .font-georgia{
    font-family: "PT Serif", Georgia, "Times New Roman", Times, serif;
  }
</style>