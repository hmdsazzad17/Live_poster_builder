<?php

$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe";
$saveas = __DIR__ . DIRECTORY_SEPARATOR . "previewOutput.png";
$html_content = '<script src="https://cdn.tailwindcss.com"></script>';
$html_content .= $_POST['htmldata'];

$file_path = __DIR__ . DIRECTORY_SEPARATOR . "output.html";
file_put_contents($file_path, $html_content);
$url = __DIR__ . DIRECTORY_SEPARATOR ."/output.html";

$cmd = <<<CMD
"$chrome" --headless --start-maximized --virtual-time-budget=10000   --screenshot="$saveas"  "$url"
CMD;
exec($cmd);

$responseData = array(
    'status' => 'success',
    'message' => 'Image Created successfully!',
    'data' => "http://localhost/".basename(__DIR__). "/previewOutput.png"
);

$jsonResponse = json_encode($responseData);

echo $jsonResponse;

?>