"use strict"
let Tango = ["バナナ", "Banana", "オレンジ", "みかん", "Orange", "とちおとめ", "いちご", "苺", "イチゴ", "ブドウ", "ぶどう", "Grape"];//お題を登録
//let Tango = ["1","11","111"] //テスト用
let Odai = document.getElementById("Odai");//お題を表示するp要素を代入
let Zikann = document.getElementById("KeikaZikann");
let GameGamenn = document.getElementById("GameGamenn");
let Nyuuryokusuu = document.getElementById("NyuuryokuSuu");
let PushPush = 0;//一回しか押せない仕組みを作るための変数
let OldTango = "";//ひとつ前の単語の保持を行う
let GameStart = false;
let InAnimation = false;
let Score = 0;
let TimeD = 0;
let Nokori = 30;
let STimeD = 4;

function OdaiwoHyouzi() {
    Score = 0;
    Nokori = 30;
    Nyuuryokusuu.textContent = "ジャンプした高さ：" + Score + "ｍ"
    Zikann.textContent = "残り時間：" + Nokori;
    if (PushPush == 0) {
        STimeCount();
    }
    PushPush++;
}

function STimeCount() {
    if (STimeD == 4) {
        STimeDigit();
    }
    else if (STimeD >= 1) {
        window.setTimeout(STimeDigit, 1000);
    }
}

function STimeDigit() {
    STimeD--;
    if (STimeD == 0) {
        Odai.textContent = "ゲームスタート！";
        window.setTimeout(StartGame, 1000);
    }
    else {
        Odai.textContent = "ゲーム開始まで…" + STimeD;
    }
    STimeCount();
}
function StartGame() {
    let OdaiNumber = Math.floor(Math.random() * Tango.length);//乱数を生成
    //Math.floorは整数化するための関数（切り捨てを行う）
    Odai.textContent = Tango[OdaiNumber];//p要素の書き換え
    OldTango = Tango[OdaiNumber];//現在の単語を保持
    GameStart = true;
    TimeCount();
}

function Owaridayo() {
    GameStart = false;
    GameGamenn.src = "Start1.png"
    TimeD = 0;
    STimeD = 4;
    Zikann.textContent = "残り時間：" + TimeD;
    window.alert("あなたが飛んだ高さは　" + Score + "ｍ　です。\nもう一度遊ぶ場合は再度開始ボタンをクリックしてください。");
    Odai.textContent = "お題だよー";
    PushPush = 0;
    let InputTango = document.getElementById("Boxid");
    InputTango.value = "";

}

function TimeCount() {
    if (TimeD <= 30) {
        window.setTimeout(TimeDigit, 1000);
    }
    else if (TimeD == 31) {
        Owaridayo();
    }
}

function TimeDigit() {
    TimeD++;
    Nokori--;
    Zikann.textContent = "残り時間：" + Nokori;
    TimeCount();
}

window.addEventListener("keydown", function (e) {
    let NowKey = e.keyCode;
    if (NowKey == 13 && GameStart == true) {
        let InputTango = document.getElementById("Boxid");
        if (Odai.textContent == InputTango.value)//お題とテキストボックスの値が一致したとき
        {
            Score++;
            if (Score == 1) {
                GameGamenn.src = "Start_Jumping.gif"//一番最初の地面から飛び上がるgifを流す
                InAnimation = true;
                window.setTimeout(GameChange, 1250);
            }
            else {
                GameGamenn.src = "Jumping_Jumping.gif"//雲から雲へと飛び移るgifを流す
                if (InAnimation == false)//確実に1.75秒後に処理を呼びたすための式
                {
                    InAnimation = true;
                    window.setTimeout(GameChange, 1750);//雲の上で止まっている画像を呼び出す
                }
                else//1.75秒経つ前に入力された場合
                {
                    JumpingFoever();//永遠に飛び続けるgifを1.75秒経つまで表示し、違和感を緩和する
                    /*これがなければ、例えば0,7秒で次の単語を入力できた場合,
                    gifの再生中にまた雲から飛び立つgifが最初から再生され、再生の途中で静止画に切り替わるため、
                    演出がかなりおかしなものになってしまう。今回採用した手法なら、
                    1.75秒立ってないのにまた関数が呼び出されることを防げるため、おかしな演出は防げる。
                    しかし、2つ分進んだのにアニメーション上では一つしか飛んでいるように見えないという問題も発生する。
                    アニメーションは演出と割り切り、ユーザーに数値で今何文字入力しているのかを伝えると良いだろう。*/
                }
            }
            Nyuuryokusuu.textContent = "ジャンプした高さ：" + Score + "ｍ";
            InputTango.value = "";//まず、ボックスを空にする
            let OdaiNumber = Math.floor(Math.random() * Tango.length);//乱数を生成し、次の単語を決める
            if (Tango[OdaiNumber] == OldTango)//もし、ひとつ前の単語と同じ単語が出た場合、
            {
                while (Tango[OdaiNumber] == OldTango)//ひとつ前の単語と、乱数によって決まった単語が同じ限り、ループを続ける
                {
                    OdaiNumber = Math.floor(Math.random() * Tango.length);
                }
            }
            Odai.textContent = Tango[OdaiNumber];//新しく決まった単語を代入
            OldTango = Tango[OdaiNumber];//現在の単語を保持
        }
    }
}, false)

function GameChange() {
    GameGamenn.src = "Tyakuti_Jump2.png";
    InAnimation = false;
}

function JumpingFoever() {
    GameGamenn.src = "Jumping.gif"
}