<!DOCTYPE html>
<html lang="en" class="h-full bg-gray-100 m-0">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Poster Builder</title>
  </head>
  <body class="h-full m-0 font-sans">
    <div id="app">
      <div class="flex">
        <div class="container mx-auto p-4">
          <h1 class="text-2xl font-bold mb-4 text-center">Componants</h1>
          <hr />
          <div>
            <div class="flex space-x-4 px-4">
              <button
                type="button"
                class="px-4 py-2 border rounded-md bg-blue-500 text-white"
                id="headingBtn"
                onclick="divAction('heading')"
              >
                Heading
              </button>
              <button
                type="button"
                class="px-4 py-2 border rounded-md bg-blue-500 text-white"
                id="imageBtn"
                onclick="divAction('image')"
              >
                Image
              </button>
              <button
                type="button"
                class="px-4 py-2 border rounded-md bg-blue-500 text-white"
                id="descBtn"
                onclick="divAction('description')"
              >
                Description
              </button>
            </div>
          </div>

          <form id="posterForm" class="space-y-4">
            <div class="bg-gray-100 p-4" id="headingDiv">
                <!-- heading div element will be loaded here via javascript -->
            </div>

            <div class="bg-gray-100 p-4" id="imageDiv">
                <!-- image div element will be loaded here via javascript -->
            </div>

            <div class="bg-gray-100 p-4" id="descriptionDiv">
                <!-- description div element will be loaded here via javascript -->
            </div>
          </form>
        </div>

        <!-- Preview section -->
        <div class="container mx-auto p-4">
          <h1 class="text-2xl font-bold mb-4 text-center">Preview</h1>
          <div id="previewContainer" class="bg-white p-4  rounded-md">
            <div id="preview" class="w-full min-h-600 h-auto ">
              <div class="p-4 text-center">
                <div id="headingPreviewWrap">
                </div>
                <div id="imagePreviewWrap">
                </div>
                <div id="descriptionPreviewWrap">
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            id="downloadButton"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Download Poster
          </button>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="js/index.js?v1=<?php echo rand()?>"></script>
  </body>
</html>
