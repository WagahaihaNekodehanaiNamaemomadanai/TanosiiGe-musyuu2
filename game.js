"use strict"
let Zahyou = document.getElementById("Syuzinnkou");//IDから要素を取ってくる
let x = 530; //ｘ座標の設定(CSS側で枠内の左に位置する値に設定)
let oldX ;
let y = 150; //ｙ座標の設定(CSS側で枠内の下に位置する値に設定)
//つまり、上の二つの設定によって左下に位置する点を原点として設定している
let MV = 5; //スピードの設定(一回の入力で座標から足したり引いたりする値の設定)
let ItIsR = false;
let MovingR = false;
let ItIsL = false;
let MovingL = false;
let StopOr = false;
let Party = document.getElementById("Party");
let Tool = document.getElementById("Tool");
let Typing = document.getElementById("Typing");

window.addEventListener("keydown",function(e){
    let NowKey = e.keyCode;
    oldX = x;
    if (NowKey == 65)//Aキーのこと　矢印でいうと「←」
    {
        //ItIsL = false;
        if(MovingL == false)
        {
            Zahyou.src = "Left_Working.gif";
            MovingL = true;
            MovingR = false;
        }
        x -= MV;//原点からMVを引く。つまり、x軸方向にマイナスに進むということ
        if(x >= 0)//画面外に出ることを防ぐための処理
        {
            let xV = x + "px";//これによって、〇pxという文字列に数値を変換している
            Zahyou.style.left = xV;//座標の更新
        }
        else
        {
            x = 0;//例外の場合に値をリセットする処理
            //テストなのでとりあえず原点の値を入力しているが、ここはもっと別の処理を使ったほうがいい
        }
    }
    else if (NowKey == 68)//Dキーのこと　矢印でいうと「→」
    {
        //ItIsR = false;
        if(MovingR == false)
        {
            Zahyou.src = "Right_Working.gif";
            MovingR = true;
            MovingL = false;
        }
        x += MV;//原点にMVを足す。つまり、x軸方向にプラスに進むということ
        if(x <= 530)
        {
            let xV = x + "px";
            Zahyou.style.left = xV;
        }
        else
        {
            x = 530;
        }
    }
},false)

window.addEventListener("keyup",function(e){
    let NowKey = e.keyCode;
    if (NowKey == 65)//Aキーのこと　矢印でいうと「←」
    {
        ItIsL = true;
        StopOK();
        AnimationDoor();
    }
    else if (NowKey == 68)//Dキーのこと　矢印でいうと「→」
    {
        ItIsR = true;
        StopOK();
        AnimationDoor();
    }

    if(NowKey == 13)//エンターキー
    {
        Sentaku();
    }

},false)

function StopOK()
{
    if(ItIsL == true)
    {
        Zahyou.src = "Left_Taiki.png";
        MovingL = false;
        MovingR = false;
        ItIsL = false;
    }
    else if (MovingR == true)
    {
        Zahyou.src = "Right_Taiki.png";
        MovingR = false;
        MovingL = false;
        ItIsR = false;
            
    }
}
function AnimationDoor()
{
    if(x >= 0 && x <= 100)
    {
        Typing.src = "Door_O.png";
        Tool.src = "Door_C.png";
        Party.src = "Door_C.png";
    }
    else if(x > 180 && x <= 250)
    {
        Typing.src = "Door_C.png";
        Tool.src = "Door_O.png";
        Party.src = "Door_C.png";
    }
    else if(x > 380 && x <= 450)
    {
        Typing.src = "Door_C.png";
        Tool.src = "Door_C.png";
        Party.src = "Door_O.png";
    }
    else{
        Typing.src = "Door_C.png";
        Tool.src = "Door_C.png";
        Party.src = "Door_C.png";
    }
}
function Sentaku()
{
    if(x >= 0 && x <= 100)
    {
        location = "game.html#Typing_Midasi";
    }
    else if(x > 180 && x <= 250)
    {
        location = "game.html#Tool_Midasi";
    }
    else if(x > 380 && x <= 450)
    {
        location = "game.html#Party_Midasi";
    }
}