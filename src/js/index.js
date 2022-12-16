import { preloadImages, preloadFonts } from "./utils";
import LocomotiveScroll from "locomotive-scroll";

const backtopEl = document.querySelector(".backtop");
const headerEl = document.querySelector("#header");

// Preload  images and fonts
Promise.all([preloadImages(".tiles__line-img"), preloadFonts("rmd7deq")]).then(
  () => {
    // Remove loader (loading class)
    document.body.classList.remove("loading");

    // Initialize the Locomotive scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smoothMobile: true,
      mobile: {
        breakpoint: 0,
        smooth: true,
      },
      tablet: {
        breakpoint: 0,
        smooth: true,
      },
    });
    const thumbnailArray = [
      "https://artofakri.firebaseapp.com/aksha_ai_57.97cc8bf3.jpeg",
      "https://artofakri.firebaseapp.com/aksha_ai_58.da42ba32.jpeg",
      "https://artofakri.firebaseapp.com/aksha_ai_50.9d639de4.jpeg",
      "https://artofakri.firebaseapp.com/aksha_ai_46.f0e5a335.jpeg",
      "https://artofakri.firebaseapp.com/aksha_ai_81.77102bbb.jpeg",
      "https://artofakri.firebaseapp.com/aksha_ai_59.57eeae95.jpeg",
    ];

    // get a reference to the thumbnail element
    const thumbnailElement = document.getElementById("random-thumbnail");

    // generate a random index based on the length of the thumbnailArray
    const randomIndex = Math.floor(Math.random() * thumbnailArray.length);

    // select the meta element with the property "og:title"
    const metaElement = document.querySelector('meta[property="og:image"]');

    // set the content attribute of the meta element to the desired value
    metaElement.content = thumbnailArray[randomIndex];

    backtopEl.addEventListener("click", () => scroll.scrollTo(headerEl));
  }
);
