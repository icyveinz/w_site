import animateValue from "./animateValue.js";

// Launch the animations for counters.
function initAnimations() {
    animateValue('reliability-clients-count', 0, 98, 4000);
    animateValue('reliability-years-count', 0, 12, 4000);
    animateValue('reliability-directions-count', 0, 186, 4000);
}

export default initAnimations;
