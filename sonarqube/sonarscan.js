const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "a197bc99ad15fa88525365470ff47815dff188ed",
        options: {
            'sonar.projectName': 'horse-meter',
            'sonar.projectDescription': 'horse-meter: Horse Racing app ',
            'sonar.projectKey': 'horse-meter',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)