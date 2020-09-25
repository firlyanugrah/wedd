<template>
    <section class="w-full bg--pink min-h-screen profile">
      <div class="profile__section profile__section--1 w-full relative">
        <div class="profile__wrapper absolute">
          <h2 class="font-fredericka text-3xl">Firly Anugrah Firdauz</h2>
          <p class="font-georgia text-sm">Seorang pria dan anak dari dua bersaudara, dilahirkan normal sebagai pria dan bercita-cita untuk bisa terbang</p>
        </div>
      </div>
      <div class="profile__section profile__section--2 w-full relative">
        <div class="profile__wrapper absolute">
          <h2 class="font-fredericka text-3xl">Alda Turan</h2>
          <p class="font-georgia text-sm">Pemain bola yang pernah membela Atletico Madrid kemudian hijrah ke Barca tapi dihukum tidak bermain satu musim.</p>
        </div>
      </div>
    </section>
</template>
<style scoped>
  .profile__section{
    padding-bottom: 30%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .profile__section--1{
    background-image: url('../../src/assets/images/pe1.png');
    background-position: top right;
  }
  .profile__section--2{
    background-image: url('../../src/assets/images/pe2.png');
    background-position: top left;
  }
  .profile__wrapper{
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-width: 320px;
  }
</style>