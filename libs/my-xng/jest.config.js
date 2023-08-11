module.exports = {
<<<<<<< HEAD:libs/my-xng/jest.config.js
  displayName: '@xng/my-xng',
=======
  displayName: 'xng-breadcrumb',
>>>>>>> b31cb894c3840682f98af3c97d07b45524e205ff:libs/xng-breadcrumb/jest.config.js
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.(html|svg)$',

      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  coverageDirectory: '../../coverage/libs/my-xng',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  transform: {
    '^.+.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
};
