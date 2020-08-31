import Phaser from "phaser";
// import logoImg from "./assets/logo.png";
import atlasImg from "./assets/packed/atlas.png";
import atlasMap from "./assets/packed/atlas.json";
// import dungeonzImg from "./assets/dungeonzio-title.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  // this.load.image("logo", logoImg);
  // this.load.image("dung-logo", dungeonzImg);
  this.load.atlas('game-atlas', atlasImg, atlasMap);
}

const tiles = 31;
const tileSize = 32;

function create() {
  const group1 = this.add.group({
    scale: { x: 2, y: 2 }
  });
  const group2 = this.add.group();

  // console.log(atlasthing);

  this.anims.create({
    key: 'flicker',
    repeat: -1,
    frames: [
      {
        key: "game-atlas",
        frame: "bat-down-1",
        duration: 200,
        visible: true,
      },
      {
        key: "game-atlas",
        frame: "bat-down-2",
        duration: 200,
        visible: true
      }
    ],
  });

  this.add.sprite(200, 200, "game-atlas", "logo");

  for (let row = 0; row < tiles; row += 1) {
    for (let col = 0; col < tiles; col += 1) {
      const logo = this.add.sprite(col * tileSize, row * tileSize, "game-atlas", "bat-down-1").play("flicker");
      logo.scale = 2;
      logo.setOrigin(0.5);

      group1.add(logo);
    }
  }

  // for (let row = 0; row < tiles; row += 1) {
  //   for (let col = 0; col < tiles; col += 1) {
  //     const logo = this.add.sprite(col * tileSize, row * tileSize, "game-atlas", "bat-down-2");
  //     logo.scale = 2;
  //     logo.setOrigin(0.5);

  //     group2.add(logo);
  //   }
  // }

  this.add.sprite(100, 100, "game-atlas", "dungeonzio-title");

  // group2.setVisible(false);

  // setInterval(() => {
  //   group1.toggleVisible();
  //   group2.toggleVisible();
  // }, 1000);

}
