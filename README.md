# virtual-DOM
Implement  virtual DOM 
## Reference 
[video](https://www.youtube.com/watch?v=85gJMUEcnkc&list=PLo3rprOUyd4No6uFxJ5DU1J43U2x5EZZK&index=1&t=1403s)
[document](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/build-a-simple-virtual-dom-5cf12ccf379f)
## Introduction 
virtual DOM is actually a plain object, using diff algorithm to find different part then update to the DOM tree.
In recent framework (react, vue, etc.) their are three steps to finish virtual implementation . 

1.createRoot or createElement ( create a DOM object )

2.Make a real element.

3. Mount the element on the tree.

## How to Observe the change of DOM?
1.Proxy(prefer)
2.Timer

