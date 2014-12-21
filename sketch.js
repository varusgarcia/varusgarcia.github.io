
var cont = ["Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","South America","Europe","Europe" , "Europe", "Europe"];
var age = ["0-20","21-40","21-40","0-20","0-20","21-40","21-40","21-40","0-20","21-40","21-40","0-20","41-60","21-40","0-20","21-40","21-40","21-40","0-20","0-20", "0-20", "21-40"];
var sex = ["Man","Man","Man","Man","Woman","Man","Man","Man","Woman","Man","Man","Man","Woman","Man","Man","Man","Man","Man","Man","Man","Man","Man"];
var mind =["Artistic","Cientific","Artistic","Artistic","Artistic","Artistic","Scientific","Scientific","Artistic","Artistic","Scientific","Scientific","Artistic","Artistic","Artistic","Artistic","Artistic","Artistic","Scientific","Scientific","Artistic","Scientific"];
var guess1 =[456,400,1500,700,500,547,300,800,270,600,400,750,650,3000,100,400,260,250,609,1500,500,550];
var guess2 =[234,100,300,400,180,103,150,600,160,300,200,250,500,1000,75,100,130,100,326,800,200,220];
var guess3 =[132,50,200,300,110,94,120,200,130,150,150,150,200,500,50,80,130,75,278,500,150,200];
var guess4 =[567,400,800,650,700,477,380,900,330,450,320,950,600,2000,110,200,300,120,569,1300,250,500];
var guess5 =[978,500,1500,1000,1000,683,800,1100,650,750,600,1800,1000,5000,175,500,500,350,1346,2000,600,1001];
var people = 22;

var colorRect = 1

var infoButton =1;

var contSimp = []
var ageSimp = []
var sexSimp = []
var mindSimp = []

var tempGuess1Stat = 0;///guess1
var tempAverageGuess1 = 0;
var averageGuess1 = 0;
var guess1Stat  = 0 ;
var realGuess1 = 765;

var tempGuess2Stat = 0;///guess2
var tempAverageGuess2 = 0;
var averageGuess2 = 0;
var guess2Stat  = 0 ;
var realGuess2 = 234;

var tempGuess3Stat = 0;///guess3
var tempAverageGuess3 = 0;
var averageGuess3 = 0;
var guess3Stat  = 0 ;
var realGuess3 = 145;

var tempGuess4Stat = 0;///guess4
var tempAverageGuess4 = 0;
var averageGuess4 = 0;
var guess4Stat  = 0 ;
var realGuess4 = 567;

var tempGuess5Stat = 0;///guess5
var tempAverageGuess5 = 0;
var averageGuess5 = 0;
var guess5Stat  = 0 ;
var realGuess5 = 1500;

var buttonX = 70;

var printEurope =0;
var printNAmerica=0;
var printSAmerica=0;
var printAsia=0;
var printAfrica=0;
var printAustralia=0;
var printO=0;
var printSI=0;
var printAI=0;
var printGI=0;
var printMan=0;
var printWoman=0;
var printOther=0;
var printScientific=0;
var printArtistic=0;
var printTotal=0;
var printGuess1=0;
var printGuess2=0;
var printGuess3=0;
var printGuess4=0;
var printGuess5=0;

var modWidth
var modHeight
var buttonCounter = 0;



var EuropePeople = 0; ///CONTINENT Europe
var tempEuropeG1 = 0;
var tempEuropeG2 = 0;
var tempEuropeG3 = 0;
var tempEuropeG4 = 0;
var tempEuropeG5 = 0;
var tempAvEuropeG1 = 0;
var tempAvEuropeG2 = 0;
var tempAvEuropeG3 = 0;
var tempAvEuropeG4 = 0;
var tempAvEuropeG5 = 0;
var avEuropeG1 = 0;
var avEuropeG2 = 0;
var avEuropeG3 = 0;
var avEuropeG4 = 0;
var avEuropeG5 = 0;
var totEuropeGuess = 0;


var NAmericaPeople = 0; ///CONTINENT NAmerica
var tempNAmericaG1 = 0;
var tempNAmericaG2 = 0;
var tempNAmericaG3 = 0;
var tempNAmericaG4 = 0;
var tempNAmericaG5 = 0;
var tempAvNAmericaG1 = 0;
var tempAvNAmericaG2 = 0;
var tempAvNAmericaG3 = 0;
var tempAvNAmericaG4 = 0;
var tempAvNAmericaG5 = 0;
var avNAmericaG1 = 0;
var avNAmericaG2 = 0;
var avNAmericaG3 = 0;
var avNAmericaG4 = 0;
var avNAmericaG5 = 0;
var totNAmericaGuess = 0;

var SAmericaPeople = 0; ///CONTINENT SAmerica
var tempSAmericaG1 = 0;
var tempSAmericaG2 = 0;
var tempSAmericaG3 = 0;
var tempSAmericaG4 = 0;
var tempSAmericaG5 = 0;
var tempAvSAmericaG1 = 0;
var tempAvSAmericaG2 = 0;
var tempAvSAmericaG3 = 0;
var tempAvSAmericaG4 = 0;
var tempAvSAmericaG5 = 0;
var avSAmericaG1 = 0;
var avSAmericaG2 = 0;
var avSAmericaG3 = 0;
var avSAmericaG4 = 0;
var avSAmericaG5 = 0;
var totSAmericaGuess = 0;

var AsiaPeople = 0; ///CONTINENT Asia
var tempAsiaG1 = 0;
var tempAsiaG2 = 0;
var tempAsiaG3 = 0;
var tempAsiaG4 = 0;
var tempAsiaG5 = 0;
var tempAvAsiaG1 = 0;
var tempAvAsiaG2 = 0;
var tempAvAsiaG3 = 0;
var tempAvAsiaG4 = 0;
var tempAvAsiaG5 = 0;
var avAsiaG1 = 0;
var avAsiaG2 = 0;
var avAsiaG3 = 0;
var avAsiaG4 = 0;
var avAsiaG5 = 0;
var totAsiaGuess = 0;

var AfricaPeople = 0; ///CONTINENT Africa
var tempAfricaG1 = 0;
var tempAfricaG2 = 0;
var tempAfricaG3 = 0;
var tempAfricaG4 = 0;
var tempAfricaG5 = 0;
var tempAvAfricaG1 = 0;
var tempAvAfricaG2 = 0;
var tempAvAfricaG3 = 0;
var tempAvAfricaG4 = 0;
var tempAvAfricaG5 = 0;
var avAfricaG1 = 0;
var avAfricaG2 = 0;
var avAfricaG3 = 0;
var avAfricaG4 = 0;
var avAfricaG5 = 0;
var totAfricaGuess = 0;

var AustraliaPeople = 0; ///CONTINENT Australia
var tempAustraliaG1 = 0;
var tempAustraliaG2 = 0;
var tempAustraliaG3 = 0;
var tempAustraliaG4 = 0;
var tempAustraliaG5 = 0;
var tempAvAustraliaG1 = 0;
var tempAvAustraliaG2 = 0;
var tempAvAustraliaG3 = 0;
var tempAvAustraliaG4 = 0;
var tempAvAustraliaG5 = 0;
var avAustraliaG1 = 0;
var avAustraliaG2 = 0;
var avAustraliaG3 = 0;
var avAustraliaG4 = 0;
var avAustraliaG5 = 0;
var totAustraliaGuess = 0;

var OPeople = 0; ///AGE 0-20
var tempOG1 = 0;
var tempOG2 = 0;
var tempOG3 = 0;
var tempOG4 = 0;
var tempOG5 = 0;
var tempAvOG1 = 0;
var tempAvOG2 = 0;
var tempAvOG3 = 0;
var tempAvOG4 = 0;
var tempAvOG5 = 0;
var avOG1 = 0;
var avOG2 = 0;
var avOG3 = 0;
var avOG4 = 0;
var avOG5 = 0;
var totOGuess = 0;

var SIPeople = 0; ///AGE SI
var tempSIG1 = 0;
var tempSIG2 = 0;
var tempSIG3 = 0;
var tempSIG4 = 0;
var tempSIG5 = 0;
var tempAvSIG1 = 0;
var tempAvSIG2 = 0;
var tempAvSIG3 = 0;
var tempAvSIG4 = 0;
var tempAvSIG5 = 0;
var avSIG1 = 0;
var avSIG2 = 0;
var avSIG3 = 0;
var avSIG4 = 0;
var avSIG5 = 0;
var totSIGuess = 0;


var AIPeople = 0; ///AGE AI
var tempAIG1 = 0;
var tempAIG2 = 0;
var tempAIG3 = 0;
var tempAIG4 = 0;
var tempAIG5 = 0;
var tempAvAIG1 = 0;
var tempAvAIG2 = 0;
var tempAvAIG3 = 0;
var tempAvAIG4 = 0;
var tempAvAIG5 = 0;
var avAIG1 = 0;
var avAIG2 = 0;
var avAIG3 = 0;
var avAIG4 = 0;
var avAIG5 = 0;
var totAIGuess = 0;

var GIPeople = 0; ///AGE GI
var tempGIG1 = 0;
var tempGIG2 = 0;
var tempGIG3 = 0;
var tempGIG4 = 0;
var tempGIG5 = 0;
var tempAvGIG1 = 0;
var tempAvGIG2 = 0;
var tempAvGIG3 = 0;
var tempAvGIG4 = 0;
var tempAvGIG5 = 0;
var avGIG1 = 0;
var avGIG2 = 0;
var avGIG3 = 0;
var avGIG4 = 0;
var avGIG5 = 0;
var totGIGuess = 0;

var ManPeople = 0; ///SEX Man
var tempManG1 = 0;
var tempManG2 = 0;
var tempManG3 = 0;
var tempManG4 = 0;
var tempManG5 = 0;
var tempAvManG1 = 0;
var tempAvManG2 = 0;
var tempAvManG3 = 0;
var tempAvManG4 = 0;
var tempAvManG5 = 0;
var avManG1 = 0;
var avManG2 = 0;
var avManG3 = 0;
var avManG4 = 0;
var avManG5 = 0;
var totManGuess = 0;

var WomanPeople = 0; ///SEX Woman
var tempWomanG1 = 0;
var tempWomanG2 = 0;
var tempWomanG3 = 0;
var tempWomanG4 = 0;
var tempWomanG5 = 0;
var tempAvWomanG1 = 0;
var tempAvWomanG2 = 0;
var tempAvWomanG3 = 0;
var tempAvWomanG4 = 0;
var tempAvWomanG5 = 0;
var avWomanG1 = 0;
var avWomanG2 = 0;
var avWomanG3 = 0;
var avWomanG4 = 0;
var avWomanG5 = 0;
var totWomanGuess = 0;

var OtherPeople = 0; ///SEX Other
var tempOtherG1 = 0;
var tempOtherG2 = 0;
var tempOtherG3 = 0;
var tempOtherG4 = 0;
var tempOtherG5 = 0;
var tempAvOtherG1 = 0;
var tempAvOtherG2 = 0;
var tempAvOtherG3 = 0;
var tempAvOtherG4 = 0;
var tempAvOtherG5 = 0;
var avOtherG1 = 0;
var avOtherG2 = 0;
var avOtherG3 = 0;
var avOtherG4 = 0;
var avOtherG5 = 0;
var totOtherGuess = 0;

var ArtisticPeople = 0; ///MIND Artistic
var tempArtisticG1 = 0;
var tempArtisticG2 = 0;
var tempArtisticG3 = 0;
var tempArtisticG4 = 0;
var tempArtisticG5 = 0;
var tempAvArtisticG1 = 0;
var tempAvArtisticG2 = 0;
var tempAvArtisticG3 = 0;
var tempAvArtisticG4 = 0;
var tempAvArtisticG5 = 0;
var avArtisticG1 = 0;
var avArtisticG2 = 0;
var avArtisticG3 = 0;
var avArtisticG4 = 0;
var avArtisticG5 = 0;
var totArtisticGuess = 0;

var ScientificPeople = 0; /// MIND Scientific
var tempScientificG1 = 0;
var tempScientificG2 = 0;
var tempScientificG3 = 0;
var tempScientificG4 = 0;
var tempScientificG5 = 0;
var tempAvScientificG1 = 0;
var tempAvScientificG2 = 0;
var tempAvScientificG3 = 0;
var tempAvScientificG4 = 0;
var tempAvScientificG5 = 0;
var avScientificG1 = 0;
var avScientificG2 = 0;
var avScientificG3 = 0;
var avScientificG4 = 0;
var avScientificG5 = 0;
var totScientificGuess = 0;





var thick =12;

function setup() {

  createCanvas(window.innerWidth-20, window.innerHeight-20);
  noStroke();
  noSmooth();

  

  for (var i =0; i <= people-1; i++){// getting Average guess1 and pixel
    tempGuess1Stat += guess1[i];
    }


     tempAverageGuess1 = tempGuess1Stat/people;
     averageGuess1 = (tempAverageGuess1*300)/realGuess1

  for (var i =0; i <= people-1; i++){// getting Average guess2 and pixel
    tempGuess2Stat += guess2[i];
  }
  for(var g =1; g <=5;g++){

    tempAverageGuess2 = tempGuess2Stat/people;
    averageGuess2 = (tempAverageGuess2*300)/realGuess2
  }
  for (var i =0; i <= people-1; i++){// getting Average guess3 and pixel
    tempGuess3Stat += guess3[i];
  }
  for(var g =1; g <=5;g++){
    tempAverageGuess3 = tempGuess3Stat/people;
    averageGuess3 = (tempAverageGuess3*300)/realGuess3
  }
  for (var i =0; i <= people-1; i++){// getting Average guess4 and pixel
    tempGuess4Stat += guess4[i];
  }
  for(var g =1; g <=5;g++){

    tempAverageGuess4 = tempGuess4Stat/people;
    averageGuess4 = (tempAverageGuess4*300)/realGuess4
  }
  for (var i =0; i <= people-1; i++){// getting Average guess5 and pixel
    tempGuess5Stat += guess5[i];
  }
  for(var g =1; g <=5;g++){

    tempAverageGuess5 = tempGuess5Stat/people;
    averageGuess5 = (tempAverageGuess5*300)/realGuess5
  }

  for (var i= 0; i<= people-1; i++){
    if(cont[i] === "Europe"){
      contSimp[i] = 1
      EuropePeople = EuropePeople + 1
    }
    if(cont[i] === "North America"){
      contSimp[i] = 2;
      NAmericaPeople = NAmericaPeople + 1
    }
    if(cont[i] === "South America"){
      contSimp[i] = 3;
      SAmericaPeople = SAmericaPeople + 1
    }
    if(cont[i] === "Asia"){
      contSimp[i] = 4;
      AsiaPeople = AsiaPeople + 1
    }
    if(cont[i] === "Africa"){
      contSimp[i] = 5;
      AfricaPeople = AfricaPeople + 1
    }
    if(cont[i] === "Australia"){
      contSimp[i] = 6;
      AustraliaPeople = AustraliaPeople + 1
    }

    if(age[i] === "0-20"){
      ageSimp[i] = 1;
      OPeople = OPeople + 1
    }
    if(age[i] === "21-40"){
      ageSimp[i] = 2;
      SIPeople = SIPeople + 1
    }
    if(age[i] === "41-60"){
      ageSimp[i] = 3;
      AIPeople = AIPeople + 1
    }
    if(age[i] === "60+"){
      ageSimp[i] = 4;
      GIPeople = GIPeople + 1
    }
    if(sex[i] === "Man"){
      sexSimp[i] = 1;
      ManPeople = ManPeople + 1
    }
    if(sex[i] === "Woman"){
      WomanPeople = WomanPeople + 1
      sexSimp[i] = 2;
    }
    if(sex[i] === "Other"){
      OtherPeople = OtherPeople + 1
      sexSimp[i] = 3;
    }
    if(mind[i] === "Artistic"){
      ArtisticPeople = ArtisticPeople + 1
      mindSimp[i] = 1;
    }
    if(mind[i] === "Scientific"){
      ScientificPeople = ScientificPeople + 1
      mindSimp[i] = 2;
    }
  }

  for(var i = 0; i<= people-1; i ++){ ///CONT Europe

    if(contSimp[i] ===1){
      tempEuropeG1 += guess1[i];
      tempEuropeG2 += guess2[i];
      tempEuropeG3 += guess3[i];
      tempEuropeG4 += guess4[i];
      tempEuropeG5 += guess5[i];
    }
    if(contSimp[i] ===2){
      tempNAmericaG1 += guess1[i];
      tempNAmericaG2 += guess2[i];
      tempNAmericaG3 += guess3[i];
      tempNAmericaG4 += guess4[i];
      tempNAmericaG5 += guess5[i];
    }
    if(contSimp[i] ===3){
      tempSAmericaG1 += guess1[i];
      tempSAmericaG2 += guess2[i];
      tempSAmericaG3 += guess3[i];
      tempSAmericaG4 += guess4[i];
      tempSAmericaG5 += guess5[i];
    }
    if(contSimp[i] ===4){
      tempAsiaG1 += guess1[i];
      tempAsiaG2 += guess2[i];
      tempAsiaG3 += guess3[i];
      tempAsiaG4 += guess4[i];
      tempAsiaG5 += guess5[i];
    }
    if(contSimp[i] ===5){
      tempAfricaG1 += guess1[i];
      tempAfricaG2 += guess2[i];
      tempAfricaG3 += guess3[i];
      tempAfricaG4 += guess4[i];
      tempAfricaG5 += guess5[i];
    }
    if(contSimp[i] ===6){
      tempAustraliaG1 += guess1[i];
      tempAustraliaG2 += guess2[i];
      tempAustraliaG3 += guess3[i];
      tempAustraliaG4 += guess4[i];
      tempAustraliaG5 += guess5[i];
    }

    if(ageSimp[i] ===1){
      tempOG1 += guess1[i];
      tempOG2 += guess2[i];
      tempOG3 += guess3[i];
      tempOG4 += guess4[i];
      tempOG5 += guess5[i];
    }
    if(ageSimp[i] ===2){
      tempSIG1 += guess1[i];
      tempSIG2 += guess2[i];
      tempSIG3 += guess3[i];
      tempSIG4 += guess4[i];
      tempSIG5 += guess5[i];
    }
    if(ageSimp[i] ===3){
      tempAIG1 += guess1[i];
      tempAIG2 += guess2[i];
      tempAIG3 += guess3[i];
      tempAIG4 += guess4[i];
      tempAIG5 += guess5[i];
    }
    if(ageSimp[i] ===4){
      tempGIG1 += guess1[i];
      tempGIG2 += guess2[i];
      tempGIG3 += guess3[i];
      tempGIG4 += guess4[i];
      tempGIG5 += guess5[i];
    }
    if(sexSimp[i] ===1){
      tempManG1 += guess1[i];
      tempManG2 += guess2[i];
      tempManG3 += guess3[i];
      tempManG4 += guess4[i];
      tempManG5 += guess5[i];
    }
    if(sexSimp[i] ===2){
      tempWomanG1 += guess1[i];
      tempWomanG2 += guess2[i];
      tempWomanG3 += guess3[i];
      tempWomanG4 += guess4[i];
      tempWomanG5 += guess5[i];
    }
    if(sexSimp[i] ===3){
      tempOtherG1 += guess1[i];
      tempOtherG2 += guess2[i];
      tempOtherG3 += guess3[i];
      tempOtherG4 += guess4[i];
      tempOtherG5 += guess5[i];
    }
    if(mindSimp[i] ===1){
      tempArtisticG1 += guess1[i];
      tempArtisticG2 += guess2[i];
      tempArtisticG3 += guess3[i];
      tempArtisticG4 += guess4[i];
      tempArtisticG5 += guess5[i];
    }
    if(mindSimp[i] ===2){
      tempScientificG1 += guess1[i];
      tempScientificG2 += guess2[i];
      tempScientificG3 += guess3[i];
      tempScientificG4 += guess4[i];
      tempScientificG5 += guess5[i];
    }





    tempAvEuropeG1 = tempEuropeG1/EuropePeople
    tempAvEuropeG2 = tempEuropeG2/EuropePeople
    tempAvEuropeG3 = tempEuropeG3/EuropePeople
    tempAvEuropeG4 = tempEuropeG4/EuropePeople
    tempAvEuropeG5 = tempEuropeG5/EuropePeople

    tempAvNAmericaG1 = tempNAmericaG1/NAmericaPeople
    tempAvNAmericaG2 = tempNAmericaG2/NAmericaPeople
    tempAvNAmericaG3 = tempNAmericaG3/NAmericaPeople
    tempAvNAmericaG4 = tempNAmericaG4/NAmericaPeople
    tempAvNAmericaG5 = tempNAmericaG5/NAmericaPeople

    tempAvSAmericaG1 = tempSAmericaG1/SAmericaPeople
    tempAvSAmericaG2 = tempSAmericaG2/SAmericaPeople
    tempAvSAmericaG3 = tempSAmericaG3/SAmericaPeople
    tempAvSAmericaG4 = tempSAmericaG4/SAmericaPeople
    tempAvSAmericaG5 = tempSAmericaG5/SAmericaPeople

    tempAvAsiaG1 = tempAsiaG1/AsiaPeople
    tempAvAsiaG2 = tempAsiaG2/AsiaPeople
    tempAvAsiaG3 = tempAsiaG3/AsiaPeople
    tempAvAsiaG4 = tempAsiaG4/AsiaPeople
    tempAvAsiaG5 = tempAsiaG5/AsiaPeople

    tempAvAfricaG1 = tempAfricaG1/AfricaPeople
    tempAvAfricaG2 = tempAfricaG2/AfricaPeople
    tempAvAfricaG3 = tempAfricaG3/AfricaPeople
    tempAvAfricaG4 = tempAfricaG4/AfricaPeople
    tempAvAfricaG5 = tempAfricaG5/AfricaPeople

    tempAvAustraliaG1 = tempAustraliaG1/AustraliaPeople
    tempAvAustraliaG2 = tempAustraliaG2/AustraliaPeople
    tempAvAustraliaG3 = tempAustraliaG3/AustraliaPeople
    tempAvAustraliaG4 = tempAustraliaG4/AustraliaPeople
    tempAvAustraliaG5 = tempAustraliaG5/AustraliaPeople

    tempAvOG1 = tempOG1/OPeople
    tempAvOG2 = tempOG2/OPeople
    tempAvOG3 = tempOG3/OPeople
    tempAvOG4 = tempOG4/OPeople
    tempAvOG5 = tempOG5/OPeople

    tempAvSIG1 = tempSIG1/SIPeople
    tempAvSIG2 = tempSIG2/SIPeople
    tempAvSIG3 = tempSIG3/SIPeople
    tempAvSIG4 = tempSIG4/SIPeople
    tempAvSIG5 = tempSIG5/SIPeople

    tempAvAIG1 = tempAIG1/AIPeople
    tempAvAIG2 = tempAIG2/AIPeople
    tempAvAIG3 = tempAIG3/AIPeople
    tempAvAIG4 = tempAIG4/AIPeople
    tempAvAIG5 = tempAIG5/AIPeople

    tempAvGIG1 = tempGIG1/GIPeople
    tempAvGIG2 = tempGIG2/GIPeople
    tempAvGIG3 = tempGIG3/GIPeople
    tempAvGIG4 = tempGIG4/GIPeople
    tempAvGIG5 = tempGIG5/GIPeople

    tempAvManG1 = tempManG1/ManPeople
    tempAvManG2 = tempManG2/ManPeople
    tempAvManG3 = tempManG3/ManPeople
    tempAvManG4 = tempManG4/ManPeople
    tempAvManG5 = tempManG5/ManPeople

    tempAvWomanG1 = tempWomanG1/WomanPeople
    tempAvWomanG2 = tempWomanG2/WomanPeople
    tempAvWomanG3 = tempWomanG3/WomanPeople
    tempAvWomanG4 = tempWomanG4/WomanPeople
    tempAvWomanG5 = tempWomanG5/WomanPeople

    tempAvOtherG1 = tempOtherG1/OtherPeople
    tempAvOtherG2 = tempOtherG2/OtherPeople
    tempAvOtherG3 = tempOtherG3/OtherPeople
    tempAvOtherG4 = tempOtherG4/OtherPeople
    tempAvOtherG5 = tempOtherG5/OtherPeople

    tempAvArtisticG1 = tempArtisticG1/ArtisticPeople
    tempAvArtisticG2 = tempArtisticG2/ArtisticPeople
    tempAvArtisticG3 = tempArtisticG3/ArtisticPeople
    tempAvArtisticG4 = tempArtisticG4/ArtisticPeople
    tempAvArtisticG5 = tempArtisticG5/ArtisticPeople

    tempAvScientificG1 = tempScientificG1/ScientificPeople
    tempAvScientificG2 = tempScientificG2/ScientificPeople
    tempAvScientificG3 = tempScientificG3/ScientificPeople
    tempAvScientificG4 = tempScientificG4/ScientificPeople
    tempAvScientificG5 = tempScientificG5/ScientificPeople



    avEuropeG1 = (tempAvEuropeG1*300)/realGuess1
    avEuropeG2 = (tempAvEuropeG2*300)/realGuess2
    avEuropeG3 = (tempAvEuropeG3*300)/realGuess3
    avEuropeG4 = (tempAvEuropeG4*300)/realGuess4
    avEuropeG5 = (tempAvEuropeG5*300)/realGuess5

    totEuropeGuess = (avEuropeG1 + avEuropeG2 + avEuropeG3 + avEuropeG4 + avEuropeG5)/5

    avNAmericaG1 = (tempAvNAmericaG1*300)/realGuess1
    avNAmericaG2 = (tempAvNAmericaG2*300)/realGuess2
    avNAmericaG3 = (tempAvNAmericaG3*300)/realGuess3
    avNAmericaG4 = (tempAvNAmericaG4*300)/realGuess4
    avNAmericaG5 = (tempAvNAmericaG5*300)/realGuess5

    totNAmericaGuess = (avNAmericaG1 + avNAmericaG2 + avNAmericaG3 + avNAmericaG4 + avNAmericaG5)/5

    avSAmericaG1 = (tempAvSAmericaG1*300)/realGuess1
    avSAmericaG2 = (tempAvSAmericaG2*300)/realGuess2
    avSAmericaG3 = (tempAvSAmericaG3*300)/realGuess3
    avSAmericaG4 = (tempAvSAmericaG4*300)/realGuess4
    avSAmericaG5 = (tempAvSAmericaG5*300)/realGuess5

    totSAmericaGuess = (avSAmericaG1 + avSAmericaG2 + avSAmericaG3 + avSAmericaG4 + avSAmericaG5)/5

    avAsiaG1 = (tempAvAsiaG1*300)/realGuess1
    avAsiaG2 = (tempAvAsiaG2*300)/realGuess2
    avAsiaG3 = (tempAvAsiaG3*300)/realGuess3
    avAsiaG4 = (tempAvAsiaG4*300)/realGuess4
    avAsiaG5 = (tempAvAsiaG5*300)/realGuess5

    totAsiaGuess = (avAsiaG1 + avAsiaG2 + avAsiaG3 + avAsiaG4 + avAsiaG5)/5

    avAfricaG1 = (tempAvAfricaG1*300)/realGuess1
    avAfricaG2 = (tempAvAfricaG2*300)/realGuess2
    avAfricaG3 = (tempAvAfricaG3*300)/realGuess3
    avAfricaG4 = (tempAvAfricaG4*300)/realGuess4
    avAfricaG5 = (tempAvAfricaG5*300)/realGuess5

    totAfricaGuess = (avAfricaG1 + avAfricaG2 + avAfricaG3 + avAfricaG4 + avAfricaG5)/5

    avAustraliaG1 = (tempAvAustraliaG1*300)/realGuess1
    avAustraliaG2 = (tempAvAustraliaG2*300)/realGuess2
    avAustraliaG3 = (tempAvAustraliaG3*300)/realGuess3
    avAustraliaG4 = (tempAvAustraliaG4*300)/realGuess4
    avAustraliaG5 = (tempAvAustraliaG5*300)/realGuess5

    totAustraliaGuess = (avAustraliaG1 + avAustraliaG2 + avAustraliaG3 + avAustraliaG4 + avAustraliaG5)/5

    avOG1 = (tempAvOG1*300)/realGuess1
    avOG2 = (tempAvOG2*300)/realGuess2
    avOG3 = (tempAvOG3*300)/realGuess3
    avOG4 = (tempAvOG4*300)/realGuess4
    avOG5 = (tempAvOG5*300)/realGuess5

    totOGuess = (avOG1 + avOG2 + avOG3 + avOG4 + avOG5)/5


    avSIG1 = (tempAvSIG1*300)/realGuess1
    avSIG2 = (tempAvSIG2*300)/realGuess2
    avSIG3 = (tempAvSIG3*300)/realGuess3
    avSIG4 = (tempAvSIG4*300)/realGuess4
    avSIG5 = (tempAvSIG5*300)/realGuess5

    totSIGuess = (avSIG1 + avSIG2 + avSIG3 + avSIG4 + avSIG5)/5

    avAIG1 = (tempAvAIG1*300)/realGuess1
    avAIG2 = (tempAvAIG2*300)/realGuess2
    avAIG3 = (tempAvAIG3*300)/realGuess3
    avAIG4 = (tempAvAIG4*300)/realGuess4
    avAIG5 = (tempAvAIG5*300)/realGuess5

    totAIGuess = (avAIG1 + avAIG2 + avAIG3 + avAIG4 + avAIG5)/5


    avGIG1 = (tempAvGIG1*300)/realGuess1
    avGIG2 = (tempAvGIG2*300)/realGuess2
    avGIG3 = (tempAvGIG3*300)/realGuess3
    avGIG4 = (tempAvGIG4*300)/realGuess4
    avGIG5 = (tempAvGIG5*300)/realGuess5

    totGIGuess = (avGIG1 + avGIG2 + avGIG3 + avGIG4 + avGIG5)/5

    avManG1 = (tempAvManG1*300)/realGuess1
    avManG2 = (tempAvManG2*300)/realGuess2
    avManG3 = (tempAvManG3*300)/realGuess3
    avManG4 = (tempAvManG4*300)/realGuess4
    avManG5 = (tempAvManG5*300)/realGuess5

    totManGuess = (avManG1 + avManG2 + avManG3 + avManG4 + avManG5)/5


    avWomanG1 = (tempAvWomanG1*300)/realGuess1
    avWomanG2 = (tempAvWomanG2*300)/realGuess2
    avWomanG3 = (tempAvWomanG3*300)/realGuess3
    avWomanG4 = (tempAvWomanG4*300)/realGuess4
    avWomanG5 = (tempAvWomanG5*300)/realGuess5

    totWomanGuess = (avWomanG1 + avWomanG2 + avWomanG3 + avWomanG4 + avWomanG5)/5


    avOtherG1 = (tempAvOtherG1*300)/realGuess1
    avOtherG2 = (tempAvOtherG2*300)/realGuess2
    avOtherG3 = (tempAvOtherG3*300)/realGuess3
    avOtherG4 = (tempAvOtherG4*300)/realGuess4
    avOtherG5 = (tempAvOtherG5*300)/realGuess5

    totOtherGuess = (avOtherG1 + avOtherG2 + avOtherG3 + avOtherG4 + avOtherG5)/5

    avArtisticG1 = (tempAvArtisticG1*300)/realGuess1
    avArtisticG2 = (tempAvArtisticG2*300)/realGuess2
    avArtisticG3 = (tempAvArtisticG3*300)/realGuess3
    avArtisticG4 = (tempAvArtisticG4*300)/realGuess4
    avArtisticG5 = (tempAvArtisticG5*300)/realGuess5

    totArtisticGuess = (avArtisticG1 + avArtisticG2 + avArtisticG3 + avArtisticG4 + avArtisticG5)/5

    avScientificG1 = (tempAvScientificG1*300)/realGuess1
    avScientificG2 = (tempAvScientificG2*300)/realGuess2
    avScientificG3 = (tempAvScientificG3*300)/realGuess3
    avScientificG4 = (tempAvScientificG4*300)/realGuess4
    avScientificG5 = (tempAvScientificG5*300)/realGuess5

    totScientificGuess = (avScientificG1 + avScientificG2 + avScientificG3 + avScientificG4 + avScientificG5)/5


  }



}


function draw(){

  if(colorRect ===4){
    colorRect= 1
  }

  background(0);


  modWidth = ((window.innerWidth/2)-270)
  modHeight = ((window.innerHeight/2)-350)
  translate(modWidth,modHeight);

  //Tesxts
  push()
  translate(0,10)
  textAlign(RIGHT)
  textSize(13);
  textFont("Verdana");
  fill(187,187,187)
  text("Residence",40,70)
  fill(204,204,204)
  text("Age",40,210)

  fill(221,221,221)

  text("Gender",40,310)

  fill(238,238,238)
  text("Mind",40,390)


  if (colorRect ===1){
    fill(242,103,33)
  }
  if (colorRect ===2){
    fill(255,206,0)
  }
  if (colorRect === 3){
    fill(163,255,0)
  }
  if (colorRect === 4){
    fill(0,212,207)
  }

  text("Total",60,490)

  text("Guess1",60,530)
  text("Guess2",60,550)
  text("Guess3",60,570)
  text("Guess4",60,590)
  text("Guess5",60,610)

  //translate(0,-2)
  textSize(12);
  if (colorRect ===1){
    fill(131,21,24)
  }
  if (colorRect ===2){
    fill(111,101,0)
  }
  if (colorRect ===3){
    fill(9,0,103)
  }
  if (colorRect ===3){
    fill(0,103,12)
  }
  text("Europe",60,90)
  text("North America",60,110)
  text("South America",60,130)
  text("Asia",60,150)
  text("Africa",60,170)
  text("Australia",60,190)

  if (colorRect ===1){
    fill(160,28,32)
  }
  if (colorRect ===2){
    fill(137,124,0)
  }
  if (colorRect ===3){
    fill(0,29,135)
  }
  if (colorRect ===3){
    fill(29,156,0)
  }


  text("0-20",60,230)
  text("21-40",60,250)
  text("41-60",60,270)
  text("60+",60,290)

  if (colorRect ===1){
    fill(189,52,38)
  }
  if (colorRect ===2){
    fill(180,154,0)
  }
  if (colorRect ===3){
    fill(64,191,0)
  }
  if (colorRect ===4){
    fill(64,191,0)
  }

  text("Man",60,330)
  text("Woman",60,350)
  text("Other",60,370)

  if (colorRect ===1){
    fill(217,69,38)
  }
  if (colorRect ===2){
    fill(214,184,0)
  }

  if (colorRect ===3){
    fill(109,223,0)
  }
  if (colorRect ===4){
    fill(109,223,0)
  }

  text("Scientific",60,410)
  text("Artistic",60,430)
  pop()

fill(156,155,155)
  rect(buttonX,70,thick,thick);
  fill(187,187,187)
  rect(buttonX,210,thick,thick);
  fill(204,204,204)
  rect(buttonX,310,thick,thick);
  fill(221)
  rect(buttonX,390,thick,thick);
  fill(255,20)
  rect(buttonX + 60,90 , 30,532)
  rect(buttonX + 120,90 , 30,532)
  rect(buttonX + 180,90 , 30,532)
  rect(buttonX + 240,90 , 30,532)
  rect(buttonX + 300,90 , 30,532)







  if (colorRect ===1){
    fill(131,21,24)
    }
  if (colorRect ===2){
    fill(111,101,0)
  }
  if(colorRect ===3){
    fill(0, 103, 12)
  }

  rect(100,90,printEurope,thick);
  rect(100,110,printNAmerica,thick);
  rect(100,130,printSAmerica,thick);
  rect(100,150,printAsia,thick);
  rect(100,170,printAfrica,thick);
  rect(100,190,printAustralia,thick);


  rect(buttonX,90,thick,thick);
  rect(buttonX,110,thick,thick);
  rect(buttonX,130,thick,thick);
  rect(buttonX,150,thick,thick);
  rect(buttonX,170,thick,thick);
  rect(buttonX,190,thick,thick);

  if (colorRect ===1){
  fill(160,28,32)
}
  if (colorRect ===2){
  fill(137,124,0)
}
if (colorRect ===3){
  fill(29,156,0)
}



  //rect(100,210,450,thick);
  rect(100,230,printO,thick);
  rect(100,250,printSI,thick);
  rect(100,270,printAI,thick);
  rect(100,290,printGI,thick);


  rect(buttonX,230,thick,thick);
  rect(buttonX,250,thick,thick);
  rect(buttonX,270,thick,thick);
  rect(buttonX,290,thick,thick);

  if (colorRect ===1){
    fill(189,52,38)
  }
  if (colorRect ===2){
    fill(180,154,0)
  }
  if (colorRect ===3){
    fill(64,191,0)
  }




  //rect(100,310,450,thick);
  rect(100,330,printMan,thick);
  rect(100,350,printWoman,thick);
  rect(100,370,printOther,thick);


  rect(buttonX,330,thick,thick);
  rect(buttonX,350,thick,thick);
  rect(buttonX,370,thick,thick);

  if (colorRect ===1){
  fill(217,69,38)
}
if (colorRect ===2){
  fill(214,184,0)
}
  if (colorRect ===3){
  fill(109,223,0)
  }
  //rect(100,390,450,thick);
  rect(100,410,printScientific,thick);
  rect(100,430,printArtistic,thick);



  rect(buttonX,410,thick,thick);
  rect(buttonX,430,thick,thick);

  if (colorRect ===1){
    fill(242,103,33)
  }
  if (colorRect ===2){
    fill(255,206,0)
  }
  if (colorRect ===3){
    fill(64,191,0)
  }

  rect(100,490,printTotal,thick);
  rect(buttonX,490,thick,thick);





  rect(100,530,printGuess1,thick);
  rect(100,550,printGuess2,thick);
  rect(100,570,printGuess3,thick);
  rect(100,590,printGuess4,thick);
  rect(100,610,printGuess5,thick);


  rect(buttonX,530,thick,thick);
  rect(buttonX,550,thick,thick);
  rect(buttonX,570,thick,thick);
  rect(buttonX,590,thick,thick);
  rect(buttonX,610,thick,thick);


  if (colorRect ===1){
    fill(131,21,24)
  }
  if (colorRect ===2){
    fill(111,101,0)
  }
  if (colorRect ===3){
    fill(0,103,12)
  }



  rect(buttonX, 630, thick, 3)

  if (colorRect ===1){
    fill(160,28,32)
  }
  if (colorRect ===2){
    fill(137,124,0)
  }
  if (colorRect ===3){
    fill(29,156,0)
  }


  rect(buttonX, 633, thick, 3)

  if (colorRect ===1){
    fill(189,52,38)
  }
  if (colorRect ===2){
    fill(180,154,0)
  }
  if (colorRect ===3){
    fill(64,191,0)
  }


  rect(buttonX, 636, thick, 3)

  if (colorRect ===1){
    fill(217,69,38)
  }
  if (colorRect ===2){
    fill(214,184,0)
  }

  if (colorRect ===3){
    fill(109,223,0)
  }


  rect(buttonX, 639, thick, 3)


  fill(255)

  rect (buttonX, 650, thick, thick)

   fill(0)
   textStyle(BOLD);
  text("?",buttonX+2,660)
  textStyle(NORMAL)

  //////////Buttons/////////////



if(buttonCounter === 90){////europe
  printGuess1 = avEuropeG1;
  printGuess2 = avEuropeG2;
  printGuess3 = avEuropeG3;
  printGuess4 = avEuropeG4;
  printGuess5 = avEuropeG5;
  printTotal = totEuropeGuess
}



else if(buttonCounter === 110){////namerica
  printGuess1 = avNAmericaG1;
  printGuess2 = avNAmericaG2;
  printGuess3 = avNAmericaG3;
  printGuess4 = avNAmericaG4;
  printGuess5 = avNAmericaG5;
  printTotal = totNAmericaGuess
}


else if(buttonCounter === 130){////samerica
  printGuess1 = avSAmericaG1;
  printGuess2 = avSAmericaG2;
  printGuess3 = avSAmericaG3;
  printGuess4 = avSAmericaG4;
  printGuess5 = avSAmericaG5;
  printTotal = totSAmericaGuess
}



else if(buttonCounter === 150){////asia
  printGuess1 = avAsiaG1;
  printGuess2 = avAsiaG2;
  printGuess3 = avAsiaG3;
  printGuess4 = avAsiaG4;
  printGuess5 = avAsiaG5;
  printTotal = totAsiaGuess
}



else if(buttonCounter === 170){////africa
  printGuess1 = avAfricaG1;
  printGuess2 = avAfricaG2;
  printGuess3 = avAfricaG3;
  printGuess4 = avAfricaG4;
  printGuess5 = avAfricaG5;
  printTotal = totAfricaGuess
}



else if(buttonCounter === 190){////australia
  printGuess1 = avAustraliaG1;
  printGuess2 = avAustraliaG2;
  printGuess3 = avAustraliaG3;
  printGuess4 = avAustraliaG4;
  printGuess5 = avAustraliaG5;
  printTotal = totAustraliaGuess
}







else if(buttonCounter === 230){////0-20
  printGuess1 = avOG1;
  printGuess2 = avOG2;
  printGuess3 = avOG3;
  printGuess4 = avOG4;
  printGuess5 = avOG5;
  printTotal = totOGuess
}


else if(buttonCounter === 250){////21-40
  printGuess1 = avSIG1;
  printGuess2 = avSIG2;
  printGuess3 = avSIG3;
  printGuess4 = avSIG4;
  printGuess5 = avSIG5;
  printTotal = totSIGuess
}



else if(buttonCounter === 270){////41-60
  printGuess1 = avAIG1;
  printGuess2 = avAIG2;
  printGuess3 = avAIG3;
  printGuess4 = avAIG4;
  printGuess5 = avAIG5;
  printTotal = totAIGuess
}



else if(buttonCounter === 290){////61+
  printGuess1 = avGIG1;
  printGuess2 = avGIG2;
  printGuess3 = avGIG3;
  printGuess4 = avGIG4;
  printGuess5 = avGIG5;
  printTotal = totGIGuess
}

else if(buttonCounter === 330){////Man
  printGuess1 = avManG1;
  printGuess2 = avManG2;
  printGuess3 = avManG3;
  printGuess4 = avManG4;
  printGuess5 = avManG5;
  printTotal = totManGuess
}



else if(buttonCounter === 350){////Woman
  printGuess1 = avWomanG1;
  printGuess2 = avWomanG2;
  printGuess3 = avWomanG3;
  printGuess4 = avWomanG4;
  printGuess5 = avWomanG5;
  printTotal = totWomanGuess
}


else if(buttonCounter === 370){////Other
  printGuess1 = avOtherG1;
  printGuess2 = avOtherG2;
  printGuess3 = avOtherG3;
  printGuess4 = avOtherG4;
  printGuess5 = avOtherG5;
  printTotal = totOtherGuess
}



else if(buttonCounter === 410){////Scientific
  printGuess1 = avScientificG1;
  printGuess2 = avScientificG2;
  printGuess3 = avScientificG3;
  printGuess4 = avScientificG4;
  printGuess5 = avScientificG5;
  printTotal = totScientificGuess
}


else if(buttonCounter === 430){////Artistic
  printGuess1 = avArtisticG1;
  printGuess2 = avArtisticG2;
  printGuess3 = avArtisticG3;
  printGuess4 = avArtisticG4;
  printGuess5 = avArtisticG5;
  printTotal = totArtisticGuess
}


 else if (buttonCounter === 530){///GuessG1
  printEurope = avEuropeG1
  printNAmerica = avNAmericaG1
  printSAmerica = avSAmericaG1
  printAsia = avAsiaG1
  printAfrica = avAfricaG1
  printAustralia = avAustraliaG1
  printO = avOG1
  printSI = avSIG1
  printAI = avAIG1
  printGI = avGIG1
  printMan = avManG1
  printWoman = avWomanG1
  printOther = avOtherG1
  printArtistic = avArtisticG1
  printScientific = avScientificG1
}

else if (buttonCounter === 550){///GuessG2
  printEurope = avEuropeG2
  printNAmerica = avNAmericaG2
  printSAmerica = avSAmericaG2
  printAsia = avAsiaG2
  printAfrica = avAfricaG2
  printAustralia = avAustraliaG2
  printO = avOG2
  printSI = avSIG2
  printAI = avAIG2
  printGI = avGIG2
  printMan = avManG2
  printWoman = avWomanG2
  printOther = avOtherG2
  printArtistic = avArtisticG2
  printScientific = avScientificG2
}
else if (buttonCounter === 570){///GuessG3
  printEurope = avEuropeG3
  printNAmerica = avNAmericaG3
  printSAmerica = avSAmericaG3
  printAsia = avAsiaG3
  printAfrica = avAfricaG3
  printAustralia = avAustraliaG3
  printO = avOG3
  printSI = avSIG3
  printAI = avAIG3
  printGI = avGIG3
  printMan = avManG3
  printWoman = avWomanG3
  printOther = avOtherG3
  printArtistic = avArtisticG3
  printScientific = avScientificG3
}
else if (buttonCounter === 590){///GuessG4
  printEurope = avEuropeG4
  printNAmerica = avNAmericaG4
  printSAmerica = avSAmericaG4
  printAsia = avAsiaG4
  printAfrica = avAfricaG4
  printAustralia = avAustraliaG4
  printO = avOG4
  printSI = avSIG4
  printAI = avAIG4
  printGI = avGIG4
  printMan = avManG4
  printWoman = avWomanG4
  printOther = avOtherG4
  printArtistic = avArtisticG4
  printScientific = avScientificG4
}

else if (buttonCounter === 610){///GuessG5
  printEurope = avEuropeG5
  printNAmerica = avNAmericaG5
  printSAmerica = avSAmericaG5
  printAsia = avAsiaG5
  printAfrica = avAfricaG5
  printAustralia = avAustraliaG5
  printO = avOG5
  printSI = avSIG5
  printAI = avAIG5
  printGI = avGIG5
  printMan = avManG5
  printWoman = avWomanG5
  printOther = avOtherG5
  printArtistic = avArtisticG5
  printScientific = avScientificG5
}

else if (buttonCounter === 490){
  printEurope = totEuropeGuess
  printNAmerica = totNAmericaGuess
  printSAmerica = totSAmericaGuess
  printAsia = totAsiaGuess
  printAfrica = totAfricaGuess
  printAustralia = totAustraliaGuess
  printO = totOGuess
  printSI = totSIGuess
  printAI = totAIGuess
  printGI = totGIGuess
  printMan = totManGuess
  printWoman = totWomanGuess
  printOther = totOtherGuess
  printArtistic = totArtisticGuess
  printScientific = totScientificGuess
}




else if(buttonCounter === 70){////CONT
  printEurope = totEuropeGuess;
  printNAmerica = totNAmericaGuess;
  printSAmerica = totSAmericaGuess;
  printAsia = totAsiaGuess;
  printAfrica = totAfricaGuess;
  printAustralia = totAustraliaGuess;
}


else if(buttonCounter === 210){////AGE
  printO = totOGuess;
  printSI = totSIGuess;
  printAI = totAIGuess;
  printGI = totGIGuess;

}


else if(buttonCounter === 310){////SEX
  printMan = totManGuess;
  printWoman = totWomanGuess;
  printOther = totOtherGuess;

}




else if(buttonCounter === 390){////MIND
  printArtistic = totArtisticGuess;
  printScientific = totScientificGuess;


}

else{

  printEurope = 0
  printNAmerica = 0
  printSAmerica = 0
  printAsia = 0
  printAfrica = 0
  printAustralia = 0
  printO = 0
  printSI = 0
  printAI = 0
  printGI = 0
  printMan = 0
  printWoman = 0
  printOther = 0
  printArtistic = 0
  printScientific = 0
  printGuess1 = 0;
  printGuess2 = 0;
  printGuess3 = 0;
  printGuess4 = 0;
  printGuess5 = 0;
  printTotal = 0;
}

textSize(8)
fill(255,200)
text("100", buttonX+330, 630)
text("50", buttonX+180, 630)
text("0", buttonX+30, 630)
textSize(7)
fill(255,150)
text("10", buttonX+60, 630)
text("20", buttonX+90, 630)
text("30", buttonX+120, 630)
text("40", buttonX+150, 630)
text("60", buttonX+210, 630)
text("70", buttonX+240, 630)
text("80", buttonX+270, 630)
text("90", buttonX+300, 630)


if (infoButton === 1){
  push()
  translate(400,0)
  fill(0,200)
  rect(-800,0,window.innerWidth, window.innerHeight)
  fill(255)
  textSize(15)
  textStyle(BOLD)
  textAlign(CENTER)
  text("Instructions:", buttonX-200,140)
  textStyle(NORMAL)
  textAlign(LEFT)
  textSize(11)

  text("It's really Simple, each box you see is a button. There are different buttons:", buttonX-300, 180)
  text("These are the CATEGORIES, click on them to see", buttonX-250,220)
  text("the average of the GUESSES for each OPTION", buttonX-250,235)

  text("These are the OPTIONS, click on them to see", buttonX-250,260)
  text("the average of each of the five GUESSES", buttonX-250,275)
  text("and the total average", buttonX-250,290)

  text("These are the GUESSES, click on them to see", buttonX-250,315)
  text("the average GUESS for each OPTION ", buttonX-250,330)
  text("and the total average", buttonX-250,345)

  text("Click on this button to change color", buttonX-250,370)

  text("Click on this button to come back to this screen", buttonX-250,395)
  fill(150)
  rect(buttonX-270, 210,12,12)

  if (colorRect ===1){
    fill(131,21,24)
  }
  if (colorRect ===2){
    fill(111,101,0)
  }
  if(colorRect ===3){
    fill(0, 103, 12)
  }
  rect(buttonX-270, 250,12,12)

  if (colorRect ===1){
    fill(242,103,33)
  }
  if (colorRect ===2){
    fill(255,206,0)
  }
  if (colorRect ===3){
    fill(64,191,0)
  }
  stroke()
  rect(buttonX-270, 305,12,12)
  noStroke()
  fill(255)
  rect (buttonX -270, 386, thick, thick)

  fill(0)
  textStyle(BOLD);
  text("?",buttonX+2-270,396)
  textStyle(NORMAL)

  textAlign(RIGHT)
  textSize(12)

  if (colorRect ===1){
    fill(131,21,24)
  }
  if (colorRect ===2){
    fill(111,101,0)
  }
  if (colorRect ===3){
    fill(0,103,12)
  }



  rect(buttonX-270, 361, thick, 3)

  if (colorRect ===1){
    fill(160,28,32)
  }
  if (colorRect ===2){
    fill(137,124,0)
  }
  if (colorRect ===3){
    fill(29,156,0)
  }


  rect(buttonX-270, 364, thick, 3)

  if (colorRect ===1){
    fill(189,52,38)
  }
  if (colorRect ===2){
    fill(180,154,0)
  }
  if (colorRect ===3){
    fill(64,191,0)
  }


  rect(buttonX-270, 367, thick, 3)

  if (colorRect ===1){
    fill(217,69,38)
  }
  if (colorRect ===2){
    fill(214,184,0)
  }

  if (colorRect ===3){
    fill(109,223,0)
  }

  rect(buttonX-270, 370, thick, 3)
pop()
fill(255)



}








}



function mouseClicked() {



if(mouseX - modWidth >= buttonX && mouseX - modWidth <= buttonX + thick){

    if( mouseY - modHeight >= 70  && mouseY - modHeight <= 70  + thick ){
      buttonCounter = 70

    }
     else if( mouseY - modHeight >= 90  && mouseY - modHeight <= 90  + thick ){
      buttonCounter = 90
    }
    else if( mouseY - modHeight >= 110  && mouseY - modHeight <= 110  + thick ){
      buttonCounter = 110
    }
    else if( mouseY - modHeight >= 130  && mouseY - modHeight <= 130  + thick ){
      buttonCounter = 130
    }
    else if( mouseY - modHeight >= 150  && mouseY - modHeight <= 150  + thick ){
      buttonCounter = 150
    }
    else if( mouseY - modHeight >= 170  && mouseY - modHeight <= 170  + thick ){
      buttonCounter = 170
    }
    else if( mouseY - modHeight >= 190  && mouseY - modHeight <= 190  + thick ){
      buttonCounter = 190
    }
    else if( mouseY - modHeight >= 210  && mouseY - modHeight <= 210  + thick ){
      buttonCounter = 210
    }
    else if( mouseY - modHeight >= 230  && mouseY - modHeight <= 230  + thick ){
      buttonCounter = 230
    }
    else if( mouseY - modHeight >= 250  && mouseY - modHeight <= 250  + thick ){
      buttonCounter = 250
    }
    else if( mouseY - modHeight >= 270  && mouseY - modHeight <= 270  + thick ){
      buttonCounter = 270
    }
    else if( mouseY - modHeight >= 290  && mouseY - modHeight <= 290  + thick ){
      buttonCounter = 290
    }
    else if( mouseY - modHeight >= 310  && mouseY - modHeight <= 310  + thick ){
      buttonCounter = 310
    }
    else if( mouseY - modHeight >= 330  && mouseY - modHeight <= 330  + thick ){
      buttonCounter = 330
    }
    else if( mouseY - modHeight >= 350  && mouseY - modHeight <= 350  + thick ){
      buttonCounter = 350
    }
    else if( mouseY - modHeight >= 370  && mouseY - modHeight <= 370  + thick ){
      buttonCounter = 370
    }
    else if( mouseY - modHeight >= 390  && mouseY - modHeight <= 390  + thick ){
      buttonCounter = 390
    }
    else if( mouseY - modHeight >= 410  && mouseY - modHeight <= 410  + thick ){
      buttonCounter = 410
    }
    else if( mouseY - modHeight >= 430  && mouseY - modHeight <= 430  + thick ){
      buttonCounter = 430
    }
    else if( mouseY - modHeight >= 450  && mouseY - modHeight <= 450  + thick ){
      buttonCounter = 450
    }
    else if( mouseY - modHeight >= 470  && mouseY - modHeight <= 470  + thick ){
      buttonCounter = 470
    }
    else if( mouseY - modHeight >= 490  && mouseY - modHeight <= 490  + thick ){
      buttonCounter = 490
    }
    else if( mouseY - modHeight >= 510  && mouseY - modHeight <= 510  + thick ){
      buttonCounter = 510
    }
    else if( mouseY - modHeight >= 530  && mouseY - modHeight <= 530  + thick ){
      buttonCounter = 530
    }
    else if( mouseY - modHeight >= 550  && mouseY - modHeight <= 550  + thick ){
      buttonCounter = 550
    }
    else if( mouseY - modHeight >= 570  && mouseY - modHeight <= 570  + thick ){
      buttonCounter = 570
    }
    else if( mouseY - modHeight >= 590  && mouseY - modHeight <= 590  + thick ){
      buttonCounter = 590
    }
    else if( mouseY - modHeight >= 610  && mouseY - modHeight <= 610  + thick ){
      buttonCounter = 610
    }
    else if ( mouseY - modHeight >= 630  && mouseY - modHeight <= 630  + thick  ){
      colorRect = colorRect+1
    }
    else if ( mouseY - modHeight >= 650  && mouseY - modHeight <= 650  + thick  ){
      infoButton = 1;
      save(guess1, 'my.txt');
    }

}
else {
  buttonCounter= 0;
  infoButton = 0;
}



print(avEuropeG1)



print(avEuropeG2)
print(avEuropeG3)
return false


}
