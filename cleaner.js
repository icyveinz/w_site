var glob = require('glob');
var fs = require('fs');

const working_directories = ['dist/js/scripts/main/**/*.js', 'dist/js/scripts/legal/*.js']

working_directories.forEach((directory) => {
    glob(directory, (err, files) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        files.forEach((value) => {
            if (!value.includes('-min')) {
                fs.unlinkSync(value);
            }
        })
    })
})
