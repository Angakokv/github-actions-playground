module.exports = {
    color: true,
    exit: false, // could be expressed as "'no-exit': true"
    global: ['jQuery', '$'],
    jobs: 1,
    package: './package.json',
    parallel: false,
    recursive: true,
    reporter: 'mochawesome',
    'reporter-option': [
        'overwrite=true',
        'inline=true',
        'charts=true',
        `reportPageTitle=${process.env.SUITE_NAME.toUpperCase()}`,
        `reportTitle=${process.env.SUITE_NAME.toUpperCase()} Results`,
        `reportFilename=${process.env.SUITE_NAME.toUpperCase()}_Report`,
        `timestamp=${(new Date()).toISOString().slice(0, 19)}`
    ],
    retries: 0,
    sort: false,
    spec: ['test/**/*.spec.js'], // the positional arguments!
    timeout: '60000' // same as "timeout: '60s'"
    // timeout: false, // same as "'no-timeout': true" or "timeout: 0"
};
