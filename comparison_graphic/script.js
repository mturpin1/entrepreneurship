document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var hoverableElements = document.querySelectorAll(".text");

  hoverableElements.forEach(function (element) {
    element.addEventListener("mouseover", function () {
      console.log("element with id of " + element.id + " was hovered over");
      if (element.id == "text1") {
        body.style.setProperty(
          "--background-image",
          "url('assets/aip-vid_v1.svg')"
        );
      } else if (element.id == "text2") {
        body.style.setProperty(
          "--background-image",
          "url('assets/diagram-export-5_29_2023, 9_34_26 AM.svg')"
        );
      } else if (element.id == "text3") {
        body.style.setProperty(
          "--background-image",
          "url('assets/flowchart.png')"
        );
      }
      body.style.setProperty("--background-scale", "90%");
    });
    element.addEventListener("mouseout", function () {
      body.style.setProperty("--background-scale", "0");
    });
  });
});
