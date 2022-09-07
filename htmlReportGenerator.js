var reporter = require('cucumber-html-reporter');

var options = {
        brandTitle: "Cucumber Demo Report",
        theme: 'bootstrap',
        jsonFile: 'results/cucumber_report.json',
        output: 'results/cucumber_report.html',
        screenshotsDirectory: 'results/screenshots/',
        storeScreenshots: true,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);