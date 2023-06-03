document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var hoverableElements = document.querySelectorAll(".grid-cell-container");
  const selectors = document.querySelectorAll(".selector");
  const paragraphs = document.querySelectorAll(".grid-cell-paragraph");

  hoverableElements.forEach(function (element) {
    const gridCellLink = element.querySelector(".grid-cell-link");
    gridCellLink.addEventListener("mouseover", function () {
      if (element.id == "aip-vid-cell") {
        var aipVidParagraphId = null;
        const aipVidCell = document.getElementById("aip-vid-cell");
        const aipVidParagraphs = aipVidCell.querySelectorAll(
          ".grid-cell-paragraph"
        );
        const aipVidParagraphsArray = Array.from(aipVidParagraphs);
        const activeAipVidParagraphs = aipVidParagraphsArray.filter(
          (aipVidParagraph) => aipVidParagraph.classList.contains("active")
        );
        activeAipVidParagraphs.forEach((paragraph) => {
          aipVidParagraphId = paragraph.id;
        });
        if (aipVidParagraphId == "use-case") {
          body.style.setProperty(
            "--background-image",
            "url('assets/aip-vid_v1.svg')"
          );
        } else if (aipVidParagraphId == "tech") {
          body.style.setProperty(
            "--background-image",
            "url('assets/diagram-export-5_29_2023, 9_34_26 AM.svg')"
          );
        } else if (aipVidParagraphId == "interface") {
          body.style.setProperty(
            "--background-image",
            "url('assets/aip-vid_v1.svg')"
          );
        } else if (aipVidParagraphId == "privacy") {
          body.style.setProperty(
            "--background-image",
            "url('assets/diagram-export-5_29_2023, 9_34_26 AM.svg')"
          );
        } else if (aipVidParagraphId == "integration") {
          body.style.setProperty(
            "--background-image",
            "url('assets/aip-vid_v1.svg')"
          );
        } else if (aipVidParagraphId == "ease") {
          body.style.setProperty(
            "--background-image",
            "url('assets/flowchart.png')"
          );
        } else if (aipVidParagraphId == "accessibility") {
          body.style.setProperty(
            "--background-image",
            "url('assets/flowchart.png')"
          );
        } else if (aipVidParagraphId == "target-market") {
          body.style.setProperty(
            "--background-image",
            "url('assets/aip-vid_v1.svg')"
          );
        } else {
          body.style.setProperty(
            "--background-image",
            "url('assets/aip-vid_v1.svg')"
          );
        }
      } else if (element.id == "echospeech-cell") {
        body.style.setProperty(
          "--background-image",
          "url('assets/echospeech_logo.jpg')"
        );
      } else if (element.id == "voiceitt-cell") {
        body.style.setProperty(
          "--background-image",
          "url('assets/voiceitt_logo.webp')"
        );
      } else if (element.id == "nuance-communication-cell") {
        body.style.setProperty(
          "--background-image",
          "url('assets/nuance_communications_logo.png')"
        );
      }
      body.style.setProperty("--background-scale", "90%");
    });
    element.addEventListener("mouseout", function () {
      body.style.setProperty("--background-scale", "0");
    });
  });

  selectors.forEach((selector) => {
    selector.addEventListener("click", () => {
      if (selector.classList.contains('active')) {
        selectors.forEach((selector) => {
          selector.classList.remove("active");
        });
      } else {
        selectors.forEach((selector) => {
          selector.classList.remove("active");
        });
        selector.classList.add("active");
      }
      const selectorId = selector.getAttribute("id");
      const correspondingParagraph = document.getElementById(
        selectorId.replace("-selector", "")
      );
  
      paragraphs.forEach((paragraph) => {
        if ((paragraph.id == correspondingParagraph.id) && (!paragraph.classList.contains("active"))) {
          paragraph.classList.add("active");
          paragraph.style.maxHeight = paragraph.scrollHeight + "px";
        } else {
            paragraph.classList.remove("active");
            correspondingParagraph.style.maxHeight = null;
          }
      });
  
      // Move this check outside of the paragraphs.forEach loop
      let content = correspondingParagraph.parentNode;
      if (correspondingParagraph.classList.contains('active')) {
        content.classList.add('child-active');
      } else {
        content.classList.remove('child-active');
      }
    });
  });
});
