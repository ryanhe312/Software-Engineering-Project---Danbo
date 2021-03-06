## Sprint 总结会议

### 1.Sprint情况

我们分成了前端小组和后端小组，分别完成前端和后端设计的任务，两组人员内部联系比较紧密，开发效率很高，但是小组之间的交流不够频繁，导致代码和接口很难完全统一。

Sprint2中我们延续Sprint1的开发流程，完成了关注他人，查看他人动态，评论点赞转发博客等功能，并且顺利完成了前后端的对接，能够流畅进行运行。由于搜索和热榜功能尚未实现，用户不能主动关注和获取信息，暂时只能在测试环境中运行。
### 2.优缺点反思
#### 优点

（1）后端采用一人设计与实现的分工，保证了实现的一致性，减少了多种实现竞争产生的开销。

（2）采用了完整的单元测试与集成测试结合的测试流程，有专门的人员负责测试，对代码的健壮性和正确性的提升有重要作用。

（3）前端采用交互式的页内及时更新的动态网页，减少了很多请求内容。

（4）大部分逻辑放在后端处理，减少前后端交互次数。

#### 缺点

（1）前后端实现有时间差，需要后端确定API之后，前端才能考虑开发的细节。

（2）人员的时间安排比较分散，很难找到统一的时间进行讨论与开发。

（3）没有统一的测试平台，其他人进行测试时，可能需要繁杂的配置。

### 3.改进方法建议
#### 改进

（1）后端设计尽早进行，整理出API文档交付前端匹配，然后在讨论中不断更新设计。

（2）任务分配尽早进行，让大家自己协调时间进行开发，有效利用仓库中的issue和通讯工具加强内部交流。

（3）总结出完整的测试样例并配置好数据库，这样每次都可以复用这个数据库进行测试。