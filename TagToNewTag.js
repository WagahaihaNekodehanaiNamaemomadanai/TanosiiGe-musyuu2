"use strict"
let OldTag1;
let OldTag2;
let NewTag1;
let NewTag2;
let SC;
let NSC;
let AnswerText;
function StartChangeButton()
{
    OldTag1 = document.getElementById("OldTag1").value;
    OldTag2 = document.getElementById("OldTag2").value;
    NewTag1 = document.getElementById("NewTag1").value;
    NewTag2 = document.getElementById("NewTag2").value;
    SC = document.getElementById("ThisIsOldSourceCode").value;
    AnswerText = document.getElementById("ThisIsNewSourceCode");
    NSC = TagToNewTagButton(OldTag1,NewTag1,SC);
    SC = NSC;
    NSC = TagToNewTagButton(OldTag2,NewTag2,SC);
    AnswerText.value = NSC;



}
function TagToNewTagButton(OldTag,NewTag,HTMLCode)
{
    let OldTagU1 = "<" + OldTag + " ";
    let OldTagU1a = "<" + OldTag + ">";
    let OldTagU2 = "</" + OldTag + ">";
    let NewTagU1 = "<" + NewTag + " ";
    let NewTagU1a = "<" + NewTag + ">";
    let NewTagU2 = "</" + NewTag + ">";
    let NewCode = HTMLCode.replace(new RegExp(OldTagU1,"g"), NewTagU1);
    NewCode = NewCode.replace(new RegExp(OldTagU1a,"g"), NewTagU1a);
    NewCode = NewCode.replace(new RegExp(OldTagU2,"g"), NewTagU2);
    return NewCode;
}