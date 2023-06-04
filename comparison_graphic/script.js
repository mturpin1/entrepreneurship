document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const hoverableElements = Array.from(document.querySelectorAll(".grid-container"));
  const selectors = Array.from(document.querySelectorAll(".selector"));
  const paragraphs = Array.from(document.querySelectorAll(".paragraph"));

  let prevBackgroundImage = null;

  hoverableElements.forEach((element) => {
    const gridCellLink = element.querySelector('.link');

    gridCellLink.addEventListener("mouseover", () => {
      prevBackgroundImage = body.style.getPropertyValue("--background-image");

      let backgroundImage;

      if (element.id == "aip-vid-cell") {
        const activeParagraph = element.querySelector(".paragraph.active");
        if (activeParagraph) {
          switch(activeParagraph.id) {
            case "use-case":
            case "interface":
            case "integration":
            case "target-market":
                backgroundImage = "url('assets/aip-vid_v1.svg')";
                break;
            case "tech":
            case "privacy":
                backgroundImage = "url('assets/diagram-export-5_29_2023, 9_34_26 AM.svg')";
                break;
            case "ease":
            case "accessibility":
                backgroundImage = "url('assets/flowchart.png')";
                break;
            default:
                backgroundImage = "url('assets/aip-vid_v1.svg')";
          }
        } else {
          backgroundImage = "url('assets/aip-vid_v1.svg')";
        }
      } else if (element.id == "echospeech-cell") {
        backgroundImage = "url('assets/echospeech_logo.jpg')";
      } else if (element.id == "voiceitt-cell") {
        backgroundImage = "url('assets/voiceitt_logo.webp')";
      } else if (element.id == "nuance-communication-cell") {
        backgroundImage = "url('assets/nuance_communications_logo.png')";
      }

      if (backgroundImage) {
        body.style.setProperty("--background-image", backgroundImage);
        body.style.setProperty("--background-scale", "90%");
      }
    });

    element.addEventListener("mouseout", () => {
      body.style.setProperty("--background-image", prevBackgroundImage);
      body.style.setProperty("--background-scale", "0");
    });
  });

  selectors.forEach((selector) => {
    selector.addEventListener("click", () => {
      console.log(selector.id + " clicked");
      selectors.forEach((otherSelector) => {
        if (otherSelector !== selector) {
          console.log(otherSelector.id + " active class removed")
          otherSelector.classList.remove("active");
        }
      });

      if (selector.classList.contains('active')) {
        selector.classList.remove('active');
      } else {
        selector.classList.add("active");
      }

      const selectorId = selector.getAttribute("id");
      const correspondingParagraphs = Array.from(document.querySelectorAll('#' + selectorId.replace('-selector', '')));

      correspondingParagraphs.forEach((correspondingParagraph) => {
        console.log(correspondingParagraph.id)
        paragraphs.forEach((paragraph) => {
          if (paragraph.id === correspondingParagraph.id && selector.classList.contains('active')) {
            paragraph.classList.add("active");
            paragraph.style.maxHeight = `${paragraph.scrollHeight}px`;
          } else {
            paragraph.classList.remove("active");
            paragraph.style.maxHeight = null;
          }
        });
      })
    });
  });
});
