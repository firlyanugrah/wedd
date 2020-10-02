<template>
    <div class="flex justify-center items-center min-h-screen w-full bg-white">
        <div class="bricklayer">
            <div v-for="(item, index) in images" :key="index" @click="openImages(index)">
                <figure class="effect-roxy cursor-pointer">
                    <img :src="item.url" :alt="'image ke'+index"/>       
                </figure>
            </div>
        </div>
        <div v-if="openViewer" class="viewer fixed top-0 left-0 bg-white justify-center items-center z-20 w-full min-h-screen">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide bg-white" v-for="(item, index) in images" :key="index" >
                        <div class="photo">
                            <img :src="item.url" :alt="'image ke'+index">
                        </div>
                        <div class="caption flex justify-center items-center">
                            <p class="text-small font-fredericka">{{ item.caption }}</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="close font-fredericka" @click="openViewer=false">Close</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            bricklayer: '',
            images: [{
                url: '/src/assets/images/01.jpg',
                caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },{
                url: '/src/assets/images/02.jpg',
                caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },{
                url: '/src/assets/images/03.jpg',
                caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },{
                url: '/src/assets/images/05.png',
                caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },{
                url: '/src/assets/images/06.jpg',
                caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },{
                url: '/src/assets/images/07.jpg',
                caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },{
                url: '/src/assets/images/pe1.png',
                caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },{
                url: '/src/assets/images/pe2.png',
                caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }],
            timeout: '',
            index: 2,
            openViewer: false,
            mySwiper: ''
        }
    },
    watch: {
        openViewer(){
            if(this.openViewer === true) {
                const self = this
                this.timeout = setTimeout(function(){
                    self.initSwiper();
                    self.mySwiper.slideTo(self.index);
                }, 300)
            }
        }
    },
    methods: {
        initBreakLayer(){
            this.bricklayer = new Bricklayer(document.querySelector('.bricklayer'))
        },
        initSwiper(){
            this.mySwiper = new Swiper('.swiper-container', {
                effect: 'fade',
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            })
        },
        openImages(item) {
            this.index = item
            this.openViewer = true;
        },
        next(){
           this.index == this.images.length-1 ? this.index = 0 : this.index++;
        },
        prev(){
           this.index == 0 ? this.index = this.images.length-1 : this.index--;
        }
    },
    mounted(){
        const self = this;
        this.timeout = setTimeout(function(){
            self.initBreakLayer();
        }, 300)
    }
}
</script>>
<style scoped>
@media screen and (min-width: 1200px) {
  .bricklayer-column-sizer {
    width: 33.3%;
  }
}

@media screen and (min-width: 768px) {
  .bricklayer-column-sizer {
    width: 50%;
  }
}

.swiper-container {
    width: 100%;
    height: 100vh;
}
.swiper-button-next, .swiper-button-prev {
    width: 20px;
    height: 40px;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.swiper-button-next {
    background-image: url(https://interaktif.kompas.id/wp-content/uploads/sites/316/2018/02/arrow-right.png);
    outline: none!important;
}
.swiper-button-prev {
    background-image: url(https://interaktif.kompas.id/wp-content/uploads/sites/316/2018/02/arrow-left.png);
    outline: none!important;
}
.swiper-button-next:after, .swiper-button-prev:after {
    display: none;
}
.close{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    cursor: pointer;
    color: #fff;
    background: #de2222;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 0 0 0 15px;
}
.photo{
    width: auto;
    height: 80vh;
    padding: 22px;
}

.photo img{
    height: 100%;
    width: auto;
    margin: auto;
    max-width: 90%;
}
.caption p{
    max-width: 500px;
}
/* Common style */
figure {
    position: relative;
    overflow: hidden;
    width: 100%;
    text-align: center;
    cursor: pointer;
    margin-bottom: 12px;
}
figure::before{
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-60%,-50%);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    border: 1px solid #fff;
    width: 80%;
    height: 80%;
    z-index: 2;
    opacity: 0;
}
figure::after{
    content: 'view';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
    -webkit-transition: opacity 0.35s;
    transition: opacity 0.35s;
    /* transition-delay: .7s; */
    color: #000;
    background: #fff;
    padding: 4px 12px;
    border-radius: 4px;
    font-family: 'Fredericka the Great', cursive;
    font-size: 16px;
}
figure img {
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
    opacity: 0.8;
}

figure.effect-roxy img {
    max-width: none;
    width: -webkit-calc(100% + 60px);
    width: calc(100% + 60px);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(-50px,0,0);
    transform: translate3d(-50px,0,0);
}

figure.effect-roxy:hover img {
    opacity: 0.7;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}

figure.effect-roxy:hover p {
    opacity: 1;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}

figure.effect-roxy:hover::before {
    opacity: 1;
    transform: translate(-50%,-50%);
}
figure.effect-roxy:hover::after {
    opacity: 1;
}

</style>