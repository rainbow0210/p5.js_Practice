let mic;
let stop_change = 0;
let left_eye_status = 0;
let right_eye_status = 0;

function setup() {
  createARCanvas(800, 800);
  mic = new p5.AudioIn(); //マイクデバイス作成
  mic.start(); //マイクデバイスの初期化
}

function draw() {
  let vol = mic.getLevel(); //マイクに入力される音量によって0〜1の値を取得
  
  // debug
  console.log("ボリューム：" + vol + " left_eye_status：" + left_eye_status + " right_eye_status：" + right_eye_status);
  
  if(stop_change == 10){
    // https://zenn.dev/ojk/books/intro-to-p5js/viewer/p5-event
    if (keyIsPressed) {
      if (key === 'q') {
        // debug
        //console.log("Qキーが押されました")

        if(left_eye_status != 1){
          left_eye_status = 1
        }
        else{
          left_eye_status = 0
        }
      }

      if (key === 'w') {
        // debug
        //console.log("Wキーが押されました")

        if(right_eye_status != 1){
          right_eye_status = 1
        }
        else{
          right_eye_status = 0
        }
      }
    }

    background(255, 255, 255);

    // 左目
    if(left_eye_status != 0){
      // 開いた左目
      fill(0, 127, 255); // 青
      circle(200, 200, 150); 

      // 左目 白目
      fill(255, 255, 255); // 青
      circle(240, 200, 50);
    }
    else{
      // 閉じた左目
      fill(0, 127, 255); // 青
      rect(150, 200, 150, 50);
    }

    // 右目
    if(right_eye_status != 0){
      // 開いた右目
      fill(0, 127, 255); // 青
      circle(600, 200, 150);

      // 右目 白目
      fill(255, 255, 255); // 青
      circle(560, 200, 50);
    }
    else{
        // 閉じた右目
        fill(0, 127, 255); // 青
        rect(550, 200, 150, 50);
    }

    // 鼻
    fill(0, 127, 255); // 青
    rect(350, 340, 100, 100);

    if(vol > 0.03){
      // debug
      //console.log("音声入力がありました。")

      // 開いた口
      fill(0, 127, 255); // 青
      rect(280, 550, 250, 150);

      fill(255, 255, 255); // 白
      rect(330, 600, 150, 50);
    }
    else{
      // 閉じた口
      fill(0, 127, 255); // 青
      rect(280, 550, 250, 50);
    }
    
    stop_change = 0;
  }
  stop_change++;
  
}