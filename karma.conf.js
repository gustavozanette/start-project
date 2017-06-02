module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['browserify', 'jasmine'],

        files: [
            './assets/js/plugins.min.js',
            './assets/js/components/**/*.js',
            './tests/spec/**/*.js'
        ],

        exclude: [
        ],

        preprocessors: {
            './assets/js/components/**/*.js': ['browserify'],
            './tests/spec/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        }
    });
};
