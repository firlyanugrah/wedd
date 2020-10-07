<template>
    <section class="w-full min-h-screen profile bg-white">
      <div>
        <h2 class="text-center font-fredericka text-4xl mb-4">How it All Began</h2>
      </div>
      <div class="relative w-full lg:w-1/2 min-h-screen timeline mx-auto" ref="timeline">
        <div class="timeline__line"></div>
        <div class="timeline__wrapper relative">
          <div class="mb-24">
            <div class="bullet">
              <img src="/src/assets/icons/bullet.png">
            </div>
            <div class="timeline__content relative bg-white">
              <div class="date">Jan 1, 2011</div>
              <div class="title">Our First Meet</div>
              <div class="caption">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
              <!-- <div class="image">
                <img src="/src/assets/images/06.jpg">
              </div> -->
            </div>
          </div>
          <div class="">
            <div class="bullet">
              <img src="/src/assets/icons/bullet.png">
            </div>
            <div class="timeline__content relative bg-white">
              <div class="date">Jan 1, 2011</div>
              <div class="title">Our First Meet</div>
              <div class="caption">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
              <!-- <div class="image">
                <img src="/src/assets/images/06.jpg">
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<style scoped>
  .timeline__line{
    width: 65px;
    height: 30vh;
    position: sticky;
    left: 50%;
    top: 0;
    background-color: #ce9999;
    transform: translateX(-50%);
  }
  .side{
    position: absolute;
    width: 49.8%;
    top: 0;
    height: 100%;
    background-color: #fff;
  }
  .side--left{
    left: 0;
  }
  .side--right{
    right: 0;
  }
  .bullet{
    width: 30px;
    margin: 0 auto;
    background: rgb(206 153 153 / 20%);
  }
</style>