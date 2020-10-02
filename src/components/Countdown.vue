<template>
    <section class="w-full bg--pink countdown bg-white min-h-screen flex justify-center items-center">
      <div class="container">
        <h2 class="capitalize font-georgia text-3xl txt-grey">our wedding will be held on</h2>
        <ul class="font-fredericka">
          <li><span ref="days"></span>days</li>
          <li><span ref="hours"></span>Hours</li>
          <li><span ref="minutes"></span>Minutes</li>
          <li><span ref="seconds"></span>Seconds</li>
        </ul>
      </div>
    </section>
</template>
<script>
export default {
  data(){
    return {
      dateOfEvent: 'Jul 07, 2021 00:00:00',
      intervalFunc: ''
    }
  },
  methods:{
    countdown(){
      const self = this,
      second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

      let countDown = new Date(self.dateOfEvent).getTime();
      self.intervalFunc = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        self.$refs.days.innerText = Math.floor(distance / (day)),
        self.$refs.hours.innerText = Math.floor((distance % (day)) / (hour)),
        self.$refs.minutes.innerText = Math.floor((distance % (hour)) / (minute)),
        self.$refs.seconds.innerText = Math.floor((distance % (minute)) / second);

        if (distance < 0) {
         clearInterval(self.intervalFunc);
        }

      }, second)
    }
  },
  mounted(){
    this.countdown();
  },
  beforeDestroy(){
    this.intervalFunc = ''
  }
}
</script>
<style scoped>
  .container {
    color: #ce9999;
    margin: 0 auto;
    padding: 0.5rem;
    text-align: center;
  }
  txt-grey {
    font-weight: normal;
    color: #909090;
  }
  li {
    display: inline-block;
    font-size: 1.5em;
    list-style-type: none;
    padding: 1em;
    text-transform: uppercase;
  }

  li span {
    display: block;
    font-size: 4.5rem;
  }

  @media all and (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }
    
    li {
      font-size: 1.125rem;
    }
    
    li span {
      font-size: 3.375rem;
    }
  }
</style>