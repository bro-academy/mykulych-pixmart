import html from '@html-eslint/eslint-plugin';

export default [
    {
        ...html.configs['flat/recommended'],
        files: ['src/**/*.njk'],
        rules: {
            'require-img-alt': 'off', // отключаем проверку на alt атрибуты
            'color-hex-alpha': 'off', // отключить запрет на hex с альфа
        },
    },
];
