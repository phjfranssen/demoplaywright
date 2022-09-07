let options = [
    '--require cucumber.config.js',
    '--require tests/acceptance/stepDefinitions/*.js',
    '--format @cucumber/pretty-formatter',
    '--format json:./results/cucumber_report.json',
    '--publish-quiet',
].join(' ');

let run_features = [
    './tests/acceptance/features/',
    options,
].join(' ');

module.exports = { 
    test_runner: run_features
}; 