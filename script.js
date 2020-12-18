const urls = [
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Shaker.wav",
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Clap.wav",
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Conga.wav",
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/HiHat.wav",
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Stick.wav",
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Tom.wav",
];

const audio = new Audio();

const buttons = document.querySelectorAll(".btn");

console.log(buttons);

const setupAudios = () => {
  buttons[0].addEventListener("click", () => {
    audio.src = urls[0];
    audio.play();
  });
  buttons[1].addEventListener("click", () => {
    audio.src = urls[1];
    audio.play();
  });
  buttons[2].addEventListener("click", () => {
    audio.src = urls[2];
    audio.play();
  });
  buttons[3].addEventListener("click", () => {
    audio.src = urls[3];
    audio.play();
  });
  buttons[4].addEventListener("click", () => {
    audio.src = urls[4];
    audio.play();
  });
  buttons[5].addEventListener("click", () => {
    audio.src = urls[5];
    audio.play();
  });
};

setupAudios();
