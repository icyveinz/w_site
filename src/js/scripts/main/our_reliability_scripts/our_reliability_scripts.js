// When AOS transition is activated - launch the animations.
import initAnimations from "./initAnimations-min.js";

$(function() {
    document.addEventListener("aos:in:activate-counters", ({_}) => {
        initAnimations();
    });
})
