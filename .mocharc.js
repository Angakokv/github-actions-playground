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
        'reportDir=./report',
        `reportPageTitle=${process.env.SUITE_NAME.toUpperCase()} #${process.env.GITHUB_RUN_NUMBER} ` +
            `${process.env.GITHUB_RUN_ID}`,
        `reportTitle=${process.env.SUITE_NAME.toUpperCase()} Results ` +
            `(${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/` +
            `${process.env.GITHUB_RUN_ID})`,
        `reportFilename=${process.env.SUITE_NAME.toUpperCase()}_Report`,
        `timestamp=${(new Date()).toISOString().slice(0, 19)}`
    ],
    retries: 0,
    sort: false,
    spec: ['test/**/*.spec.js'], // the positional arguments!
    timeout: '60000' // same as "timeout: '60s'"
    // timeout: false, // same as "'no-timeout': true" or "timeout: 0"
};
