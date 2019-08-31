import Foo from './foo'

import React from 'react'
import ReactDOM from 'react-dom'
import HelloReact from './component/hello-react'



let foo = new Foo();
let textNode = document.createTextNode(foo.doSomething());

document.querySelector('main').appendChild(textNode);



ReactDOM.render(
  <HelloReact />,
  document.getElementById('hello-react')
);
