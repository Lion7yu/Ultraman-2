const string = `我是大帅逼，你也是大帅逼？？？
<style>
*{box-sizing: border-box;padding: 0;margin: 0}
*::before,*::after{box-sizing: border-box;}
.head{
    top: 100px;
    width: 213px;
    height: 222px;
    background: #fff;
    border: 7px solid #000;
    border-top: 15px solid #000;
    border-radius: 50% 50% 60% 60%;
    position: relative;
    left: 50%;
    margin-left: -110px;

}

.trapezoid{
    width: 50px;
    height: 30px;
    top: -42px;
    left: 50%;
    margin-left: -25px;
    position: absolute;
    border-bottom:30px solid #000;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
}
.triangle{
    width: 40px;
    height: 80px;
    left: 50%;
    margin-left: -20px;
    position: relative;
    border-bottom: none;
    border-top:90px solid #000;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;

}
.mouth{
    border: 1px solid #000;
    width: 40px;
    height: 22px;
    top: 160px;
    left: 50%;
    margin-left: -20px;
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-top: 15px solid black;
}
.eye{
    border: 5px solid #000;
    width: 80px;
    height: 80px;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    top: 50px;
    background: rgb(255, 195, 10);
}
.head:hover .eye{
    animation:eyes 0.5s ease-in-out infinite;
}
@keyframes eyes{
    0%{
        background:rgb(255,190,0);
    }
    50%{
        background:yellow;
    }
    100%{
        background:rgb(255,190,0);
    }
}
.eye.left{
    transform: translate(-50px);
    border-radius: 50% 90%;
}
.eye.right{
    transform: translate(+50px);
    border-radius: 90% 50%;
}
.ear{
    border: 5px solid #000;
    width: 24px;
    height: 64px;
    top: 70px;
    position: absolute;
    left: 50%;
    margin-left: -24px;
    background-color: #c3c3c3;
    z-index:-1;
}
.ear.left{
    margin-left: 95px ;
    transform: rotate(8deg);
    border-left: transparent;
}
.ear.right{
    margin-left: -120px;
    transform: rotate(-7deg);
    border-right: transparent;
}
.body{
    border: 7px solid #000;
    position: relative;
    width: 133px;
    height: 100px;
    left: 50%;
    margin-left: -70px;
    top: 70px;
    border-top: transparent;
}
.abdomen{
    border: 7px solid #000;
    position: relative;
    width: 133px;
    height: 30px;
    left: 50%;
    margin-left: -66.5px;
    top: -80px;
    border-top: transparent;
    background-color: red;
    z-index: 1;
    border-radius: 0% 0% 50% 50%;
}
.hand{
    border: 7px solid #000;
    position: relative;
    left: 50%;
    margin-left: -25px;
    background-color: #fff;
}
.hand > img{
    position: relative;
    z-index: 999;
    left: 50%;
}
.hand.left{
    width: 43px;
    height: 136px;
    border-radius: 60% 60% 50% 50%;
    transform: translate(-60px);
    top: -40px;
    z-index: 1;
}
.hand.left > img{
    top: 45px;
    transform: translate(140px);
}
.hand.right{
    width: 144px;
    height: 44px;
    border-radius: 60% 50% 50% 60%;
    top: -130px;
    transform: translate(-36px);
    z-index: 2;
}
.hand.right >img{
    transform: rotateY(180deg);
    margin-left: -250px;
}
.san{
    border: 4px solid #000;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-left: -25px;
    position: absolute;
    top: 20px;
    transform: rotate(45deg);
    background-color: red;
}
.san::after{
    border: 1px solid #000;
    position: absolute;
    border-radius: 50%;
    content: '';
    display: block;
    border: 1px solid #000;
    width: 12px;
    height: 12px;
    background: blue;
    position: absolute;
    left: 50%;
    margin-left: 7px;
    top: 28px;
    z-index: 999;
}
.san::after{
    animation: light .5s linear infinite alternate;
}
@keyframes light{
    0%{
        background:#48e1e7;
    }
    50%{
        background:blue;
    }
    100%{
        background:#48e1e7;
    }
}
.leg{
    position: relative;
    border-radius: 50% 50% 60% 60%;
}
.leg.left{
    border: 7px solid #000;
    width: 44px;
    height: 96px;
    left: 50%;
    margin-left: -60px;
    top: 70px;
    transform: rotate(16deg);
}
/* .run2{
    animation: legLeft 3s linear 3s infinite alternate;
}
@keyframes legLeft{
   
    33% {
      transform: rotate(-30deg);
    }
    66% {
      transform: rotate(30deg);
   
    }
  
  } */
.leg.right{
    border: 7px solid #000;
    width: 44px;
    height: 96px;
    left: 50%;
    margin-left: 10px;
    transform: rotate(-16deg);
    top: -25px;
}
/* .run1{
    animation: legRight 3s linear 3s infinite alternate;
}
@keyframes legRight{
   
  33% {
    transform: rotate(30deg);
  }
  66% {
    transform: rotate(-30deg);
 
  }
} */
 </style>   
`

const player = {
    n:1,
    time:100,
    ui:{
        demo :document.querySelector("#demo"),
        demo2: document.querySelector("#demo2"),
    },
    id:undefined,
    init:()=>{
    player.ui.demo.innerText =string.substr(0,player.n)
    player.ui.demo2.innerHTML=string.substr(0,player.n)
        player.bindEvents()
        player.play()

},
    events:{
        '#btnPause' :'pause',
        '#btnPlay' :'play',
        '#btnSlow':'slow',
        '#btnQuick':'quick',
    },
    bindEvents:()=>{
        for (let key in player.events){
            if (player.events.hasOwnProperty(key)){
                const value = player.events[key] //pause /play / slow
                document.querySelector(key).onclick = player[value]
            }
        }
    },
     run: ()=> {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: ()=>{
        player.id = setInterval(player.run,player.time)
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.pause()
        player.time=300
        player.play()
    },
    quick:()=> {
        player.pause()
        player.time = 0
        player.play()
    }
}

player.init()

