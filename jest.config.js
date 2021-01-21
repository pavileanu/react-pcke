module.exports = {
    'testEnvironment': 'jsdom',
    'testResultsProcessor': './node_modules/jest-junit-reporter',
    'coverageReporters': ['text', 'lcov'],
    'snapshotSerializers': ['enzyme-to-json/serializer'],
    'setupFiles': ['./test-setup.js'],
    'transform': {
        "^.+\\.js(x)?$": "babel-jest"
    },
    "collectCoverageFrom": [
        "src/**/*.{js,jsx}",
        "!<rootDir>/node_modules/",
        "!**/ci/**"
    ],
    'globals': {
        'SITE_SETTINGS': {
            'API_BASE': 'http://localhost:5000'
        }
    },
    'moduleNameMapper': {
        "^.+\\.(svg|css|less|scss)$": "babel-jest"
    },
    'coverageThreshold': {
        'global': {
            'branches': 0,
            'functions': 0,
            'lines': 0,
            'statements': 0
        }
    }
};