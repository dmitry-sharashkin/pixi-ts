import * as PIXI from "pixi.js";

import cardTemplate from "../assets/images/Base-minion-premium.webp";

const nft =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdBondAUvWLbdrMiGCoEz6dElRmeLWh0enQ&usqp=CAU";

export function game() {
  let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    // autoResize: true,

    resolution: devicePixelRatio,
  });
  var baseTexture = new PIXI.BaseTexture(cardTemplate);
  baseTexture.width = window.innerWidth / 10;
  baseTexture.height = window.innerWidth / 10;
  const texture = new PIXI.Texture(baseTexture);

  const card = new PIXI.Sprite(texture);
  card.width = window.innerWidth / 5;
  card.height = window.innerWidth / 5 / 0.645;
  card.anchor.set(0.5);
  card.x = window.innerWidth / 2;
  card.y = window.innerHeight / 2;

  const cutImage = new PIXI.Graphics();
  cutImage.beginFill(0xffffff);
  cutImage.drawEllipse(
    0,
    -card.height * 0.45,
    card.width * 0.75,
    card.height * 0.65
  );
  cutImage.beginFill(0xddd0000);
  cutImage.drawRect(-card.width, 0, card.width * 2, card.height);
  cutImage.endFill();

  card.addChild(cutImage);

  const baseCharacter = new PIXI.BaseTexture(nft);
  baseCharacter.width = window.innerWidth / 10;
  baseCharacter.height = window.innerWidth / 10;
  const characterTexture = new PIXI.Texture(baseCharacter);
  const character = new PIXI.Sprite(characterTexture);

  character.width = card.width * 2;
  character.height = card.width * 2;
  character.anchor.set(0.5);
  character.y = -card.height * 0.4;
  // character.x = window.innerWidth / 2;
  // character.y = window.innerHeight / 2;
  character.mask = cutImage;

  card.addChild(character);

  // card.mask = cutImage;
  app.stage.addChild(card);
  return app;
}
