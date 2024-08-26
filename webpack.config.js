const path = require("path");
const TerserPlugin = require('terser-webpack-plugin'); // For minifying and removing comments

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    }
                }
            })
        ]
    },
    entry: {
        main: [
            "./src/js/scripts/main/preloader/preloader.js",
            "./src/js/scripts/main/visiual_init/visual_activator.js",
            "./src/js/scripts/main/fixed_menu_scripts/fixed_menu_scripts.js",
            "./src/js/scripts/main/burger_menu/burger_menu.js",
            "./src/js/scripts/main/burger_menu/hover_animation_burger_menu.js",
            "./src/js/scripts/main/leave_request_scripts/leave_request_scripts.js",
            "./src/js/scripts/main/leave_request_mobile_scripts/leave_request_mobile_scripts.js",
            "./src/js/scripts/main/leave_request_scripts/gsap_leave_request.js",
            "./src/js/scripts/main/gsap_media/gsap_media_container.js",
            "./src/js/scripts/main/our_services_scripts/gsap_our_services.js",
            "./src/js/scripts/main/what_u_get_scripts/gsap_what_u_get.js",
            "./src/js/scripts/main/our_products_scripts/gsap_our_products.js",
            "./src/js/scripts/main/our_products_scripts/our_products_hover_redirect.js",
            "./src/js/scripts/main/our_reliability_scripts/our_reliability_scripts.js"
        ],
        legal: [
            "./src/js/scripts/main/preloader/preloader.js",
            "./src/js/scripts/legal/gsap_legal_animation.js"
        ]
    },
    output: {
        filename: 'bundled_[name].js',
        path: path.resolve(__dirname, 'dist/js/scripts'),
    }
};

// npx webpack to run