import countryballs_mobile_activator from "../our_activities_scripts/countryballs_mobile_activator.js";
import countryballs_desktop_activator from "../our_activities_scripts/countryballs_desktop_activator.js";
import dignities_mobile_animation from "../our_dignities_scripts/dignities_mobile_animation.js";
import dignities_desktop_animation from "../our_dignities_scripts/dignities_desktop_animation.js";

gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.matchMedia({
        "(max-width: 750px)" : function() {
            dignities_mobile_animation()
            countryballs_mobile_activator()
        },
        "(min-width: 751px)" : function() {
            dignities_desktop_animation()
            countryballs_desktop_activator()
        }
    });
});