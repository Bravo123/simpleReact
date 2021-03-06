// * 对于仅仅移动的情况
// ABCD => BADC
// 构造一下数据结构
// 对于老集合可得 A.mountIndex = 0; B.mountIndex = 1; C.mountIndex = 2; D.mountIndex = 3;
// 对于新集合可得 B.mountIndex = 0; A.mountIndex = 1; D.mountIndex = 2; C.mountIndex = 3;
// diff的过程也就是如何得出新集合当中各个数据的mountIndex，从而用移动来代替创建和销毁的消耗性能的操作。
// 当prevChild.mountIndex < lastIndex时对节点进行移动 反之不动 nextChild.mountIndex = nextIndex;
// 每轮比较 lastIndex = Math.max(prevChild.mountIndex, lastIndex) nextIndex++;

// 下个要更新节点的位置
// let lastIndex = 0; 
// 下个要更新节点的下标
// let nextIndex = 0;

// 对于新的BADC节点
// 第一次循环
// B在老集合中的mountIndex = 1 
// 1 < 0 不成立故B节点不进行移动; B.mountIndex = 0; lastIndex = Math.max(1, 0); lastIndex = 1; nextIndex = 1;

// 第二次
// 老集合A.mountIndex = 0; 0 < 1; A进行移动; A.mountIndex = 1; lastIndex = Math.max(0, 1); lastIndex = 1; nextIndex = 2; 

// 第三次
// 老集合中D.mountIndex = 3; 3 < 1; 不成立,不移; D.mountIndex = 2; lastIndex = Math.max(3, 1); lastIndex = 3; nextIndex = 3;

// 第四次
// 老集合中C.mountIndex = 2; 2 < 3; 成立; C.mountIndex = 3; lastIndex = Math.max(2, 3); lastIndex = 3; nextIndex = 4; 至此已结束

// 可得到新合集中的mountIndex => B.mountIndex = 0; A.mountIndex = 1; D.mountIndex = 2; C.mountIndex = 3;


// * 当有新节点插入和旧节点删除时的处理方式
// 跟上面情况类似 只不过遇到要插入的时候新建插入 删除时删除 lastIndex和nextIndex都是同样的操作
// 不过有种情况是最耗时的 ABCD -> DABC 理论上只需要将D移到最前面 但是按照上面的算法显然有多余的操作 
// 有空可以看看vue的diff算法 好像是采用了首尾双指针的方式

// 看看代码的实现方式

```JS

```