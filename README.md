
add to your node js project :

```sh

npm install @abasb75/fraction --save

```

## usage example :


```javascript

import {compute , parse , renderTree} from '@abasb75/fraction';

const computeTest = compute('2+4');
console.log(computeTest);
//result : 6

const computeTest2 = compute('(2+4)/3',()=>{});
console.log(computeTest2);
//result : 2

const computeTest3 = compute('2/5*6/7',()=>{
    // this function execute when error occurred
    console.log('error')
});
console.log(computeTest3);
//result : 0.34285714285714286

const parseTest = parse('2+4',()=>{});
console.log(parseTest);
/*
result :
{
  type: 'plus',
  a: { type: 'number', value: '2' },
  b: { type: 'number', value: '4' }
}
*/


const renderTreeTest = renderTree('2+4',()=>{});
console.log(renderTreeTest);
/*
result :
+
├─ 2
└─ 4
}
*/

const parseInValid = parse('(3+',()=>{
    console.log('an error occurred')
})
//result : an error occurred


```
