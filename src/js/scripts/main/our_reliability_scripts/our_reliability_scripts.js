// When AOS transition is activated - launch the animations.
import initAnimations from "./initAnimations.js";

$(function() {
    document.addEventListener("aos:in:activate-counters", ({_}) => {
        initAnimations();
    });
})
