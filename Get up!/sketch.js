let angle = 0; // 角度
let r = 150; // 円周の半径
let height = 400; // 高さ（y）
let width = 400; // 幅（x）

function setup() { // 最初に実行される関数
  createCanvas(height, width); // canvasの作成
  mic = new p5.AudioIn();
  mic.start();
}
 
function draw() { // 毎フレーム実行される関数
  let vol = mic.getLevel() * 10;
  //console.log(vol);
  noStroke();
  
  if(vol > 0.1){ // 起きた時の処理
    // 背景
    background(135, 206, 235);
    
    // 回っている丸の色の変更
    circle_draw(255, 99, 71);
    
    // 地面の色の変更
    square_draw(210, 105, 30);
    
    // 雲の描画
    fill(256);
    rect(0, 10, 120, 80, 80);
    rect(300, 110, 130, 80, 80);
    
    // 棒人間の描画
    circle(180, 160, 50);
    
    stroke(256);
    strokeWeight(5); // 線の太さ（1 ピクセル）
    
    // 体
    line(180, 160, 180, 290);
    
    // 足
    line(180, 290, 150, 350);
    line(180, 290, 210, 350);
    
    // 手
    line(180, 200, 140, 260);
    line(180, 200, 210, 260);
    
    // 吹き出しと文字の描画
    noStroke();
    circle(210, 190, 25);
    circle(235, 150, 30);
    rect(230, 60, 130, 80, 30);

    fill(0);
    textAlign(LEFT);
    textSize(20);
    text("おはよう", 250, 110);
    
    textSize(10);
    text("びっくりした...", 280, 130);   

    fill(256, 0, 0);
    strokeWeight(800); // 線の太さ（1 ピクセル
    textAlign(LEFT);
    textSize(50);
    text("!?", 150, 120);  
  }
  else{ //通常（寝ている時の処理）
    background(25, 25, 112);
    
    //星の描画
    fill(240, 230, 140);
    circle(30, 30, 5);
    circle(370, 40, 5);
    circle(210, 50, 5);
    circle(130, 80, 5);
    circle(280, 150, 5);
    circle(90, 160, 5);
    
  　// 回っている丸の色の変更    
    circle_draw(255, 212, 0);
    
    // 地面の色の変更
    square_draw(0, 0, 128);
    
    // 棒人間の描画
    fill(256);
    circle(100, 290, 50);
    
    stroke(256);
    strokeWeight(5); // 線の太さ（1 ピクセル）
    line(120, 290, 250, 290);
    line(250, 290, 320, 250);
    line(250, 290, 320, 300);
    line(150, 290, 220, 260);
    line(150, 290, 210, 340);
    
    // 吹き出しと文字の描画
    noStroke();
    circle(130, 230, 20);
    circle(170, 210, 25);
    circle(210, 190, 30);
    rect(230, 100, 130, 80, 30);
    
    fill(0);
    textAlign(LEFT);
    textSize(20);
    text("おやすみ...", 245, 150);
    
  }

}

// 太陽と月を表現する回っている円を描画する
function circle_draw(a, b, c) {
  push(); // 座標をcanvasの中心にするため一時的に保存
  translate(width / 2, height / 2);
  x = sin(radians(-angle)) * r; // 円周上のX座標の位置
  y = cos(radians(angle)) * r; // 円周上のY座標の位置
  fill(a, b, c);
  ellipse(x, y, 50, 50); // アニメーションする円の描画
  pop();
  angle += 1;
}

// 地面の描画を行う
function square_draw(a, b, c){
  fill(a, b, c)
  rect(height-height, width / 2, height, width / 2)
}