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
        ecclevel: "M",
        fillcolor: "#F2F2F2",
        textcolor: "#D13438",
        margin: 4,
        modulesize: 8,
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
      window.location.reload();
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
