const isHeadless = process.env.IS_HEADLESS || true;
const browserArgs = [
    '--window-size=800,1080'
]
const headlessBrowserArgs = [
    '--window-size=1920,1080'
]

module.exports.launchOptions = {
    defaultViewport: null,
    headless: isHeadless,
    args: isHeadless ? headlessBrowserArgs : browserArgs,
    ignoreHTTPSErrors: true,
    slowMo: 0,
    devtools: false,
};
