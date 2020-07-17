import typescript from '@rollup/plugin-typescript';
import pkg from './package.json'

export default {
    input: 'src/main.ts',
    output: {
        file: pkg.module,
        format: 'es',
        sourcemap: false,
        strict: true,
        banner: '(() => {',
        footer: '})();'
    },
    plugins: [
        typescript(),
    ],
}
