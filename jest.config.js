module.exports = {
    roots: ['<rootDir>/src'],
    preset: "@testing-library/react-native",
    moduleNameMapper: {
      '@/(.*)': '<rootDir>/src/$1',
    },
    transformIgnorePatterns: [
      'node_modules/(?!(' +
        '@react-native|' +
        'react-native|' +
        'react-native-reanimated|' +
        'expo-linear-gradient|' +
        'moti|' +
        '@react-navigation|' +
        'expo-linear-gradient|' +
        'expo-modules-core|' +
        'expo-font|' +
        'expo-asset|' +
        'expo-constants|' +
        'expo-file-system|' +
        '@expo|' +
        '@expo|' +
        '/.*)/)',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node'],
    globalSetup: './jest/global_setup.ts',
    setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
};