import {greet} from './greet';

console.log(greet('world'));

(async () => {
    const { add } = await import('./add');
    console.log('Add 2 + 3 =', add(2, 3));
})();