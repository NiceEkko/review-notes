##Java并发编程的艺术

第1章　并发编程的挑战 1
1.1　上下文切换 1
1.1.1　多线程一定快吗 1
1.1.2　测试上下文切换次数和时长 3
1.1.3　如何减少上下文切换 3
1.1.4　减少上下文切换实战 4
1.2　死锁 5
1.3　资源限制的挑战 6

第2章　Java并发机制的底层实现原理 8
2.1　volatile 的应用 8
2.2　synchronized 的实现原理与应用 11
2.2.1　Java对象头 12
2.2.2　锁的升级与对比 13
2.3　原子操作的实现原理 16

第3章　Java内存模型 21
3.1　Java内存模型的基础 21
3.1.1　并发编程模型的两个关键问题 21
3.1.2　Java内存模型的抽象结构 22
3.1.3　从源代码到指令序列的重排序 23
3.1.4　并发编程模型的分类 24
3.1.5　happens-before简介 26
3.2　重排序 27
3.2.1　数据依赖性 28
3.2.2　as-if-serial语义 28
3.2.3　程序顺序规则 29
3.2.4　重排序对多线程的影响 29
3.3　顺序一致性 31
3.3.1　数据竞争与顺序一致性 31
3.3.2　顺序一致性内存模型 32
3.3.3　同步程序的顺序一致性效果 34
3.3.4　未同步程序的执行特性 35
3.4　volatile的内存语义 38
3.4.1　volatile的特性 38
3.4.2　volatile写-读建立的happens-before关系 39
3.4.3　volatile写-读的内存语义 40
3.4.4　volatile内存语义的实现 42
3.4.5　JSR-133为什么要增强volatile的内存语义 46
3.5　锁的内存语义 47
3.5.1　锁的释放-获取建立的
happens-before关系 47
3.5.2　锁的释放和获取的内存语义 48
3.5.3　锁内存语义的实现 50
3.5.4　concurrent包的实现 54
3.6　final域的内存语义 55
3.6.1　final域的重排序规则 55
3.6.2　写final域的重排序规则 56
3.6.3　读final域的重排序规则 57
3.6.4　final域为引用类型 58
3.6.5　为什么final引用不能从构造函数内“溢出” 59
3.6.6　final语义在处理器中的实现 61
3.6.7　JSR-133为什么要增强f?inal的语义 62
3.7　happens-before 62
3.7.1　JMM的设计 62
3.7.2　happens-before的定义 64
3.7.3　happens-before规则 65
3.8　双重检查锁定与延迟初始化 67
3.8.1　双重检查锁定的由来 67
3.8.2　问题的根源 69
3.8.3　基于volatile的解决方案 71
3.8.4　基于类初始化的解决方案 72
3.9　Java内存模型综述 78
3.9.1　处理器的内存模型 78
3.9.2　各种内存模型之间的关系 80
3.9.3　JMM的内存可见性保证 80
3.9.4　JSR-133对旧内存模型的修补 81

第4章　Java并发编程基础 83
4.1　线程简介 83
4.1.1　什么是线程 83
4.1.2　为什么要使用多线程 84
4.1.3　线程优先级 85
4.1.4　线程的状态 87
4.1.5　Daemon线程 90
4.2　启动和终止线程 91
4.2.1　构造线程 91
4.2.2　启动线程 92
4.2.3　理解中断 92
4.2.4　过期的suspend()、resume()和stop() 93
4.2.5　安全地终止线程 95
4.3　线程间通信 96
4.3.1　volatile和synchronized关键字 96
4.3.2　等待/通知机制 98
4.3.3　等待/通知的经典范式 101
4.3.4　管道输入/输出流 102
4.3.5　Thread.join()的使用 103
4.3.6　ThreadLocal的使用 105
4.4　线程应用实例 106
4.4.1　等待超时模式 106
4.4.2　一个简单的数据库连接池示例 106
4.4.3　线程池技术及其示例 110
4.4.4　一个基于线程池技术的简单Web服务器 114

第5章　Java中的锁 119
5.1　Lock接口 119
5.2　队列同步器 121
5.2.1　队列同步器的接口与示例 121
5.2.2　队列同步器的实现分析 124
5.3　重入锁 136
5.4　读写锁 140
5.4.1　读写锁的接口与示例 141
5.4.2　读写锁的实现分析 142
5.5　LockSupport工具 146
5.6　Condition接口 147
5.6.1　Condition接口与示例 148
5.6.2　Condition的实现分析 150

第6章　Java并发容器和框架 155
6.1　ConcurrentHashMap的实现原理与使用 155
6.1.1　为什么要使用ConcurrentHashMap 155
6.1.2　ConcurrentHashMap的结构 156
6.1.3　ConcurrentHashMap的初始化 157
6.1.4　定位Segment 159
6.1.5　ConcurrentHashMap的操作 160
6.2　ConcurrentLinkedQueue 161
6.2.1　ConcurrentLinkedQueue的结构 162
6.2.2　入队列 162
6.2.3　出队列 165
6.3　Java中的阻塞队列 167
6.3.1　什么是阻塞队列 167
6.3.2　Java里的阻塞队列 168
6.3.3　阻塞队列的实现原理 172
6.4　Fork/Join框架 175
6.4.1　什么是Fork/Join框架 175
6.4.2　工作窃取算法 176
6.4.3　Fork/Join框架的设计 177
6.4.4　使用Fork/Join框架 177
6.4.5　Fork/Join框架的异常处理 179
6.4.6　Fork/Join框架的实现原理 179

第7章　Java中的13个原子操作类 182
7.1　原子更新基本类型类 182
7.2　原子更新数组 184
7.3　原子更新引用类型 185
7.4　原子更新字段类 187

第8章　Java中的并发工具类 189
8.1　等待多线程完成的CountDownLatch 189
8.2　同步屏障CyclicBarrier 191
8.2.1　CyclicBarrier简介 191
8.2.2　CyclicBarrier的应用场景 193
8.2.3　CyclicBarrier和CountDownLatch的区别 195
8.3　控制并发线程数的Semaphore 196
8.4　线程间交换数据的Exchanger 198

第9章　Java中的线程池 200
9.1　线程池的实现原理 200
9.2　线程池的使用 203
9.2.1　线程池的创建 203
9.2.2　向线程池提交任务 205
9.2.3　关闭线程池 205
9.2.4　合理地配置线程池 206
9.2.5　线程池的监控 206

第10章　Executor框架 208
10.1　Executor框架简介 208
10.1.1　Executor框架的两级调度模型 208
10.1.2　Executor框架的结构与成员 208
10.2　ThreadPoolExecutor详解 213
10.2.1　FixedThreadPool详解 213
10.2.2　SingleThreadExecutor详解 214
10.2.3　CachedThreadPool详解 215
10.3　ScheduledThreadPoolExecutor详解 217
10.3.1　ScheduledThreadPoolExecutor的运行机制 217
10.3.2　ScheduledThreadPoolExecutor的实现 218
10.4　FutureTask详解 221
10.4.1　FutureTask简介 222
10.4.2　FutureTask的使用 222
10.4.3　FutureTask的实现 224

第11章　Java并发编程实践 228
11.1　生产者和消费者模式 228
11.1.1　生产者消费者模式实战 229
11.1.2　多生产者和多消费者场景 231
11.1.3　线程池与生产消费者模式 234
11.2　线上问题定位 234
11.3　性能测试 236
11.4　异步任务池 238


##Java并发编程实战
https://time.geekbang.org/column/intro/159

第一部分： (13讲)

01 | 可见性、原子性和有序性问题：并发编程Bug的源头

02 | Java内存模型：看Java如何解决可见性和有序性问题

03 | 互斥锁（上）：解决原子性问题

04 | 互斥锁（下）：如何用一把锁保护多个资源？

05 | 一不小心就死锁了，怎么办？

06 | 用“等待-通知”机制优化循环等待

07 | 安全性、活跃性以及性能问题

08 | 管程：并发编程的万能钥匙

09 | Java线程（上）：Java线程的生命周期

10 | Java线程（中）：创建多少线程才是合适的？

11 | Java线程（下）：为什么局部变量是线程安全的？

12 | 如何用面向对象思想写好并发程序？

13 | 理论基础模块热点问题答疑

第二部分：并发工具类 (14讲)


14 | Lock和Condition（上）：隐藏在并发包中的管程

15 | Lock和Condition（下）：Dubbo如何用管程实现异步转同步？

16 | Semaphore：如何快速实现一个限流器？

17 | ReadWriteLock：如何快速实现一个完备的缓存？

18 | StampedLock：有没有比读写锁更快的锁？

19 | CountDownLatch和CyclicBarrier：如何让多线程步调一致？

20 | 并发容器：都有哪些“坑”需要我们填？

21 | 原子类：无锁工具类的典范

22 | Executor与线程池：如何创建正确的线程池？

23 | Future：如何用多线程实现最优的“烧水泡茶”程序？

24 | CompletableFuture：异步编程没那么难

25 | CompletionService：如何批量执行异步任务？

26 | Fork/Join：单机版的MapReduce

27 | 并发工具类模块热点问题答疑

第三部分：并发设计模式 (10讲)


28 | Immutability模式：如何利用不变性解决并发问题？

29 | Copy-on-Write模式：不是延时策略的COW

30 | 线程本地存储模式：没有共享，就没有伤害

31 | Guarded Suspension模式：等待唤醒机制的规范实现

32 | Balking模式：再谈线程安全的单例模式

33 | Thread-Per-Message模式：最简单实用的分工方法

34 | Worker Thread模式：如何避免重复创建线程？

35 | 两阶段终止模式：如何优雅地终止线程？

36 | 生产者-消费者模式：用流水线思想提高效率

37 | 设计模式模块热点问题答疑

第四部分：案例分析 (4讲)

38 | 案例分析（一）：高性能限流器Guava RateLimiter

39 | 案例分析（二）：高性能网络应用框架Netty

40 | 案例分析（三）：高性能队列Disruptor

41 | 案例分析（四）：高性能数据库连接池HiKariCP

第五部分：其他并发模型 (4讲)

42 | Actor模型：面向对象原生的并发模型

43 | 软件事务内存：借鉴数据库的并发经验

44 | 协程：更轻量级的线程

45 | CSP模型：Golang的主力队员