let pageImage = [];
let pageNumber = 0;
let currentPageImg = null;

let hudImages = [];
let home = true;
let tut = true;

let headImage = [];
let headNumber = 0;
let headCount = 0;

let cnv;
let x;
let y;
let canvasW, canvasH;
let aspectW = 2063;
let aspectH = 3131;
let continueColor;

let tvImage = [];
let tvNumber = 0;

let tvLeftButton;
let tvRightButton;
let eightHonest;
let eightLie;
let eightGenuine;
let eightAnnoyed;

let earlyDeath = false;
let survive = false;
let lastPage = false;

  


function preload() {
  hudImages[0] = loadImage('homePage.jpg');
  hudImages[1] = loadImage('tutorial.jpg');
  
  headImage[0] = loadImage('pages/2_2.png');
  headImage[1] = loadImage('pages/2_3.png');
  headImage[2] = loadImage('pages/blank.png');
  
  tvImage[0] = loadImage('pages/2_4.png');
  tvImage[1] = loadImage('pages/2_5.png');
  tvImage[2] = loadImage('pages/2_6.png');
  tvImage[3] = loadImage('pages/2_7.png');
  tvImage[4] = loadImage('pages/2_8.png');
  
  
}

function setup() {
  calculateCanvasSize();
  cnv = createCanvas(canvasW, canvasH);
  cnv.style('touch-action', 'none');
  //cnv.elt.style['-webkit-user-select'] = 'none';
  //cnv.elt.style['user-select'] = 'none';
  //cnv.elt.style['-webkit-touch-callout'] = 'none';
  centerCanvas();
  updateCurrentImage();
  
  let canvasX = (windowWidth - width) / 2;
  let canvasY = (windowHeight - height) / 2;
  
  //home and tutorial buttons
  tutorialButton = createButton('Tutorial');
  tutorialButton.position(canvasX + (width * 0.25), canvasY + (height*0.77));
  tutorialButton.size(width*0.5, height*0.15);
  tutorialButton.style('color', '#000');
  tutorialButton.style('background-color', '#6a555b');
  tutorialButton.style('font-size', '50px');
  tutorialButton.style('font-weight', 'bold');
  tutorialButton.style('border', '7px solid #080808');
  tutorialButton.style('border-radius', '10px');
  tutorialButton.mousePressed(tutorialFunction);
  
  startButton = createButton('Start');
  startButton.position(canvasX + (width * 0.28), canvasY + (height*0.52));
  startButton.size(width*0.45, height*0.13);
  startButton.style('color', '#000');
  startButton.style('background-color', '#7a2c2c');
  startButton.style('font-size', '50px');
  startButton.style('font-weight', 'bold');
  startButton.style('border', '7px solid #1b1212');
  startButton.style('border-radius', '10px');
  startButton.mousePressed(startFunction);
  
  //tv buttons
  tvLeftButton = createButton('<');
  tvLeftButton.position(canvasX + (width * 0.23), canvasY + (height*0.77));
  tvLeftButton.size(width*0.2, height*0.15);
  tvLeftButton.style('color', '#000');
  tvLeftButton.style('background-color', '#94a1c1');
  tvLeftButton.style('font-size', '50px');
  tvLeftButton.style('font-weight', 'bold');
  tvLeftButton.style('border', '7px solid #2a354f');
  tvLeftButton.style('border-radius', '10px');
  tvLeftButton.mousePressed(tvChannelBack);
  
  tvRightButton = createButton('>');
  tvRightButton.position(canvasX + (width * 0.58), canvasY + (height*0.77));
  tvRightButton.size(width*0.2, height*0.15);
  tvRightButton.style('color', '#000');
  tvRightButton.style('background-color', '#94a1c1');
  tvRightButton.style('font-size', '50px');
  tvRightButton.style('font-weight', 'bold');
  tvRightButton.style('border', '7px solid #2a354f');
  tvRightButton.style('border-radius', '10px');
  tvRightButton.mousePressed(tvChannelForward);
  
  //page 8 interaction buttons
  eightHonest = createButton('Be Honest');
  eightHonest.position(canvasX + (width * 0.15), canvasY + (height*0.63));
  eightHonest.size(width*0.7, height*0.15);
  eightHonest.style('color', '#000');
  eightHonest.style('background-color', '#94a1c1');
  eightHonest.style('font-size', '24px');
  eightHonest.style('font-weight', 'bold');
  eightHonest.style('border', '7px solid #2a354f');
  eightHonest.style('border-radius', '10px');
  eightHonest.mousePressed(eightHonestFunction);
  
  eightLie = createButton('Lie');
  eightLie.position(canvasX + (width * 0.15), canvasY + (height*0.8));
  eightLie.size(width*0.7, height*0.15);
  eightLie.style('color', '#000');
  eightLie.style('background-color', '#94a1c1');
  eightLie.style('font-size', '24px');
  eightLie.style('font-weight', 'bold');
  eightLie.style('border', '7px solid #2a354f');
  eightLie.style('border-radius', '10px');
  eightLie.mousePressed(eightLieFunction);
  
  eightGenuine = createButton('Genuine');
  eightGenuine.position(canvasX + (width * 0.15), canvasY + (height*0.63));
  eightGenuine.size(width*0.7, height*0.15);
  eightGenuine.style('color', '#000');
  eightGenuine.style('background-color', '#94a1c1');
  eightGenuine.style('font-size', '24px');
  eightGenuine.style('font-weight', 'bold');
  eightGenuine.style('border', '7px solid #2a354f');
  eightGenuine.style('border-radius', '10px');
  eightGenuine.mousePressed(eightGenuineFunction);
  
  eightAnnoyed = createButton('Annoyed');
  eightAnnoyed.position(canvasX + (width * 0.15), canvasY + (height*0.8));
  eightAnnoyed.size(width*0.7, height*0.15);
  eightAnnoyed.style('color', '#000');
  eightAnnoyed.style('background-color', '#94a1c1');
  eightAnnoyed.style('font-size', '24px');
  eightAnnoyed.style('font-weight', 'bold');
  eightAnnoyed.style('border', '7px solid #2a354f');
  eightAnnoyed.style('border-radius', '10px');
  eightAnnoyed.mousePressed(eightAnnoyedFunction);
  
  //page 27 interaction buttons
  twnSvnLie = createButton('Not sure');
  twnSvnLie.position(canvasX + (width * 0.15), canvasY + (height*0.69));
  twnSvnLie.size(width*0.7, height*0.13);
  twnSvnLie.style('color', '#000');
  twnSvnLie.style('background-color', '#663741');
  twnSvnLie.style('font-size', '24px');
  twnSvnLie.style('font-weight', 'bold');
  twnSvnLie.style('border', '7px solid #150d0f');
  twnSvnLie.style('border-radius', '10px');
  twnSvnLie.mousePressed(twnSvnLieFunction);
  
  twnSvnTruth = createButton('He died');
  twnSvnTruth.position(canvasX + (width * 0.15), canvasY + (height*0.83));
  twnSvnTruth.size(width*0.7, height*0.13);
  twnSvnTruth.style('color', '#000');
  twnSvnTruth.style('background-color', '#663741');
  twnSvnTruth.style('font-size', '24px');
  twnSvnTruth.style('font-weight', 'bold');
  twnSvnTruth.style('border', '7px solid #150d0f');
  twnSvnTruth.style('border-radius', '10px');
  twnSvnTruth.mousePressed(twnSvnTruthFunction);
  
  twnSvnLieBack = createButton('Tell her what you saw');
  twnSvnLieBack.position(canvasX + (width * 0.15), canvasY + (height*0.69));
  twnSvnLieBack.size(width*0.7, height*0.13);
  twnSvnLieBack.style('color', '#000');
  twnSvnLieBack.style('background-color', '#663741');
  twnSvnLieBack.style('font-size', '24px');
  twnSvnLieBack.style('font-weight', 'bold');
  twnSvnLieBack.style('border', '7px solid #150d0f');
  twnSvnLieBack.style('border-radius', '10px');
  twnSvnLieBack.mousePressed(twnSvnLieBackFunction);
  
  twnSvnLieCont = createButton('Say nothing');
  twnSvnLieCont.position(canvasX + (width * 0.15), canvasY + (height*0.83));
  twnSvnLieCont.size(width*0.7, height*0.13);
  twnSvnLieCont.style('color', '#000');
  twnSvnLieCont.style('background-color', '#663741');
  twnSvnLieCont.style('font-size', '24px');
  twnSvnLieCont.style('font-weight', 'bold');
  twnSvnLieCont.style('border', '7px solid #150d0f');
  twnSvnLieCont.style('border-radius', '10px');
  twnSvnLieCont.mousePressed(twnSvnLieContFunction);
  
  twnSvnTruthBack = createButton('Im joking!');
  twnSvnTruthBack.position(canvasX + (width * 0.15), canvasY + (height*0.69));
  twnSvnTruthBack.size(width*0.7, height*0.13);
  twnSvnTruthBack.style('color', '#000');
  twnSvnTruthBack.style('background-color', '#663741');
  twnSvnTruthBack.style('font-size', '24px');
  twnSvnTruthBack.style('font-weight', 'bold');
  twnSvnTruthBack.style('border', '7px solid #150d0f');
  twnSvnTruthBack.style('border-radius', '10px');
  twnSvnTruthBack.mousePressed(twnSvnTruthBackFunction);
  
  twnSvnTruthCont = createButton('Say nothing');
  twnSvnTruthCont.position(canvasX + (width * 0.15), canvasY + (height*0.83));
  twnSvnTruthCont.size(width*0.7, height*0.13);
  twnSvnTruthCont.style('color', '#000');
  twnSvnTruthCont.style('background-color', '#663741');
  twnSvnTruthCont.style('font-size', '24px');
  twnSvnTruthCont.style('font-weight', 'bold');
  twnSvnTruthCont.style('border', '7px solid #150d0f');
  twnSvnTruthCont.style('border-radius', '10px');
  twnSvnTruthCont.mousePressed(twnSvnTruthContFunction);
  
  //continue buttons for interactions pages
  continueBut = createButton('continue');
  //continueBut.position(width*0.15, height*0.72);
  continueBut.size(width*0.7, height*0.14);
  continueBut.style('color', '#000');
  //continueBut.style('background-color', '#663741');
  continueBut.style('font-size', '24px');
  continueBut.style('font-weight', 'bold');
  //continueBut.style('border', '7px solid #150d0f');
  continueBut.style('border-radius', '10px');
  continueBut.mousePressed(continueButtonFunc);
  
  homeButton = createButton('Start Over');
  homeButton.position(canvasX + (width * 0.26), canvasY + (height*0.4));
  homeButton.size(width*0.5, height*0.15);
  homeButton.style('color', '#000');
  homeButton.style('background-color', '#7a2c2c');
  homeButton.style('font-size', '50px');
  homeButton.style('font-weight', 'bold');
  homeButton.style('border', '7px solid #1b1212');
  homeButton.style('border-radius', '10px');
  homeButton.mousePressed(startOverFunction);
  
  deadButton = createButton('YOU DIED');
  deadButton.position(canvasX + (width * 0.16), canvasY + (height*0.07));
  deadButton.size(width*0.7, height*0.3);
  deadButton.style('color', '#000');
  deadButton.style('background-color', 'rgba(122, 44, 44, 0.7)');
  deadButton.style('font-size', '70px');
  deadButton.style('font-weight', 'bold');
  deadButton.style('border', '7px solid #1b1212');
  deadButton.style('border-radius', '10px');
  
  survButton = createButton('YOU LIVED');
  survButton.position(canvasX + (width * 0.16), canvasY + (height*0.07));
  survButton.size(width*0.7, height*0.3);
  survButton.style('color', '#000');
  survButton.style('background-color', 'rgba(122, 44, 44, 0.7)');
  survButton.style('font-size', '70px');
  survButton.style('font-weight', 'bold');
  survButton.style('border', '7px solid #1b1212');
  survButton.style('border-radius', '10px');
}

function draw() {
  background(220);
  //console.log(windowWidth + ' ' + windowHeight);
  
  let canvasX = (windowWidth - width) / 2;
  let canvasY = (windowHeight - height) / 2;
  
  if (pageNumber < 40) {
    continueBut.position(canvasX + (width * 0.15), canvasY + (height*0.72));
    continueBut.style('background-color', '#94a1c1');
    continueBut.style('border', '7px solid #2a354f');
  } else {
    continueBut.position(canvasX + (width * 0.15), canvasY + (height*0.76));
    continueBut.style('background-color', '#663741');
    continueBut.style('border', '7px solid #150d0f');
  }
  
  if (home == true) {
    image(hudImages[0], 0, 0, width, height, 0, 0, 2063, 3131, CONTAIN);
  } else if (tut == true) {
    image(hudImages[1], 0, 0, width, height, 0, 0, 2063, 3131, CONTAIN);
  } else {
  
  //load pages
  image(currentPageImg, 0, 0, width, height, 0, 0, 2063, 3131, CONTAIN);
  
  //load the head for the second page
  if (pageNumber == 5) {
    image(tvImage[tvNumber], 0, 0, width, height, 0, 0, 2063, 3131, CONTAIN);
    image(headImage[headNumber], 0, 0, width, height, 0, 0, 2063, 3131, CONTAIN);
  }
  }
  //show or hide buttons
  if (home == true) {
    tutorialButton.show();
  } else {
    tutorialButton.hide();
  }
  
  if (tut == true && home == false) {
    startButton.show();
  } else {
    startButton.hide();
  }
  
  if (pageNumber == 5) {
    tvLeftButton.show();
    tvRightButton.show();
  } else {
    tvLeftButton.hide();
    tvRightButton.hide();
  }
  
  if (pageNumber == 29) {
    eightHonest.show();
    eightLie.show();
  } else {
    eightHonest.hide();
    eightLie.hide();
  }
  if (pageNumber == 30) {
    eightGenuine.show();
    eightAnnoyed.show();
  } else {
    eightGenuine.hide();
    eightAnnoyed.hide();
  }
  
  if (pageNumber == 108) {
    twnSvnLie.show();
    twnSvnTruth.show();
  } else {
    twnSvnLie.hide();
    twnSvnTruth.hide();
  }
  
  if (pageNumber == 110) {
    twnSvnLieBack.show();
    twnSvnLieCont.show();
  } else {
    twnSvnLieBack.hide();
    twnSvnLieCont.hide();
  }
  
  if(pageNumber == 114) {
    twnSvnTruthBack.show();
    twnSvnTruthCont.show();
  } else {
    twnSvnTruthBack.hide();
    twnSvnTruthCont.hide();
  }
  
  if(pageNumber == 111 || pageNumber == 112 || pageNumber == 117 || pageNumber == 109 || pageNumber == 113 || pageNumber == 115 || pageNumber == 116 || pageNumber == 33 || pageNumber == 32 || pageNumber == 31) {
    continueBut.show();
  } else {
    continueBut.hide();
  }
  
  if(lastPage == false) {
    deadButton.hide();
    survButton.hide();
    homeButton.hide();
  } else if (lastPage == true && earlyDeath == true) {
    deadButton.show();
    homeButton.show();
  } else if (lastPage == true && survive == true) {
    survButton.show();
    homeButton.show();
  } else if (lastPage == true) {
    deadButton.show();
    homeButton.show();
  }
  
}

function touchStarted() {
  handleInteraction();
}

function mousePressed() {
  handleInteraction();
}

function handleInteraction() {
  //if mouse is on top right side of screen, go next page
  if (home == false && tut == false) {
    if ((pageNumber >= 29 && pageNumber <= 33) || (pageNumber >=108 && pageNumber <= 117)) {
      //do nothing
    } else if (mouseX > width*0.5 && mouseY < height*0.5) {
        if (pageNumber == 33 || pageNumber == 32 || pageNumber == 31) {
        pageNumber = 34;
        updateCurrentImage();
      } //else if (pageNumber == 193 || pageNumber == 168 || pageNumber == 156) {
        //do nothing
       else if (pageNumber == 67 && survive == true) {
        pageNumber = 169;
         updateCurrentImage();
      } else if (pageNumber == 156 || pageNumber == 168) {
        lastPage = true;
      } else if (pageNumber == 193) {
        lastPage = true;
      } else {
        pageNumber++;
        updateCurrentImage();
        
      }
      //console.log(pageNumber);
    } else if (mouseX < width*0.5 && mouseY < height*0.5) {
      if (earlyDeath == true && pageNumber == 157) {
        //do nothing
      } else if (survive == true && pageNumber == 169) {
        pageNumber = 67;
        updateCurrentImage();
      } else if (pageNumber == 0 || pageNumber == 118 || (pageNumber >= 29 && pageNumber <= 34)) {
        //do nothing
      } else {
        pageNumber--;
        updateCurrentImage();
      }
    }
  }
}

//tv channel stuff
function tvChannelBack() {
  //make head fall
  headCount++;
  if (headCount == 3) {
    headNumber++;
  } else if (headCount == 6) {
    headNumber++;
  } 
  
  //go back a channel
  if (tvNumber == 0) {
    tvNumber = 4;
  } else {
    tvNumber--;
  }
}

function tvChannelForward() {
  //make head fall
  headCount++;
  if (headCount == 3) {
    headNumber++;
  } else if (headCount == 6) {
    headNumber++;
  } 
  
  //go forward a channel
  if (tvNumber == 4) {
    tvNumber = 0;
  } else {
    tvNumber++;
  }
}

function eightHonestFunction() {
  pageNumber = 30;
  updateCurrentImage();
}

function eightLieFunction() {
  pageNumber = 33;
  updateCurrentImage();
  survive = true;
}

function eightGenuineFunction() {
  pageNumber = 32;
  updateCurrentImage();
}

function eightAnnoyedFunction() {
  pageNumber = 31;
  updateCurrentImage();
  survive = true;
}

function twnSvnLieFunction() {
  pageNumber = 109;
  updateCurrentImage();
  earlyDeath = true;
}

function twnSvnTruthFunction() {
  pageNumber = 113;
  updateCurrentImage();
}

function twnSvnLieBackFunction() {
  pageNumber = 111;
  updateCurrentImage();
  earlyDeath = false;
}

function twnSvnLieContFunction() {
  pageNumber = 117;
  updateCurrentImage();
}

function twnSvnTruthBackFunction() {
  pageNumber = 115;
  updateCurrentImage();
  earlyDeath = true;
}

function twnSvnTruthContFunction() {
  pageNumber = 116;
  updateCurrentImage();
}

function continueButtonFunc() {
  if (pageNumber == 112 || pageNumber == 115) {
    pageNumber = 117;
    updateCurrentImage();
    //console.log(pageNumber);
  } else if (pageNumber == 117 && earlyDeath == true) {
    pageNumber = 157;
    updateCurrentImage();
  } else if (pageNumber == 33 || pageNumber == 32 || pageNumber == 31) {
    pageNumber = 34;
    updateCurrentImage();
  } else {
    pageNumber++;
    updateCurrentImage();
  }
}

function calculateCanvasSize() {
  let windowRatio = windowWidth/windowHeight;
  let targetRatio = aspectW/aspectH;
  
  if (windowRatio > targetRatio) {
    canvasH = windowHeight;
    canvasW = canvasH * targetRatio;
  } else {
    canvasW = windowWidth;
    canvasH = canvasW / targetRatio;
  }
}

function tutorialFunction() {
  home = false;
}

function startFunction() {
  tut = false;
}

function startOverFunction() {
  //location.reload();
  
  home = true;
  tut = true;
  
  pageNumber = 0;
  earlyDeath = false; 
  survive = false;
  lastPage = false;
  headNumber = 0;
  headCount = 0;
  tvNumber = 0;
  updateCurrentImage();
}
  
function updateCurrentImage() {
  pageImage[0] = "pages/1_1.jpg";
  pageImage[1] = 'pages/1_2.jpg';
  pageImage[2] = 'pages/1_3.jpg';
  pageImage[3] = 'pages/1_4.jpg';
  pageImage[4] = 'pages/1_5.jpg';
  pageImage[5] = 'pages/2.jpg';
  pageImage[6] = 'pages/3_1.jpg';
  pageImage[7] = 'pages/3_2.jpg';
  pageImage[8] = 'pages/3_3.jpg';
  pageImage[9] = 'pages/3_4.jpg';
  pageImage[10] = 'pages/4_1.jpg';
  pageImage[11] = 'pages/4_2.jpg';
  pageImage[12] = 'pages/4_3.jpg';
  pageImage[13] = 'pages/4_4.jpg';
  pageImage[14] = 'pages/5_1.jpg';
  pageImage[15] = 'pages/5_2.jpg';
  pageImage[16] = 'pages/5_3.jpg';
  pageImage[17] = 'pages/5_4.jpg';
  pageImage[18] = 'pages/5_5.jpg';
  pageImage[19] = 'pages/6_1.jpg';
  pageImage[20] = 'pages/6_2.jpg';
  pageImage[21] = 'pages/6_3.jpg';
  pageImage[22] = 'pages/6_4.jpg';
  pageImage[23] = 'pages/6_5.jpg';
  pageImage[24] = 'pages/7_1.jpg';
  pageImage[25] = 'pages/7_2.jpg';
  pageImage[26] = 'pages/7_3.jpg';
  pageImage[27] = 'pages/7_4.jpg';
  pageImage[28] = 'pages/7_5.jpg';
  pageImage[29] = 'pages/8_1.jpg';
  pageImage[30] = 'pages/8_2.jpg';
  pageImage[31] = 'pages/8_3.jpg';
  pageImage[32] = 'pages/8_4.jpg';
  pageImage[33] = 'pages/8_5.jpg';
  pageImage[34] = 'pages/9_1.jpg';
  pageImage[35] = 'pages/9_2.jpg';
  pageImage[36] = 'pages/9_3.jpg';
  pageImage[37] = 'pages/9_4.jpg';
  pageImage[38] = 'pages/9_5.jpg';
  pageImage[39] = 'pages/10_1.jpg';
  pageImage[40] = 'pages/10_2.jpg';
  pageImage[41] = 'pages/10_3.jpg';
  pageImage[42] = 'pages/10_4.jpg';
  pageImage[43] = 'pages/10_5.jpg';
  pageImage[44] = 'pages/11_1.jpg';
  pageImage[45] = 'pages/11_2.jpg';
  pageImage[46] = 'pages/11_3.jpg';
  pageImage[47] = 'pages/11_4.jpg';
  pageImage[48] = 'pages/11_5.jpg';
  pageImage[49] = 'pages/12_1.jpg';
  pageImage[50] = 'pages/12_2.jpg';
  pageImage[51] = 'pages/12_3.jpg';
  pageImage[52] = 'pages/12_4.jpg';
  pageImage[53] = 'pages/12_5.jpg';
  pageImage[54] = 'pages/13_1.jpg';
  pageImage[55] = 'pages/13_2.jpg';
  pageImage[56] = 'pages/13_3.jpg';
  pageImage[57] = 'pages/13_4.jpg';
  pageImage[58] = 'pages/13_5.jpg';
  pageImage[59] = 'pages/14_1.jpg';
  pageImage[60] = 'pages/14_2.jpg';
  pageImage[61] = 'pages/15_1.jpg';
  pageImage[62] = 'pages/15_2.jpg';
  pageImage[63] = 'pages/15_3.jpg';
  pageImage[64] = 'pages/16_1.jpg';
  pageImage[65] = 'pages/16_2.jpg';
  pageImage[66] = 'pages/16_3.jpg';
  pageImage[67] = 'pages/16_4.jpg';
  pageImage[68] = 'pages/17_1.jpg';
  pageImage[69] = 'pages/17_2.jpg';
  pageImage[70] = 'pages/17_3.jpg';
  pageImage[71] = 'pages/17_4.jpg';
  pageImage[72] = 'pages/17_5.jpg';
  pageImage[73] = 'pages/18_1.jpg';
  pageImage[74] = 'pages/18_2.jpg';
  pageImage[75] = 'pages/18_3.jpg';
  pageImage[76] = 'pages/18_4.jpg';
  pageImage[77] = 'pages/19_1.jpg';
  pageImage[78] = 'pages/19_2.jpg';
  pageImage[79] = 'pages/19_3.jpg';
  pageImage[80] = 'pages/19_4.jpg';
  pageImage[81] = 'pages/19_5.jpg';
  pageImage[82] = 'pages/20_1.jpg';
  pageImage[83] = 'pages/20_2.jpg';
  pageImage[84] = 'pages/20_3.jpg';
  pageImage[85] = 'pages/20_4.jpg';
  pageImage[86] = 'pages/21_1.jpg';
  pageImage[87] = 'pages/21_2.jpg';
  pageImage[88] = 'pages/21_3.jpg';
  pageImage[89] = 'pages/21_4.jpg';
  pageImage[90] = 'pages/22_1.jpg';
  pageImage[91] = 'pages/22_2.jpg';
  pageImage[92] = 'pages/22_3.jpg';
  pageImage[93] = 'pages/23_1.jpg';
  pageImage[94] = 'pages/23_2.jpg';
  pageImage[95] = 'pages/23_3.jpg';
  pageImage[96] = 'pages/23_4.jpg';
  pageImage[97] = 'pages/24_1.jpg';
  pageImage[98] = 'pages/24_2.jpg';
  pageImage[99] = 'pages/24_3.jpg';
  pageImage[100] = 'pages/25_1.jpg';
  pageImage[101] = 'pages/25_2.jpg';
  pageImage[102] = 'pages/25_3.jpg';
  pageImage[103] = 'pages/25_4.jpg';
  pageImage[104] = 'pages/26_1.jpg';
  pageImage[105] = 'pages/26_2.jpg';
  pageImage[106] = 'pages/26_3.jpg';
  pageImage[107] = 'pages/26_4.jpg';
  pageImage[108] = 'pages/27_start.jpg';
  pageImage[109] = 'pages/27_gaslight.jpg';
  pageImage[110] = 'pages/27_gaslightResponse.jpg';
  pageImage[111] = 'pages/27_gaslightBackout.jpg';
  pageImage[112] = 'pages/27_gaslightBackout2.jpg';
  pageImage[113] = 'pages/27_truth.jpg';
  pageImage[114] = 'pages/27_truthResponse.jpg';
  pageImage[115] = 'pages/27_truthBackout.jpg';
  pageImage[116] = 'pages/27_truthContinue.jpg';
  pageImage[117] = 'pages/27_end.jpg';
  pageImage[118] = 'pages/28_1.jpg';
  pageImage[119] = 'pages/28_2.jpg';
  pageImage[120] = 'pages/28_3.jpg';
  pageImage[121] = 'pages/29_1.jpg';
  pageImage[122] = 'pages/29_2.jpg';
  pageImage[123] = 'pages/29_3.jpg';
  pageImage[124] = 'pages/29_4.jpg';
  pageImage[125] = 'pages/29_5.jpg';
  pageImage[126] = 'pages/30_1.jpg';
  pageImage[127] = 'pages/30_2.jpg';
  pageImage[128] = 'pages/30_3.jpg';
  pageImage[129] = 'pages/31_1.jpg';
  pageImage[130] = 'pages/31_2.jpg';
  pageImage[131] = 'pages/31_3.jpg';
  pageImage[132] = 'pages/31_4.jpg';
  pageImage[133] = 'pages/32_1.jpg';
  pageImage[134] = 'pages/32_2.jpg';
  pageImage[135] = 'pages/32_3.jpg';
  pageImage[136] = 'pages/33_1.jpg';
  pageImage[137] = 'pages/33_2.jpg';
  pageImage[138] = 'pages/33_3.jpg';
  pageImage[139] = 'pages/33_4.jpg';
  pageImage[140] = 'pages/33_5.jpg';
  pageImage[141] = 'pages/34_1.jpg';
  pageImage[142] = 'pages/34_2.jpg';
  pageImage[143] = 'pages/34_3.jpg';
  pageImage[144] = 'pages/34_4.jpg';
  pageImage[145] = 'pages/35_1.jpg';
  pageImage[146] = 'pages/35_2.jpg';
  pageImage[147] = 'pages/35_3.jpg';
  pageImage[148] = 'pages/35_4.jpg';
  pageImage[149] = 'pages/36_1.jpg';
  pageImage[150] = 'pages/36_2.jpg';
  pageImage[151] = 'pages/36_3.jpg';
  pageImage[152] = 'pages/36_4.jpg';
  pageImage[153] = 'pages/36_5.jpg';
  pageImage[154] = 'pages/37_1.jpg';
  pageImage[155] = 'pages/37_2.jpg';
  pageImage[156] = 'pages/37_3.jpg';
  
  pageImage[157] = 'pages/28_2_1.jpg';
  pageImage[158] = 'pages/28_2_2.jpg';
  pageImage[159] = 'pages/28_2_3.jpg';
  pageImage[160] = 'pages/28_2_4.jpg';
  pageImage[161] = 'pages/29_2_1.jpg';
  pageImage[162] = 'pages/29_2_2.jpg';
  pageImage[163] = 'pages/29_2_3.jpg';
  pageImage[164] = 'pages/29_2_4.jpg';
  pageImage[165] = 'pages/30_2_1.jpg';
  pageImage[166] = 'pages/30_2_2.jpg';
  pageImage[167] = 'pages/30_2_3.jpg';
  pageImage[168] = 'pages/30_2_4.jpg';
  
  pageImage[169] = 'pages/17_2_1.jpg';
  pageImage[170] = 'pages/17_2_2.jpg';
  pageImage[171] = 'pages/17_2_3.jpg';
  pageImage[172] = 'pages/18_2_1.jpg';
  pageImage[173] = 'pages/18_2_2.jpg';
  pageImage[174] = 'pages/18_2_3.jpg';
  pageImage[175] = 'pages/18_2_4.jpg';
  pageImage[176] = 'pages/19_2_1.jpg';
  pageImage[177] = 'pages/19_2_2.jpg';
  pageImage[178] = 'pages/19_2_3.jpg';
  pageImage[179] = 'pages/19_2_4.jpg';
  pageImage[180] = 'pages/19_2_5.jpg';
  pageImage[181] = 'pages/20_2_1.jpg';
  pageImage[182] = 'pages/20_2_2.jpg';
  pageImage[183] = 'pages/20_2_3.jpg';
  pageImage[184] = 'pages/20_2_4.jpg';
  pageImage[185] = 'pages/20_2_5.jpg';
  pageImage[186] = 'pages/21_2_1.jpg';
  pageImage[187] = 'pages/21_2_2.jpg';
  pageImage[188] = 'pages/21_2_3.jpg';
  pageImage[189] = 'pages/21_2_4.jpg';
  pageImage[190] = 'pages/22_2_1.jpg';
  pageImage[191] = 'pages/22_2_2.jpg';
  pageImage[192] = 'pages/22_2_3.jpg';
  pageImage[193] = 'pages/22_2_4.jpg';
  
  if (currentPageImg) {
    currentPageImg = null;
  }
  
  if (home == true) {
    image(hudImages[0], 0, 0, width, height, 0, 0, 2063, 3131, CONTAIN);
  } else if (tut == true) {
    image(hudImages[1], 0, 0, width, height, 0, 0, 2063, 3131, CONTAIN);
  } 
  
  currentPageImg = loadImage(pageImage[pageNumber]);
  
}

function centerCanvas () {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  cnv.position(x,y);
}

//if window is resized, resize the canvas
function windowResized() {
  calculateCanvasSize();
  resizeCanvas(canvasW, canvasH);
}
