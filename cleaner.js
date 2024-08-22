var glob = require('glob');
var fs = require('fs')

const working_directories = ['dist/js/scripts/main', 'dist/js/scripts/legal']

// working_directories.forEach((directory) => {
//     glob(directory, (err, files) => {
//         if (err) {
//             console.log(err);
//             process.exit(1);
//         }
//         files.forEach((value) => {
//             if (!value.includes('bundled')) {
//                 fs.unlinkSync(value);
//             }
//         })
//     })
// })

working_directories.forEach((directory) => {
    console.log(directory)
    console.log(fs.readdirSync(directory))
    const inner_directories = fs.readdirSync(directory);
    inner_directories.forEach((path) => {
        if (!path.includes("bundled")) {
            fs.rmSync(`${directory}/${path}`, {recursive: true})
        }
    })
})

