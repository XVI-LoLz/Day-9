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
  buttons.forEach((button, i) => {
    if (i === 0) {
      button.addEventListener("click", () => shaker.play());
      console.log("playing audio");
    }
    if (i === 1) {
      button.addEventListener("click", () => clap.play());
    }
    if (i === 2) {
      button.addEventListener("click", () => conga.play());
    }
    if (i === 3) {
      button.addEventListener("click", () => hihat.play());
    }
    if (i === 4) {
      button.addEventListener("click", () => stick.play());
    }
    if (i === 5) {
      button.addEventListener("click", () => tom.play());
    }
  });
};

setupAudios();
