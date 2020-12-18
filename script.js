const audios = [
  {
    name: "shaker",
    url:
      "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Shaker.wav",
  },
  {
    name: "clap",
    url:
      "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Clap.wav",
  },
  {
    name: "conga",
    url:
      "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Conga.wav",
  },
  {
    name: "hihat",
    url:
      "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/HiHat.wav",
  },
  {
    name: "stick",
    url:
      "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Stick.wav",
  },
  {
    name: "tom",
    url:
      "https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Tom.wav",
  },
];

const container = document.querySelector(".container");
const mainButton = document.querySelector(".main-button");

const setupAudios = (audiosArr, parent) => {
  audiosArr.forEach((audio) => {
    const element = document.createElement("button");
    element.classList.add("btn");
    element.innerHTML = audio.name;

    const a = new Audio();
    a.src = audio.url;
    element.addEventListener("click", () => a.play());
    parent.appendChild(element);
  });
};

setupAudios(audios, mainButton);
