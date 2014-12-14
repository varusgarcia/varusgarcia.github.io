var IWidth = window.innerWidth-50;
var IHeight = window.innerHeight-50;
var gameStage = 0;
var drawWidth;
var drawHeight;
var category = 0;
var option = 0;
var continent = 0;
var age =0;
var sex =0;
var mind =0;
var next = 0;
var guess1 = 564;
var guess2 = 210;
var guess3 = 745;
var guess4 = 956;
var guess5 = 150;
var retry =0;
var nextStage =0;
var Stage1 = 0;
var Stage2 = 0;






function setup(){
  createCanvas(IWidth, IHeight);
  noStroke();
  //imgKeys = loadImage("Keys.png")
}

function draw(){
  background(255);
  drawWidth = ((window.innerWidth-50)/2)-300;
  drawHeight = ((window.innerHeight-50)/2)-250;
  fill(150);
  rect(drawWidth+5,drawHeight+5,600,500);
  fill(200);
  rect(drawWidth,drawHeight,600,500);
  //image(imgKeys,0,400);

  if(gameStage === 0){ ////////FIRST SCREEN\\\\\\\\\\\\\\\

    textSize(20);
    fill(0);
    textStyle(BOLD);
    text("Welcome",drawWidth+30,drawHeight+50);
    textSize(15);
    fill(0);
    textStyle(NORMAL);
    text("To get Started, we need some information about You.",drawWidth+30,drawHeight+70);
    text("Select one option from each category by pressing the corresponding number,",drawWidth+30,drawHeight+90);
    text("press U or D to navigate through the different Categories and N to go to the next screen",drawWidth+30,drawHeight+110);
    textSize(12);
    fill(0);
    textStyle(NORMAL);
    text("(1)Europe      (2)Asia      (3)North America      (4)South America      (5)Africa      (6)Australia",drawWidth+50,drawHeight+200)
    text("(1)0-20      (2)21-40      (3)41-60      (4)+61", drawWidth+50,drawHeight+275)
    text("(1)Men      (2)Woman", drawWidth+50,drawHeight+350)
    text("(1)Crative      (2)Cientific", drawWidth+50,drawHeight+430)
    textSize(20);
    fill(0);
    textStyle(BOLD);
    text("Where are You from?",drawWidth+30,drawHeight+170);
    text("How old are You?",drawWidth+30,drawHeight+245);
    text("Are You a Men or a Woman",drawWidth+30,drawHeight+320);
    text("What are You like?",drawWidth+30,drawHeight+395);
    text("NEXT",drawWidth+525,drawHeight+475);
    text(continent,drawWidth+550,drawHeight+200);
    text(age,drawWidth+550,drawHeight+275);
    text(sex,drawWidth+550,drawHeight+350);
    text(mind,drawWidth+550,drawHeight+430);
    fill(255);
    if(category ===1){
      text("Where are You from?",drawWidth+28,drawHeight+168);
    }
    if(category ===2){
      text("How old are You?",drawWidth+28,drawHeight+243);
    }
    if(category ===3){
      text("Are You a Men or a Woman",drawWidth+28,drawHeight+318);
    }
    if(category ===4){
      text("What are You like?",drawWidth+28,drawHeight+393);
    }


    if (category ===1 && option >0){
      continent=option;
    }
    if (category ===2 && option >0){
      age=option;
    }
    if (category ===3 && option >0){
      sex=option;
    }
    if (category ===4 && option >0){
      mind=option;
    }
    if(continent>0 && age>0 && sex>0 && mind>0){
      nextStage=1;
      if (next=== 1){
        gameStage = 1;
      }
    }
    if(continent<= 0 || age<=0 || age>=5 || sex<=0 || sex>=3 || mind<=0 || mind>=2){
      textSize(15);
      fill(200,0,0);
      textStyle(NORMAL);
      text("please make sure to choose one option for each category",drawWidth+50,drawHeight+473)

    }

  }

  if(gameStage === 1){ ////////SECOND SCREEN\\\\\\\\\\\\\\
    Stage1++
    if(Stage1 <=100){
      nextStage =0;
      next=1;
    }
    else{
      nextStage =1;
    }
    textSize(20)

    fill(0)
    text("Thank you! Now you  are ready to guess... ", drawWidth+30, drawHeight+70)
    text("Type your guess using the number keys. ", drawWidth+30, drawHeight+90)
    text("Press R to retry and N to go to the next screen.", drawWidth+30, drawHeight+110)

    if (next === 2){
      gameStage = 2;
    }

  }


  if(gameStage === 2){/////////THIRD SCREEN\\\\\\\\\\\\\\\\
    Stage2++
    if(Stage2 <=100){
      nextStage=0;
      next=2;
      option =-1;
    }
    for (var i=0; i<= guess1; i++){
      fill(0);
      rect(random(drawWidth+30,drawWidth+570), random(drawHeight+70,drawHeight+470),2,2);
    }
    fill(0);
    textSize(30);
    textStyle(BOLD);
    text("What's your guess?", drawWidth +30, drawHeight+40)
    if(option <= 0){
      userGuess1 = option;
    }



  }






  print(next)
}


function keyTyped(){

  if (key === 'd') {
    category++;
    option=0;
  }
  if (key === 'u') {
    category--;
    option=0;
  }
  if (key === '1'){
    option = 1;
  }
  if (key === '2'){
    option = 2;
  }
  if (key === '3'){
    option = 3;
  }
  if (key === '4'){
    option = 4;
  }
  if (key === '5'){
    option = 5;
  }
  if (key === '6'){
    option = 6;
  }
  if (key === '7'){
    option = 7;
  }

  if (key ==='n'){
    if (nextStage ===1){
      next++;
   };
  }
  if (key ==='r'){
    retry =1;
  }


}
