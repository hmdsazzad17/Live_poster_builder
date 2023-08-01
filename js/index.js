document.getElementById("headingDiv").innerHTML = "";
document.getElementById("imageDiv").innerHTML = "";
document.getElementById("descriptionDiv").innerHTML = "";

const form = document.getElementById("posterForm");
const preview = document.getElementById("preview");
const downloadButton = document.getElementById("downloadButton");

function updatePreview(action) {
  if (action == "image") {
    const imageInput = document.getElementById("image");
    if (imageInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageUrl = e.target.result;
        let posterImage = `
            <img src="${imageUrl}" alt="Poster Image" class="mb-2 mx-auto">
        `;
        document.getElementById("imagePreviewWrap").innerHTML = posterImage;
      };
      reader.readAsDataURL(imageInput.files[0]);
    }
  } else if (action == "heading") {
    const heading = document.getElementById("heading").value;
    let posterHeading = `<h1 id="headingPreview" class="text-3xl font-bold mb-2 text-center">${heading}</h1>`;
    document.getElementById("headingPreviewWrap").innerHTML = posterHeading;
  } else if (action == "description") {
    const description = document.getElementById("description").value;
    let posterDescription = `<p class="text-lg">${description}</p>`;
    document.getElementById("descriptionPreviewWrap").innerHTML =
      posterDescription;
  }
}

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // Get the HTML content of the poster div
    const poster = document.getElementById("previewContainer");
    const htmlContent = poster.outerHTML;

    const url = "generate_image.php";
    const data = new URLSearchParams({ htmldata: htmlContent });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data, // Convert the JavaScript object to a JSON string
    })
      .then((response) => response.json())
      .then((responseData) => {
        //Create a link element to trigger the download
        const link = document.createElement("a");
        link.download = "poster.png";
        link.href = responseData.data;

        // Trigger the download
        link.click();
      })
      .catch((error) => {
        console.error("Error:", error);
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
      document.getElementById(
        "headingDiv"
      ).innerHTML = `<div class="flex items-center justify-between"><label for="heading" class="block text-sm font-semibold text-gray-700">Heading</label><svg class="w-5 h-5 text-red-600 cursor-pointer" onclick="divAction(\'heading\')" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div><input type="text" id="heading" oninput="updatePreview('heading')" name="heading" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" /><div class="bg-gray-100 p-4 flex"><div class="flex space-x-4 px-4"><button type="button" class="px-4 py-2 border rounded-md bg-blue-500 text-white" onclick="changeHeadingAlignment(\'text-left\')">Left</button><button type="button" class="px-4 py-2 border rounded-md bg-blue-500 text-white" onclick="changeHeadingAlignment(\'text-center\')">Center</button><button type="button" class="px-4 py-2 border rounded-md bg-blue-500 text-white" onclick="changeHeadingAlignment(\'text-right\')">Right</button></div><div class="flex space-x-4"><button type="button" class="px-4 py-2 border rounded-md bg-blue-500 text-white" onclick="changeColor(\'text-blue-500\')">Blue</button><button type="button" class="px-4 py-2 border rounded-md bg-blue-500 text-white" onclick="changeColor(\'text-black-500\')">Black</button><button type="button" class="px-4 py-2 border rounded-md bg-blue-500 text-white" onclick="changeColor(\'text-green-500\')">Green</button></div></div>`;
      document.getElementById("headingBtn").style.display = "none";
      headAction = "show";
    } else {
      headAction = "hide";
      document.getElementById("headingDiv").innerHTML = "";
      document.getElementById("headingBtn").style.display = "block";
    }
  } else if (action == "image") {
    if (headAction == "hide") {
      document.getElementById(
        "imageDiv"
      ).innerHTML = `<div class="flex items-center justify-between">
        <label
          for="image"
          class="block text-sm font-semibold text-gray-700"
          >Upload Image</label
        >
        <svg
          class="w-5 h-5 text-red-600 cursor-pointer"
          onclick="divAction('image')"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <input
        type="file"
        id="image"
        name="image"
        onchange="updatePreview('image')"
        accept="image/*"
        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
      />`;
      document.getElementById("imageBtn").style.display = "none";
      headAction = "show";
    } else {
      headAction = "hide";
      document.getElementById("imageDiv").innerHTML = "";
      document.getElementById("imageBtn").style.display = "block";
    }
  } else if (action == "description") {
    if (headAction == "hide") {
      document.getElementById(
        "descriptionDiv"
      ).innerHTML = `<div class="flex items-center justify-between">
        <label
          for="image"
          class="block text-sm font-semibold text-gray-700"
          >Description</label
        >
        <svg
          class="w-5 h-5 text-red-600 cursor-pointer"
          onclick="divAction('description')"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <textarea
        id="description"
        name="description"
        rows="4"
        oninput="updatePreview('description')"
        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
      ></textarea>`;
      document.getElementById("descBtn").style.display = "none";
      headAction = "show";
    } else {
      headAction = "hide";
      document.getElementById("descriptionDiv").innerHTML = "";
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
