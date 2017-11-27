'use strict';
var notify = require('gulp-notify');

module.exports = gulp_fonts;

function gulp_fonts(gulp){
    return function() {
        var fontPath = './client-side/fonts';
        var src_font = [ 
            fontPath + '/AvenirNextLTPro-Bold.otf', 
            fontPath + '/AvenirNextLTPro-Demi.otf', 
            fontPath + '/AvenirNextLTPro-MediumCn.otf', 
            fontPath + '/AvenirNextLTPro-Regular.otf', 
            fontPath + '/fontawesome-webfont.eot',
            fontPath + '/fontawesome-webfont.svg',
            fontPath + '/fontawesome-webfont.ttf',
            fontPath + '/fontawesome-webfont.woff',
            fontPath + '/fontawesome-webfont.woff2', 
            fontPath + '/FontAwesome.otf',
            fontPath + '/glyphicons-halflings-regular.eot',
            fontPath + '/glyphicons-halflings-regular.svg',
            fontPath + '/glyphicons-halflings-regular.ttf',
            fontPath + '/glyphicons-halflings-regular.woff',
            fontPath + '/glyphicons-halflings-regular.woff2'
        ]
        return gulp.src(src_font)
        .pipe(gulp.dest('./client-side/tmp/fonts'))
        .pipe(notify({message:'Fonts are cloned to tmp !!'}));
    } 

}