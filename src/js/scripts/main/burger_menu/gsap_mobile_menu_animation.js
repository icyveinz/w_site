function run_append_animation() {
    const timeline = gsap.timeline({paused: true});
    const active_nodes = document.querySelectorAll('.burger-menu-core__unwrapped-and-centered-container__navigation-container');
    timeline.from(active_nodes, {
        opacity: 0,
        yPercent: -20,
        transform: 'rotate3d(1, 0, 0, 90deg)',
        stagger: 0.8
    });
    timeline.play()
}

export default run_append_animation;
