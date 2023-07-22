var button_colors=["green","red","yellow","blue"];
var started=0;
var level=0;
var user_patt=[];
var game_pattern=[];
var score=0;

$(document).keypress(function(){
    if(started==0){
        $("#lv-title").text("Level "+level);
        nextsq();
        started=1;
    }
})

$(".btn").click(function(){

    if(started==1){
    var ch_color=$(this).attr("id");
    
    user_patt.push(ch_color);
    
    playsound(ch_color);
    anime_press(ch_color);
    check_answer(user_patt.length-1);
    }

 })


 function check_answer(curren_col){
    if(game_pattern[curren_col]===user_patt[curren_col]){
        if(user_patt.length===game_pattern.length){
            score=score+1;
            setTimeout(function(){
                nextsq();
            },1000);
        }
    }
    else{
        playsound("wrong");
        $("body").addClass("game-over");
        $("#lv-title").text("Game Over..your final score is : " +score+ ", press any key to restart the game");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200)

        startOver();


        
    }
}


 function nextsq(){
    user_patt=[]
    level++;
    $("#lv-title").text("Level "+level);
    var random_number= Math.floor(Math.random() * 4);
    var random_color=button_colors[random_number];

    game_pattern.push(random_color);
    console.log(game_pattern);

    $("#" + random_color).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(random_color);

}


function playsound(name){
       var audio=new Audio("sounds/"+name+".mp3");
       audio.play();

}


function anime_press(currentcolor){
    $("#"+currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentcolor).removeClass("pressed");
    },100);
}

function startOver() {
    level = 0;
    game_pattern= [];
    user_patt=[];
    started = 0;
  }

  

