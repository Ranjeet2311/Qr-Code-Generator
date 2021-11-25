const generatorWrapper = document.querySelector("#generator-wrapper");
const inputId = document.querySelector("#input-id");
const btn = document.querySelector("#btn");
const btnRefresh = document.querySelector("#btn-refresh");
const instruction = document.querySelector("#Instruction");
const giphy = document.querySelector("#giphy-embed");
instruction.innerText = ' Enter "URL" or "text" or "Number to generate Qr Code';

btn.addEventListener(
  "click",
  () => {
    const value = inputId.value;
    console.log(value);

    if (value.length > 0) {
      let s = QRCode.generateSVG(value, {
        // // 'L', 'M', 'Q' and 'H' ---CSS can be easily added
        // ecclevel: "M",
        // // fill color
        // fillcolor: "linear-gradient(to right, #b92b27, #1565c0);",
        // // text color
        // textcolor: "#b92b27",
        // // margin size
        // margin: 4,
        // // module size
        // modulesize: 8,
      });

      generatorWrapper.appendChild(s);
      //     document.body.appendChild(svgElement);

      instruction.classList.add("Instruction");

      instruction.innerText =
        ' "Hit refresh button to enter another URL or text"';
      giphy.style.display = "none";

      console.log("Val 0 works");
    } else if (value == 0) {
      alert("Plese type your content");
    }
  },
  { once: true }
);

btnRefresh.onclick = () => {
  // inputId.value = " ";
  // generatorWrapper.style.display = "none";
  // generatorWrapper.removeChild(s);

  location.reload();
  console.log("2nd btn works");
};
