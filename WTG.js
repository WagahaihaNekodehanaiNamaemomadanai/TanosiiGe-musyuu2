"use strict"
var NGW;
var NGWV;
var AW1;
var AW2;
var AW3;
var AW4;
var AW5;
function GameStartButton()
{
    NGW = document.getElementById("thisIsNgwordId");
    NGWV = NGW.value;
    NGW.value = "";
    window.alert("罠となる単語を記録しました！");
    //console.log(NGWV);
}
function AnswerWordSend()
{
    AW1 = document.getElementById("Word1ID").value;
    AW2 = document.getElementById("Word2ID").value;
    AW3 = document.getElementById("Word3ID").value;
    AW4 = document.getElementById("Word4ID").value;
    AW5 = document.getElementById("Word5ID").value;
    var ItIsOut = 0;
    var emptyCheak = 0;
    var AWL = [AW1,AW2,AW3,AW4,AW5];

    for(let i = 0; i < 5; i++)
    {
        if(AWL[i] == "")
        {
            window.alert("きちんと単語を5つ入力してください");
            emptyCheak++;
            break;
        }

        if(AWL[i] == NGWV)
        {
            ItIsOut++;
        }
    }
    if(emptyCheak ==0)
    {
        if(ItIsOut == 0)
        {
            location = "WinResultWTG.html";
        }
        else
        {
            ItIsOut = 0;//一応初期化しておく
            location = "LoseResultWTG.html";
        }
    }
    else
    {
        emptyCheak = 0; //再入力時に引っかからないようにするため、値を初期化しておく   
    }
}