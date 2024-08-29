function run_append_animation() {
    const timeline = gsap.timeline({paused: true});
    const active_nodes = document.querySelectorAll('.burger-menu-core__unwrapped-and-centered-container__navigation-container');
    timeline.from(active_nodes, {
        opacity: 0,
        yPercent: -100,
        transform: 'rotate3d(1, 0, 0, 90deg)',
        stagger: 0.5
    });
    document.querySelector('.burger-menu-core__unwrapped-and-centered-container').addEventListener('animationend', () => {
        timeline.play()
    })
}

function fold_menu_function(condition) {
    const timeline = gsap.timeline({paused: true})
    const node_list = document.querySelectorAll('.burger-menu-core__unwrapped-and-centered-container__navigation-container');
    fold_inverted(timeline, node_list);
    timeline.play();
    timeline.eventCallback("onComplete", () => {
        setTimeout(() => {
            let node = document.querySelector('.burger-menu-core__unwrapped-and-centered-container');
            node.classList.add('animate__fadeOutUp');
            setTimeout(() => {
                $('.burger-menu-core__unwrapped-and-centered-container').remove();
            }, 300);
        }, 300);
        condition = !condition;
    });
}

function fold_inverted(timeline, node_list) {
    node_list.forEach((_, index) => {
        if (index === 0) {
            timeline.to(node_list[4], {
                opacity: 0,
                yPercent: -100,
                transform: 'rotate3d(1, 0, 0, 90deg)'
            })
        }
        else if (index === 1) {
            timeline.to(node_list[3], {
                opacity: 0,
                yPercent: -100,
                transform: 'rotate3d(1, 0, 0, 90deg)'
            })
        }
        else if (index === 2) {
            timeline.to(node_list[2], {
                opacity: 0,
                yPercent: -100,
                transform: 'rotate3d(1, 0, 0, 90deg)'
            })
        }
        else if (index === 3) {
            timeline.to(node_list[1], {
                opacity: 0,
                yPercent: -100,
                transform: 'rotate3d(1, 0, 0, 90deg)'
            })
        }
        else {
            timeline.to(node_list[0], {
                opacity: 0,
                yPercent: -100,
                transform: 'rotate3d(1, 0, 0, 90deg)'
            })
        }
    })
}

export {run_append_animation, fold_menu_function};
