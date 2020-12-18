const urls = [
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Shaker.wav",
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Clap.wav",
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Conga.wav",
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/HiHat.wav",
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Stick.wav",
  "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Tom.wav",
];

const buttons = document.querySelectorAll(".btn");

const setupAudios = () => {
  buttons.forEach((button, i) =>
    button.addEventListener("click", () => {
      const audio = new Audio();
      audio.src = urls[i];
      audio.play();
    })
  );
};

setupAudios();
