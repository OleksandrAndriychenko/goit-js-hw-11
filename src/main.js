import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getImagesByQuery from "./js/pixabay-api";
import { clearGallery, renderGallery, showLoader, hideLoader } from "./js/render-functions";
const list = document.querySelector(".gallery");
const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    clearGallery();
    showLoader();
    const inputImg = event.target.elements["search-text"].value;
    getImagesByQuery(inputImg)
        .then(data => {
            if (data.length <= 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    backgroundColor: "#ef4040",
                    titleColor: "#fff",
                    messageColor: "#fff",
                });
                hideLoader();
            } else {
                hideLoader();
                renderGallery(data);
            }
        })
        .catch(error => {
            list.innerHTML = `<h3>${error.message}</h3>`
        })
}

