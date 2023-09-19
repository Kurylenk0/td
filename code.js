var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["829d0648-1ab2-4e19-8e6d-6c5a2e21e754","4a8dd231-8fb3-4bc8-9f17-b1ddf4adfdc9","f615918f-282d-4051-a314-b749d8ccae37","67a3d9f1-d675-4cb7-a018-29134f2166d6","0bc8b5df-3477-4416-8b3b-11bc816fb406","2450131a-0cdc-4763-88bc-498e5a95d4d6"],"propsByKey":{"829d0648-1ab2-4e19-8e6d-6c5a2e21e754":{"name":"Fundo","sourceUrl":null,"frameSize":{"x":70,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"3Y5ZvHWWm7j0RrBHVDlpM6PpvT4PNdKI","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":70},"rootRelativePath":"assets/829d0648-1ab2-4e19-8e6d-6c5a2e21e754.png"},"4a8dd231-8fb3-4bc8-9f17-b1ddf4adfdc9":{"name":"virus","sourceUrl":null,"frameSize":{"x":390,"y":390},"frameCount":4,"looping":true,"frameDelay":12,"version":"ASFWbJGydPUjPKOrkVcADzS6KCv3O0ca","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":780,"y":780},"rootRelativePath":"assets/4a8dd231-8fb3-4bc8-9f17-b1ddf4adfdc9.png"},"f615918f-282d-4051-a314-b749d8ccae37":{"name":"pausas","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"_fBNdv4gM6U4QNLt.S.v1whV_vtEiayp","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f615918f-282d-4051-a314-b749d8ccae37.png"},"67a3d9f1-d675-4cb7-a018-29134f2166d6":{"name":"arma","sourceUrl":null,"frameSize":{"x":400,"y":326},"frameCount":1,"looping":true,"frameDelay":12,"version":"kRj4Z_51nhHccA7d7zvALZdmAZCPCush","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":326},"rootRelativePath":"assets/67a3d9f1-d675-4cb7-a018-29134f2166d6.png"},"0bc8b5df-3477-4416-8b3b-11bc816fb406":{"name":"tiro","sourceUrl":null,"frameSize":{"x":75,"y":75},"frameCount":4,"looping":true,"frameDelay":15,"version":"oHwuMuOVU3_heQBkeC3wod8s6HWgehZE","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":150},"rootRelativePath":"assets/0bc8b5df-3477-4416-8b3b-11bc816fb406.png"},"2450131a-0cdc-4763-88bc-498e5a95d4d6":{"name":"arma2","sourceUrl":"assets/api/v1/animation-library/gamelab/HCgV1ZFjDvc5tTX8n7TdBcSWLmqrKmLA/category_video_games/gameplayobject_ray_01.png","frameSize":{"x":400,"y":326},"frameCount":1,"looping":true,"frameDelay":2,"version":"HCgV1ZFjDvc5tTX8n7TdBcSWLmqrKmLA","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":326},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HCgV1ZFjDvc5tTX8n7TdBcSWLmqrKmLA/category_video_games/gameplayobject_ray_01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Criação de sprites
var range1 = createSprite(280, 115, 160, 160);
var range2 = createSprite(110, 255, 160, 160);

var fundo = createSprite(200, 200, 200, 200);
fundo.setAnimation("Fundo");
fundo.scale = 6;

var pausa1 = createSprite(370, 50, 40, 40);
pausa1.setAnimation("pausas");
pausa1.scale = 0.3;
var pausa2 = createSprite(350, 220, 40, 40);
pausa2.setAnimation("pausas");
pausa2.scale = 0.3;
var pausa3 = createSprite(10, 200, 40, 40);
pausa3.setAnimation("pausas");
pausa3.scale = 0.3;
var pausa4 = createSprite(40, 355, 40, 40);
pausa4.setAnimation("pausas");
pausa4.scale = 0.3;

var lugar1 = createSprite(280, 115, 50, 50);
var lugar2 = createSprite(110, 255, 50, 50);

var tiro = createSprite(-600, -600, 20, 20);
tiro.setAnimation("tiro");
tiro.scale = 0.5;
var tiro2 = createSprite(-600, -600, 20, 20);
tiro2.setAnimation("tiro");
tiro2.scale = 0.5;

var arma = createSprite(-50, -50, 20, 20);
arma.setAnimation("arma");
arma.scale = 0.15;
var arma2 = createSprite(-50, -50, 20, 20);
arma2.setAnimation("arma2");
arma2.scale = 0.15;

var teste = createSprite(-100, 50, 20, 20);
teste.setAnimation("virus");
teste.scale = 0.1;
teste.velocityX = 5;

// Variáveis de estado do jogo
var vidas = 100;
var dinheiro = 100;
var hitbox = "fora";
var hitbox2 = "fora";
var vidateste = "25";
var vidabase = "25";
var tempohitbox = "-14";
var tempohitbox2 = "-14";

function draw() {
  // Configuração do plano de fundo
  background("white");
  
  // Exibição de informações na tela
  textSize(15);
  text("Vidas: " + vidas, 30, 390);
  text("Dinheiro: " + dinheiro, 140, 390);
  text("Vida do Inimigo: " + vidateste, 250, 390);

  // Lógica de movimento do 'teste'
  if (teste.isTouching(pausa1) || teste.isTouching(pausa3)) {
    teste.velocityX = 0;
    teste.velocityY = 5;
  }
  
  if (teste.isTouching(pausa2)) {
    teste.velocityX = -5;
    teste.velocityY = 0;
  } 
  
  if (teste.isTouching(pausa4)) {
    teste.velocityX = 5;
    teste.velocityY = 0;
  }   
  
  if (teste.x > 400) {
    teste.x = -100;
    teste.y = 50;
    vidas = vidas - 10;
    vidateste = vidabase;
  }
  
  // Controle de disparo da 'arma'
  if (dinheiro >= 100){
    if (mouseIsOver(lugar1)) {
      if (keyWentDown("space")) {
      arma.x = 280;
      arma.y = 115;
      lugar1.x = 600;
      dinheiro = dinheiro - 100;
      }
    }
  }
  
    // Controle de disparo da 'arma'
  if (dinheiro >= 100){
    if (mouseIsOver(lugar2)) {
      if (keyWentDown("space")) {
      arma2.x = 110;
      arma2.y = 255;
      lugar2.x = 600;
      dinheiro = dinheiro - 100;
      }
    }
  }
  
  
  
  
  if (arma.x === 280) {
    if (tiro.x === 280) {
        if (teste.isTouching(range1)) {
          arma.pointTo(teste.x, teste.y);
          tempohitbox = tempohitbox -1;
      if (tempohitbox === -15){
          // Cálculo do ângulo para o tiro
          var targetX = teste.x;
          var targetY = teste.y;
    
          var angle = atan2(targetY - tiro.position.y, targetX - tiro.position.x);
          var speed = 20;

          tiro.velocity.x = cos(angle) * speed;
          tiro.velocity.y = sin(angle) * speed;
          
          
          tempohitbox = 0;
        }
      }
    }
  }
  
  if (arma2.x === 110) {
    if (tiro2.x === 110) {
        if (teste.isTouching(range2)) {
          arma2.pointTo(teste.x, teste.y);
          tempohitbox2 = tempohitbox2 -1;
      if (tempohitbox2 === -15){
          // Cálculo do ângulo para o tiro
          var targetX2 = teste.x;
          var targetY2 = teste.y;
    
          var angle2 = atan2(targetY2 - tiro2.position.y, targetX2 - tiro2.position.x);
          var speed2 = 20;

          tiro2.velocity.x = cos(angle2) * speed2;
          tiro2.velocity.y = sin(angle2) * speed2;
          
          
          tempohitbox2 = 0;
        }
      }
    }
  }
  
  // Verificação da colisão do tiro com 'range1'
  if (tiro.isTouching(range1)) {
    hitbox = "dentro";
  } else {
    hitbox = "fora";
  }
  
    if (tiro2.isTouching(range2)) {
    hitbox2 = "dentro";
  } else {
    hitbox2 = "fora";
  }
  
  // Reposicionamento do tiro se estiver fora da 'range1'
  if (hitbox === "fora") {
    tiro.x = arma.x;
    tiro.y = arma.y;
    tiro.velocityY = 0;
    tiro.velocityX = 0;
  }
    if (hitbox2 === "fora") {
    tiro2.x = arma2.x;
    tiro2.y = arma2.y;
    tiro2.velocityY = 0;
    tiro2.velocityX = 0;
  }
    
  // Verificação de colisão entre 'teste' e 'tiro'
  if (teste.isTouching(tiro)||teste.isTouching(tiro2)) {
    vidateste = vidateste -25;
    tiro.y = 3000;
    tiro2.y = 3000;
  }
  
  if (vidateste <= 0){
  teste.x = -100;
  teste.y = 50;
  vidabase = vidabase * 1.15;
 vidateste = vidabase;
  dinheiro = dinheiro + 10;
   tempohitbox = "-14";
   tempohitbox2 = "-14";
  } 
  
  if (teste.x < 0){
    teste.velocityY = 0;
    teste.velocityX = 5;
  }
  
  // Renderização dos sprites
  drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
