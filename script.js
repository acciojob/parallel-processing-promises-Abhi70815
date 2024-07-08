//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click", function() {
  let promises = images.map((image) => {
    return new Promise((resolve, reject) => {
      let imgElement = document.createElement("img");
      imgElement.src = image.url;

      imgElement.onload = () => resolve(imgElement);
      imgElement.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
    });
  });

  Promise.all(promises)
    .then((imgElements) => {
      imgElements.forEach((imgElement) => {
        output.appendChild(imgElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});