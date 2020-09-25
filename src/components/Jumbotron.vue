<template>
    <section  class="flex justify-center items-center min-h-screen jumbotron relative">
        <div class="max-w-6xl mx-auto text-center text-white"> 
            <h1 class="font-fredericka text-6xl">Alda & Firly</h1>
            <p class="font-georgia text-2xl lt-spc-3">ARE GETTING MERRIED</p>
            <p class="border--love"><span></span><i class="fa fa-heart"></i><span></span></p>
            <p class="font-georgia text-normal lt-spc-3">JULY 7TH, 2021</p>
        </div>
    </section>
</template>
<style scoped>
  .lt-spc-3{
    letter-spacing: 0.3em;
  }
  .border--love span{
    border: 0;
    border-top: 1px solid #fff;
    display: inline-block;
    margin: 6px 10px;
    width: 150px;
  }
  .jumbotron{
    background-image: url('../../src/assets/images/02.jpg');
    background-size: cover;
  }
  .jumbotron::before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgb(255 226 253 / 25%);
  }
</style>