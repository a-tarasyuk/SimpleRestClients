const rollupPreprocessor = require('./rollup.test');

module.exports = config => (
    config.set({
        basePath: '',
        frameworks: ['jasmine-ajax', 'jasmine'],
        reporters: ['spec', 'kjhtml'],
        plugins: [
            'karma-jasmine-html-reporter',
            'karma-rollup-preprocessor',
            'karma-chrome-launcher',
            'karma-spec-reporter',
            'karma-jasmine-ajax',
            'karma-jasmine',
        ],

        customLaunchers: {
            ChromeHeadlessNoSandbox: { base: 'ChromeHeadless', flags: ['--no-sandbox'] },
        },

        preprocessors: {
            'test/**/*.spec.ts': ['rollup'],
            'src/**/*.spec.ts': ['rollup'],
        },

        files: [{ pattern: 'test/**/*.spec.ts', watched: true, included: true }],
        logLevel: config.LOG_INFO,
        colors: true,
        mime: {
            'text/x-typescript': ['ts'],
        },
        rollupPreprocessor,
    })
);
