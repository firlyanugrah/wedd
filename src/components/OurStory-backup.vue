<template>
    <section class="w-full min-h-screen profile bg-white">
      <div>
        <h2 class="text-center font-fredericka text-4xl mb-4">How it All Began</h2>
      </div>
      <div class="flex justify-center items-center min-h-screen">
        <div class="timeline">
          <ul>
            <li>
              <div class='time font-georgia'>
                <span>June 2020</span>
              </div>
              <div class="content">
              <h3 class="font-fredericka mb-2">Our First Meet</h3>
              <p class="font-georgia">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              </div>
            </li>
            <li>
              <div class='time font-georgia'>
                <span>Mars 2019</span>
              </div>
              <div class="content">
              <h3 class="font-fredericka mb-2">What Is Lorem Ipsum?</h3>
              <p class="font-georgia">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              </div>
            </li>
            <li>
              <div class='time font-georgia'>
                <span>April 2018</span>
              </div>
              <div class="content">
              <h3 class="font-fredericka mb-2">What Is Lorem Ipsum?</h3>
              <p class="font-georgia">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>
<style scoped>
  .timeline{
    position:relative;
    width:800px;
    padding:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top: 0;
  }
  .timeline:before{
    content: '';
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    width:2px;
    height:100%;
    background-color:#ccc;
    top: 12px;  
  }
  .timeline ul{
    list-style-type:none;
  }
  .timeline ul li{
    width:50%;
    position: relative;
    padding:5px 30px 40px 30px;
    cursor:pointer;
  }
  .timeline ul li:nth-child(even):before{
    content:'';
    position:absolute;
    width:12px;
    height:12px;
    background-color:#ce9999;
    border-radius:50%;
    left:-6px;
    top:12px;
    transition:.5s;
  }
  .timeline ul li:nth-child(odd):before{
    content:'';
    position:absolute;
    width:12px;
    height:12px;
    background-color:#ce9999;
    border-radius:50%;
    right:-6px;
    top:12px;
    transition:.5s;
  }
  .timeline ul li:hover:before{
    box-shadow:0px 0px 5px 2px #ce9999;
  }
  .timeline ul li:nth-child(even){
    float:right;
    text-align:left;
    clear:both;
  }
  .timeline ul li:nth-child(odd){
    float:left;
    text-align:right;
    clear:both;
  }
  .timeline ul li:nth-child(odd) .time{
    position: absolute;
    right: -38%;
    top: 3px;
    color: #585858;
    text-align: left;
    padding-left: 10px;
    width: 120px;
    height: 28px;
    line-height: 28px;
  }
  .timeline ul li:nth-child(even) .time{
    position: absolute;
    left: -38%;
    top: 3px;
    color: #585858;
    text-align: right;
    padding-right: 10px;
    width: 120px;
    height: 28px;
    line-height: 28px;
    border-radius: 20px;
  }
  .timeline ul li .content h3{
    color:#ce9999;
    font-size:17px;
  }
  .timeline ul li .content p{
    color:#222;
  }

  @media (max-width:750px){
    .timeline{
      width:100%;
      margin:5px 0px;
    }
    .timeline:before{
      left:20px;
    }
    .timeline ul li{
      width:100%;
      padding:3px 0px 40px 20px;
      cursor:pointer;
    }
    .timeline ul li:nth-child(even):before{
      left:-6px;
    }
    .timeline ul li:nth-child(odd):before{
      left:-6px;
    }
    .timeline ul li:nth-child(even){
      float:left;
      text-align:left;
    }
    .timeline ul li:nth-child(odd){
      float:left;
      text-align:left;
    }
    .timeline ul li:nth-child(odd) .time{
      position:static;
      text-align:left;
      padding-left:5px;
      box-shadow:0px 0px 0px 0px ;
    }
    .timeline ul li:nth-child(even) .time{
      position:static;
      text-align:left;
      padding-left:5px;
      box-shadow:0px 0px 0px 0px ;
    }
  }
</style>