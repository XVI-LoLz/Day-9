const shaker = new Audio(
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Shaker.wav"
);
const clap = new Audio(
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Clap.wav"
);
const conga = new Audio(
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Conga.wav"
);
const hihat = new Audio(
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/HiHat.wav"
);
const stick = new Audio(
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Stick.wav"
);
const tom = new Audio(
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Tom.wav"
);

const buttons = document.querySelectorAll(".btn");

console.log(buttons);

const setupAudios = () => {
  buttons[0].addEventListener("click", () => shaker.play());
  buttons[1].addEventListener("click", () => clap.play());
  buttons[2].addEventListener("click", () => conga.play());
  buttons[3].addEventListener("click", () => hihat.play());
  buttons[4].addEventListener("click", () => stick.play());
  buttons[5].addEventListener("click", () => tom.play());
};

setupAudios();
