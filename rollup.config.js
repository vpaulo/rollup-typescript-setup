import typescript from '@rollup/plugin-typescript';
import pkg from './package.json'

export default {
    input: 'src/main.ts',
    output: {
        file: pkg.main,
        format: 'cjs',
        sourcemap: false,
        strict: true,
        banner: '(function() {',
        footer: '})();'
    },
    plugins: [
        typescript({lib: ["es5", "es6", "dom"], target: "es5"}),
    ],
}
