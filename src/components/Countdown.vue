<template>
    <section class="w-full bg--pink countdown bg-white">
      <div class="container">
        <ul class="font-fredericka">
          <li><span id="days"></span>days</li>
          <li><span id="hours"></span>Hours</li>
          <li><span id="minutes"></span>Minutes</li>
          <li><span id="seconds"></span>Seconds</li>
        </ul>
      </div>
    </section>
</template>
<script>
export default {
  methods:{
    countdown(){
      const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

      let countDown = new Date('Jul 07, 2021 00:00:00').getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

      }, second)
    }
  },
  mounted(){
    this.countdown();
  }
}
</script>
<style scoped>
  .countdown{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    color: #333;
    margin: 0 auto;
    padding: 0.5rem;
    text-align: center;
  }


  h1 {
    font-weight: normal;
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