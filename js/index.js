document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("headingDiv").style.display = "none";
    document.getElementById("imageDiv").style.display = "none";
    document.getElementById("descriptionDiv").style.display = "none";

    const form = document.getElementById("posterForm");
    const preview = document.getElementById("preview");
    const downloadButton = document.getElementById("downloadButton");
    document
      .getElementById("heading")
      .addEventListener("input", updatePreview);
    document
      .getElementById("image")
      .addEventListener("change", updatePreview);
    document
      .getElementById("description")
      .addEventListener("input", updatePreview);

    function updatePreview() {
      const heading = document.getElementById("heading").value;
      const imageInput = document.getElementById("image");
      const description = document.getElementById("description").value;
      if (imageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imageUrl = e.target.result;
          let posterHTML = `
          <div class="p-4 text-center">
            <h1 id="headingPreview" class="text-3xl font-bold mb-2 text-center">${heading}</h1><br>
            <img src="${imageUrl}" alt="Poster Image" class="mb-2 mx-auto">
            <p class="text-lg">${description}</p>
          </div>
        `;
          preview.innerHTML = posterHTML;
        };
        reader.readAsDataURL(imageInput.files[0]);
      } else {
        let posterHTML = `
          <div class="p-4">
            <h1 id="headingPreview" class="text-3xl font-bold mb-2 text-center">${heading}</h1>
            <img src="" alt="Poster Image" class="mb-2">
            <p class="text-lg">${description}</p>
          </div>
        `;
        preview.innerHTML = posterHTML;
      }
    }

    downloadButton.addEventListener("click", function () {
      html2canvas(preview).then(function (canvas) {
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "preview.png";
        link.href = dataURL;
        link.click();
      });
    });
  });

  var position = "text-left";
  var txtColor = "text-black-500";
  var headAction = "hide";
  var imageAction = "hide";
  var descAction = "hide";

  function changeHeadingAlignment(align) {
    position = align;
    const headingPreview = document.getElementById("headingPreview");
    headingPreview.classList = `text-3xl font-bold mb-2 ${align} ${txtColor}`;
  }

  function changeColor(color) {
    txtColor = color;
    const headingPreview11 = document.getElementById("headingPreview");
    headingPreview11.classList = `text-3xl font-bold mb-2 ${color} ${position}`;
  }
  function divAction(action) {
    if (action == "heading") {
      if (headAction == "hide") {
        document.getElementById("headingDiv").style.display = "block";
        document.getElementById("headingBtn").style.display = "none";
        headAction = "show";
      } else {
        headAction = "hide";
        document.getElementById("headingDiv").style.display = "none";
        document.getElementById("headingBtn").style.display = "block";
      }
    } else if (action == "image") {
      if (headAction == "hide") {
        document.getElementById("imageDiv").style.display = "block";
        document.getElementById("imageBtn").style.display = "none";
        headAction = "show";
      } else {
        headAction = "hide";
        document.getElementById("imageDiv").style.display = "none";
        document.getElementById("imageBtn").style.display = "block";
      }
    } else if (action == "description") {
      if (headAction == "hide") {
        document.getElementById("descriptionDiv").style.display = "block";
        document.getElementById("descBtn").style.display = "none";
        headAction = "show";
      } else {
        headAction = "hide";
        document.getElementById("descriptionDiv").style.display = "none";
        document.getElementById("descBtn").style.display = "block";
      }
    }
  }

  function divCloseAction(action) {
    if (action == "heading") {
      if (headAction == "hide") {
        document.getElementById("headingDiv").style.display = "block";
        document.getElementById("headingBtn").style.display = "none";
        headAction = "show";
      } else {
        headAction = "hide";
        document.getElementById("headingDiv").style.display = "none";
        document.getElementById("headingBtn").style.display = "block";
      }
    } else if (action == "image") {
      if (headAction == "hide") {
        document.getElementById("imageDiv").style.display = "block";
        document.getElementById("imageBtn").style.display = "none";
        headAction = "show";
      } else {
        headAction = "hide";
        document.getElementById("imageDiv").style.display = "none";
        document.getElementById("imageBtn").style.display = "block";
      }
    } else if (action == "description") {
      if (headAction == "hide") {
        document.getElementById("descriptionDiv").style.display = "block";
        document.getElementById("descBtn").style.display = "none";
        headAction = "show";
      } else {
        headAction = "hide";
        document.getElementById("descriptionDiv").style.display = "none";
        document.getElementById("descBtn").style.display = "block";
      }
    }
  }