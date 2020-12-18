# Sprint2 阶段汇报 - DANBO

我们小组做的是**DANBO**，一个宗旨为**兴趣社交的线上社交平台**。

我们采用了github看板协同开发，项目地址点击[此处](https://github.com/chty627/Software-Engineering-Project---Danbo)

小组成员：宁晨然、何瑞安、王洪、王锐、李兆炀、王子仪、邢书豪

本文档记录了蛋博小组Sprint2开发的过程，包括：

- Sprint2 简介（计划会议和站会记录）
- Sprint2 需求（产品backlog与设计）
- Sprint2 评审
- Sprint2 技术讲解（前端技术和后端技术讲解）
- Sprint2 产品展示



## 1. Sprint2 简介

Sprint2时长一个月。小组已经经历了sprint1的磨合期，所以前后端交互变得容易。我们还是分为前端组和后端组，但是和sprint1不同的是：sprint1我们发现后端的api和前端的制作有一些隔阂，虽说框架是分离开发，但是作为小型团队，前后端的交流还是少了很多。所以这次专门安排一个同学负责做前后端交互的内容，负责前端小组和后端小组的沟通交流，使得前后端代码也统一了很多。综上考虑，我们召开了sprint2的计划会议。

### 1.1 Sprint2 计划会议

计划会议在sprint2开始之前召开，确立了以下内容：

- 需要完成的新的内容
- 人员分工调整和时间安排

#### 增量内容

需要包含以下五个页面（功能）的前端和后端实现：

**发动态**：发布个人动态，包括文字图片等内容

**点赞**：点赞博客，取消点赞

**评论**：评论博客，获取博客评论

**转发**：转发博客

**关注**：获取关注列表，关注用户，取消关注

#### 人员分工

后端分工：王子仪完成架构代码，邢书豪完成测试修改，何瑞安完成文档编写

前端分工：王锐和宁晨然完成主页设计和点赞评论转发的实现，王洪完成个人页面设计，李兆炀完成关注页面的设计

前后端交互：王锐

技术报告：邢书豪完成集成测试的部署，准备技术报告

| 任务                 | 成员   |
| -------------------- | ------ |
| 前端主页设计         | 宁晨然 |
| 前端动态部分设计     | 王锐   |
| 前端个人信息页面更新 | 王洪   |
| 前端关注页面更新     | 李兆炀 |
| 前后端交互           | 王锐   |
| 后端框架             | 王子仪 |
| 后端代码测试         | 邢书豪 |
| 后端文档撰写         | 何瑞安 |
| 技术报告             | 邢书豪 |
| 前后端代码文档汇总   | 宁晨然 |

#### 时间计划

第一周（11月2号至11月8号）：王锐指导前后端完成对接，前端继续完成页面设计

第二周（11月9号至11月15号）：前后端分别实现点赞、评论、转发和关注功能

第三周（11月16号至11月22号）：前后端分别单元测试与修改，前端进行集成测试

第四周（11月23号至11月29号）：总结文档，召开Sprint评审和总结会议

### 1.2 Sprint2 站会记录

我们针对每一周的sprint迭代开发内容，进行了每一周的进度跟踪。

由于每天记录sprint开发的成本比较高，我们一次sprint持续一个月，不同于企业的每周一次sprint开发，所以我们认为站会目前只需要一周一次，这样既能保证跟踪进度、也能有效人员分工，减少重复会议。

| 第一周 | 今天（本周）打算做                                         | 遇到什么问题 |
| ------ | ---------------------------------------------------------- | ------------ |
| 何瑞安 | 前后端交互调试                                             |              |
| 王锐   | 前端发送请求规范，前后端联调                               |              |
| 宁晨然 | 前后端交互调试和主页面更新                                 |              |
| 李兆炀 | 了解相关API调用。加入接收关注请求以及相关API调试。         |              |
| 王洪   | 了解相关API调用。调试个人信息页面API，修改增加他人信息页面 |              |
| 邢书豪 | 了解git action CI/CD                                       |              |
| 王子仪 | 为写sprint2后端代码做准备                                  |              |

| 第二周 | 做了什么                                                    | 今天（本周）打算做                                           | 遇到什么问题                           |
| ------ | ----------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------- |
| 何瑞安 | 添加了登陆验证功能                                          | 协助完成后端设计                                             | cookie的使用不明确，需要与前端更多沟通 |
| 王锐   | 完善了前端登录注册等页面与后端交互的逻辑，与后端协调修改API | 将前端与后端交互的规范写成文档供其他成员参考                 | 交互过程中的跨域问题                   |
| 宁晨然 | 准备sprint2前端链接                                         | 写主页部分 新增动态功能                                      | 无                                     |
| 李兆炀 | 尝试前后端交互，了解相关库函数的使用                        | 结合前端页面响应与后端数据API完善目标请求，调试关注页面显示设置 | 在前后端连接时遇到相关匹配问题         |
| 王洪   | 学习API使用，了解相关库函数的使用，尝试链接前后端           | 结合前端页面响应与后端数据API完善目标请求，调试个人信息界面，显示他人信息界面 | 链接使用不熟练，查后端API文档比较慢    |
| 邢书豪 | 熟悉 git action ci/cd                                       | 编写技术报告，协助后端测试                                   |                                        |
| 王子仪 | 准备sprint2后端                                             | 写sprint2后端代码                                            |                                        |

| 第三周 | 做了什么                                                     | 今天（本周）打算做                        | 遇到什么问题                             |
| ------ | ------------------------------------------------------------ | ----------------------------------------- | ---------------------------------------- |
| 何瑞安 | 协助完成技术报告与后端设计                                   | 完成后端设计文档和API文档                 | 前后端交流不紧密，有很多需求不知道       |
| 王锐   | 将前端与后端交互的规范和前后端联调方式写成文档供其他成员参考 | 初步设计发布内容所需使用的编辑器          | 代码规范                                 |
| 宁晨然 | 修改主页                                                     | 链接前后端整合代码                        | 任务比较困难 花了许多时间学习            |
| 李兆炀 | 根据api文档调试API与前端链接                                 | 尝试将全部相关API应用到关注页面，整合代码 |                                          |
| 王洪   | 调试API                                                      | 继续完成API和设计他人资料界面并连接API    | 前后端交流不紧密，有很多需求没有及时提出 |
| 邢书豪 | 学习CI/CD                                                    | 测试sprint2                               |                                          |
| 王子仪 | 写sprint2后端代码                                            | 修改sprint2代码                           |                                          |

| 第四周 | 做了什么                                                  | 今天（本周）打算做                | 遇到什么问题                                 |
| ------ | --------------------------------------------------------- | --------------------------------- | -------------------------------------------- |
| 何瑞安 | 完成后端设计文档和API文档，协助Sprint2测试                | 完成Sprint2文档，协助Sprint3设计  |                                              |
| 王锐   | 微博发布内容                                              | 微博中对图像的请求和显示          |                                              |
| 宁晨然 | sprint2主页前端和后端链接联调                             | sprint2follow页面调整、动态刷新   | 前端逻辑不清晰，重新整理了一遍取数据的过程   |
| 李兆炀 | sprint2关注界面的api调试                                  | 完善上述并测试                    |                                              |
| 王洪   | sprint2个人信息界面的api调试，他人信息界面地建立并链接api | 完善上述并测试                    | vue的同步问题以及和后端的沟通不紧密引发的bug |
| 邢书豪 | sprint2部分的后端测试                                     | sprint3部分后段测试，协助后端设计 |                                              |
| 王子仪 | 完善Sprint2后端                                           | Sprint3设计                       |                                              |



## 2. Sprint2 需求

在Sprint1中，我们实现了产品的框架，能够实现基本的登陆，页面有了前端基础的框架。后端的api开始逐渐规范。但是，我们没有完全解决前后端的链接问题，所以sprint2中一开始着重应该侧重于解决前后端链接问题，把前后端的链接问题先解决掉。然后将sprint1中实现的前端功能先基础的链接上后端的api。然后就是新增的增量内容的撰写。

### 2.1 设计理念

考虑到我们的技术能力问题，再综合考虑学习成本和时间成本。我们决定先实现出基础的微博功能，其中就包括了个人信息页面、他人信息页面、点赞评论转发等功能。然后实际操作中有一些功能还在建设中，没有完整实现，比如评论转发还涉及到刷新和后端更多数据库更新比较困难，所以最终没有在sprint2中实现完全。

我们定义这个产品界定于微博和朋友圈之间。

### 2.2 需求

下面列出了Sprint2我们考虑到的需求。

#### 用户需求

作为一个“用户”

我想要“创建账号并登陆”

以便于“加入蛋博”

Est: 1月 Pri: 高

 

作为一个“用户”

我想要“修改我的个人信息”

以便于“展示我自己的特色，吸引别人关注我”

Est: 1月 Pri: 高

 

作为一个“用户”

我想要“修改我的密码”

以便于“忘记密码的时候重新设置我的密码”

Est: 1月 Pri: 高

 

作为一个“用户”

我想要“发布我的动态”

以便于“抒发我的想法，展示我的生活”

Est: 1月 Pri: 高

 

作为一个“用户”

我想要“关注其他人”

以便于“寻找有趣的人和事，了解身边的人”

Est: 1月 Pri: 高

 

作为一个“用户”

我想要“评论他人的动态”

以便于“对他人的动态发表看法，与他人交流”

Est: 2月 Pri: 高

 

作为一个“用户”

我想要“点赞他人的动态”

以便于“对他人的动态表示赞同”

Est: 2月 Pri: 中

 

作为一个“用户”

我想要“转发他人的动态”

以便于“将他人的动态转发到自己的博客里面”

Est: 2月 Pri: 低

 

作为一个“用户”

我想要“标记动态的话题”

以便于“参与话题讨论，与其他人交流意见”

Est: 3月 Pri: 中

 

作为一个“用户”

我想要“搜索话题相关动态”

以便于“查看话题下其他人的动态，一起进行讨论”

Est: 3月 Pri: 中



作为一个“用户”

我想要“搜索目标用户”

以便于“查看他的信息并关注其他用户”

Est: 3月 Pri: 中



作为一个“用户”

我想要“查看话题的排名”

以便于“了解当下的热搜，找到讨论最多的话题”

Est: 3月 Pri: 低

 

作为一个“用户”

我想要“私聊其他人”

以便于“私下讨论不方便在公众场合讨论的事情”

Est: 4月 Pri: 低

 

#### 管理员需求

 

作为一个“管理员”

我想要“删除不当的动态”

以便于“清洁言论环境，避免冲突”

Est: 3月 Pri: 低

 

作为一个“管理员”

我想要“清除违反规则的用户”

以便于“清洁言论环境，防止骚扰诈骗”

Est: 3月 Pri: 低

 ### 2.3 实现内容

Sprint2中主要着重前后端的链接，能够实现实际的传递参数，实现用户的登陆注册、修改个人信息、查看关注列表、发布博客、点赞等需求。

具体展示见后面产品展示。

## 3. Sprint2 评审与产品展示

Sprint2产品主要实现前端和后端的链接操作，进行了充分的数据库交换。前端建立前端临时数据库和cookie缓存，后端进行了完整的api撰写。

### 3.1 团队总结

我们使用github进行协同开发，使用github Desktop进行代码同步和分支管理。每个人自己创建一个分支，分别进行各自的开发工作，然后确认无误后由一名同学进行汇总，然后汇总到master branch上。

我们使用了zenhub的插件，可以进行看板管理，符合sprint迭代开发的工作原理。

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129135530353.png" alt="image-20201129135530353" style="zoom: 67%;" />

上图是Sprint2的迭代开发过程的Cumulative flow，可以从图中看出：

- 符合迭代开发的流程，其中issue从创建开始到closed经历了一定的时间
- 在开发后期的速度明显比前期快：
  - 可能是因为在后期大家效率也提升
  - 前期我们正在摸索着做什么内容

之后改进的话，因为下次sprint3是在期末季大家都比较忙，所以会把开发流程集中在开发前两周做完。

### 3.2 前后端交互

上一次sprint中出现了严重的前端和后端割裂的情况，所以在开发的时候，前端小组做的框架和后端小组做的框架没有很好的适配在一起。而且由于没有规范化的前后端交互，导致前端看不懂后端代码api，后端看不懂前端的逻辑。所以本次sprint开始的时候，专门设置了一名同学（王锐）专门负责前后端交互。

他的工作如下：

- 整合sprint1目前为止所有的前后端代码，到一个框架下，使其运行无误。
- 撰写前后端交互的统一API，后端同学按照api格式撰写后端url的内容，前端同学按照类似格式设置请求后端的数据，进行合理的前后端数据交互。

结果如预期一样良好，因为有了专门的前后端交互成员，前端小组和后端小组隔阂消除了很多，链接部分仿照规范化的模板制作。

另外前端小组还另外设置了前端的数据库：

- 由于前端也需要获取大量的数据，在vue的各种组件中提取，所以我们使用了前端临时公用数据库供所有vue组件库调用

### 3.3 评审会议

#### 参会人员

产品负责人：何瑞安

开发团队：宁晨然、王洪、李兆炀、王锐、何瑞安、王子仪、邢书豪

#### 产品负责人发言

已完成的待办：关注他人，查看他人动态，评论点赞转发博客（未完成完整）

未完成的待办：话题热搜，搜索用户和话题，评论点赞转发博客（剩余部分）

可能交付日期：12月25日

#### 开发团队发言

问题1：现在运行状况怎么样？

回答：现在已经可以部署运行了，基本操作没有问题，还需要对极端例子进行测试，以提升逐渐的鲁棒性。

问题2：现在用户的体验如何？

回答：用户现在已经可以发布微博，进行点赞和评论了，但有一些bug还没调试完成，在我们预设好的数据库中可以进行操作，但是搜索用户和获取热榜的功能尚未实现，用户无法主动获取其他用户的信息和未关注人的微博，Sprint3之后才能完整进行体验。

#### 下一步计划

市场与用户改变：用户需要根据在外部了解到的信息寻找相关用户或者话题，搜索功能成为用户必不可少的需求

下一步的工作：完成预计的热搜功能，添加搜索用户和话题的功能

下一步的时间表：12月25日交付可以使用的最终版本

### 3.4 总结会议

#### Sprint情况

我们分成了前端小组和后端小组，分别完成前端和后端设计的任务，两组人员内部联系比较紧密，开发效率很高，但是小组之间的交流不够频繁，导致代码和接口很难完全统一。通过设置交互人员来解决了该问题。

Sprint2中我们延续Sprint1的开发流程，完成了关注他人，查看他人动态，评论点赞转发博客等功能，并且顺利完成了前后端的对接，能够流畅进行运行。由于搜索和热榜功能尚未实现，用户不能主动关注和获取信息，暂时只能在测试环境中运行。点赞评论转发功能还在测试阶段，没有完全实现。

#### 优缺点反思

##### 优点

（1）后端采用一人设计与实现的分工，保证了实现的一致性，减少了多种实现竞争产生的开销。

（2）采用了完整的单元测试与集成测试结合的测试流程，有专门的人员负责测试，对代码的健壮性和正确性的提升有重要作用。

（3）前端采用交互式的页内及时更新的动态网页，减少了很多请求内容。

（4）大部分逻辑放在后端处理，减少前后端交互次数。

##### 缺点

（1）前后端实现有时间差，需要后端确定API之后，前端才能考虑开发的细节。

（2）人员的时间安排比较分散，很难找到统一的时间进行讨论与开发。

（3）没有统一的测试平台，其他人进行测试时，可能需要繁杂的配置。

#### 改进方法建议

（1）后端设计尽早进行，整理出API文档交付前端匹配，然后在讨论中不断更新设计。

（2）任务分配尽早进行，让大家自己协调时间进行开发，有效利用仓库中的issue和通讯工具加强内部交流。

（3）总结出完整的测试样例并配置好数据库，这样每次都可以复用这个数据库进行测试。



## 4. 后端设计

后端设计由后端小组（何瑞安，王子仪，邢书豪）完成。

### 4.1 后端简介

*此4.1简介部分和Sprint1中相同，没有太大变化。*

#### 框架与环境

蛋博后端使用Python写成，调用了django框架，django 是一个开放源代码的 Web 应用框架，由 Python 写成。django 采用了 MVT 的软件设计模式，即模型（Model），视图（View）和模板（Template）。

在这里我们仅仅使用了模型和视图来构建我们的Web API，模型用来存储数据，视图里面实现了各种功能接口，使得后端成为前端能够调用的各种文件和数据库的接口的实现。

数据库接口使用了默认的Sqlite3数据库，实现了自给自足的、无服务器的、零配置的、事务性的 SQL 数据库引擎，满足了用户信息的高效存储。

#### 功能与交互

后端负责用户，博文，评论等相关功能的模型（数据库）实现和增删改查的接口包装，完成登陆注册，发布博文，发表评论，搜索博文等等功能。

前后端通过本机网络中HTTP通信，前端一般发送POST信息，后端根据这个信息进行响应，返回前端所需要的信息。前端只需要专注于用户引导和显示，后端负责业务处理和数据持久化的工作。这样前后端有效的进行解耦，能够区分功能，加快设计编码效率。

### 4.2 用户模块

#### 模型

* 用户模型：它包括用户名（主键），密码，邮箱（主键），昵称，签名，生日，性别，地址字段。

* 验证码模型：它包括邮箱（外键），验证码，时间戳，发出时间字段。

* 头像模型：它包括关联的用户和图片字段。
* 关注模型：它包括关注者与被关注者的用户名，我们把关注抽象成一个模型，连接关注者与被关注者，可以方便利用外键查找。

#### 视图

##### 登陆API

（1）注册功能：用户首先提供邮箱，然后接受验证邮件，收到验证码，然后将用户名，密码，邮箱和验证码一起提交即可。注意只有当最后注册的时候才会提交所有信息，后端会在这时进行查验是否符合规范。我们在后端实现了发送验证邮件和注册的接口，发送验证邮件对应了注册页面的“验证邮箱”按钮，注册对应了最后的“注册”按钮。

（2）登陆功能只需要提供用户名和密码，然后提交。后端进行查验之后即登陆成功。

（3）在登陆功能旁边就是修改密码/找回密码的功能，这个和注册一样首先提供邮箱，然后接受验证邮件，收到验证码，然后将用户名，密码，邮箱和验证码一起提交即可。该页面同样应有“验证邮箱”和“修改”按钮。

##### 用户API

其他信息需要在个人信息展示进行修改，我们针对每一种信息，编写了修改接口和获取接口。前端只需要提供当前用户登录的Cookie信息和响应修改的字段就可以了。注意修改头像必须传递文件，获取头像返回值是相对路径，加上前缀才能获取真实路径。

##### 关注API

（1）获取关注列表与被关注列表：我们可以根据用户名找到他的关注者与被关注者，这对于用户的社交管理很有意义。

（2）关注与取消关注：我们提供了自由的关注和取消关注功能，用户可以在他人的个人资料页对其进行修改。

### 4.3 博客模块

#### 模型

* 博客模型：它包括发布博客的用户（外键），发布时间，文本内容字段，博客类别（转发/原创），转发指针（转发博客的 id 值）。后端采用链表结构存储转发博客，只有原博客才有图片，其他博客都指向各自的原博客。

* 图片模型：它包括图片所属的博客（外键），图片编号，图片路径字段。由于图片是依赖博客的，我们查询图片的时候是根据所属博客进行查询，将博客关联的图片与博客内容一起返回，我们创建的时候也是必须先有博客然后才放入相应的图片。获取的图片路径也是相对路径，需要加上前缀获得根据网址的绝对路径。

* 点赞模型：它包括点赞所属的博客和点赞用户。描述了用户和博客之间的一种关系，博客的点赞数会显示在博客的下方。
* 评论模型：它包括评论所属的博客和评论用户，还有评论时间与评论内容。

#### 视图

##### 博客API

（1）发送博客：需要提供文字内容和图片。我们后端根据用户Cookie，将当前时间和文字内容存入博客模型，生成博客实例之后，我们再根据创建的博客存入图片。图片可以存入多张，将会用不同的序号进行存储，保持上传时候的顺序。

（2）转发博客：与发送博客不同的是，这里只需要提供文字和转发的博客ID，由前端提供相应信息。这样的转发博客只有文字信息和用户信息，实际的内容是由转发的博客决定。

（3）点赞与取消点赞：点赞按钮在博客下方，前端通过发送用户Cookie和博客ID请求后端，后端会在数据库中相应记录。

（4）评论：评论也是在博客下方展现，前端通过发送用户Cookie和博客ID、评论内容请求后端，后端会在数据库中相应记录。

（5）获取用户博客：需要相应的用户名，后端能从博客中选取相应用户的博客，然后再根据博客选取出相应博客的图片，打包成{id：博客内容}的词典类型返回给前端。根据链式结构，我们迭代查询原博客，并记录每级转发的用户名和博客内容。直到遇到原博客，才寻找图片并返回。

（6）获取信息流：与获取博客不同的是，这里获取的是本人和关注者的博客。

（7）获取点赞和获取评论：与点赞评论相对应，前端会在加载博客时同时加载点赞和评论内容，只需要对后端发送博客ID就能获得相应内容。

![image-20201129141301590](D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129141301590.png)



## 5. 前端设计

前端人员有四名同学，分别是宁晨然、王洪、李兆炀、王锐。另外安排王锐负责前后端交互，宁晨然负责前端数据库建立。

### 5.1 前端简介

前端开发使用了vue.js的框架，并且结合vuetify组件库开发。我们将Sprint2需要开发的网页框架分为了四个板块，分别是：

- 前后端交互、动态发布（王锐负责）
- 前端数据库、主页（宁晨然负责）
- 关注人列表更新（李兆炀负责）
- 个人信息更新（王洪负责）

### 5.2 前端技术

本次Sprint2使用了新的许多技术内容。

#### 前后端交互更新

本项目采用前后端分离的开发和部署方式。前端使用Axios向后端发送请求和接收响应。在使用npm安装Axios后，在main.js中加入以下代码段来将Axios插件引入。

```javascript
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
// 使用Cookie
axios.defaults.withCredentials=true;
Vue.prototype.$axios = axios;
...
new Vue({
  ...
  axios,
  render: h => h(App)
}).$mount('#app')
```

由于前端发送请求需要后端API的url，且要考虑跨域问题，所以我们需要统一配置Proxy。在vue.config.js中加入以下代码段：

```javascript
module.exports = {
  ...
  devServer: {
    proxy: {
      '/user': {
        target: "http://127.0.0.1:8000/", //后端url
        changeOrigin: true,	//跨域
      },
      '/blog': {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      // 可添加其他后端接口
      ...
    },
  }
}
```

在按上述代码配置proxy以后，若后端发送请求的url中包含proxy配置中的key（如`/user`），会被自动加上target（这里是`http://127.0.0.1:8000/`）。例如，前端在发送请求时url为`/user/login`，那么真实请求报文中的url会被替换为`http://127.0.0.1:8000/user/login`。
在本地测试时这里的target使用local host(`http://127.0.0.1:8000/`)。在部署时我们要将target替换为后端服务的url。

在配置完成后我们介绍Axios的使用。因为在该项目中我们主要使用POST请求，所以以登录组件中向后端“用户登录”API发送的POST请求为例：

```javascript
methods: {
    req_login: function () {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名和密码！");
      } else {
        var formdata = new FormData();	//定义formdata
        formdata.append("username", this.username);	//将请求数据加入formdata中
        formdata.append("password", this.password);
        this.axios
          .post("/user/login", formdata, {
            headers: { "Content-Type": "multipart/form-data" },	//由于后端API对类型有要求，所以请求时一定要设置content-type为multipart/form-data
          })
          .then((response) => this.ack_login(response)) //使用methods中的函数处理响应
          .catch(function (error) {
            console.log(error);
          });
      }
    },

    ack_login: function (response) {
      var data = response.data;	//后端响应中的数据
      if (data.error_code == 200) {	//后端定义的error_code, 据此判断请求的结果
        alert("登录成功！欢迎" + this.username);
        this.$router.push("/home");
      } else {
        alert("登录失败\n" + data.message);
      }
    },
  },
```

由于后端API目前全部要求请求使用*HTTP协议的`multipart/form-data`格式*，所以我们要先定义一个`FormData`对象，将请求报文数据中的键值对加入`FormData`对象中，然后发送请求。

#### 前端数据库

为了前端框架的完整性，因为各个组件同时调用同一个数据很复杂，所以除了后端完整的api获取数据外，前端也建立了临时的公有数据库。我们定义了`global.vue`用于存放所有的共有数据库，所有组件可以通过引用代码：

```js
import global from "../components/global"
```

使用共有数据库中的所有数据。另外所有后端的api文档中的url也都写进了共有代码中。

```js
// information includes everything about one account
const information = {
    "username":"",
    "nickname":"",
    "email":"",
    "address":"",
    "birthday":"",
    "signature":"",
    "profile":"",
    "gender":"",
    "allBlogs":"",
    "followers":"",
    "followees":"",
    "login":false,
}

// lookup table for api
const request_api = {
    "username":["/user/getUsername",[]],
    "nickname":["/user/getNickname",["username"]],
    "email":["/user/getEmail",["username"]],
    "address":["/user/getAddress",["username"]],
    "birthday":["/user/getBirthday",["username"]],
    "signature":["/user/getSignature",["username"]],
    "profile":["/user/getProfile",["username"]],
    "gender":["/user/getGender",["username"]],
    "allBlogs":["/blog/refreshBlogs",[]],
    "followers":["/user/getFollowers",["username"]],
    "followees":["/user/getFollowees",["username"]],
}

const modify_api = {
    "nickname":["/user/modifyNickname",[]],
    "address":["/user/modifyAddress",[]],
    "birthday":["/user/modifyBirthday",[]],
    "gender":["/user/modifyGender",[]],
    "profile":["/user/modifyProfile",[]],
    "signature":["/user/modifySignature",[]],
    "password":["/user/modifyPassword",[]],
}
```

另外定义了`base.js`作为全局的公有方法，可以通过`this.function()`调用。

例如请求数据的共有前端api如下，比如可以通过`request_data("username")`直接请求后端数据并且存放在前端中。

- 需要注意加上`async`标识符，因为需要等待数据请求结束
- 所有数据存放在`information`中

```js
// Public API to request everything
async function request_data(needed_data) {
  // find required data to post
  // needed_data: str "nickname"

  //   console.log("Entering request_data")
  var request = global.request_api[needed_data];
  //   console.log(request)
  var api = request[0];
  var required_data = generate_data(request[1]);

//   console.log(required_data);
  //request needed data
  await axios.post(api, required_data).then((response) => {
    var data = response.data;
    if (data.error_code == 200)
      console.log(needed_data, data.data),
        global.information[needed_data] = data.data;
  });
}
```

#### 发布动态

在主页中间部分的顶端，用户可以发布动态。

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\release_blank.png" style="zoom:50%;" />

蛋博中的动态内容包含文字和图片，其中图片上传的数量范围为0~9。同时，用户在上传了图片后，可以在下方预览自己上传的图片：

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\release_horse.png" style="zoom:50%;" />

点击右下角的"share"发布动态后，下方动态推送列表会自动刷新，用户可以在列表中找到自己发送的动态：

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\weibo_horse.png" style="zoom:50%;" />

#### 主页更新

主页更新内容主要是可以显示刷新出来的动态、左边显示签名头像名字、中间可以发布动态且上传图片。

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129144333725.png" alt="image-20201129144333725" style="zoom: 33%;" />



#### 个人信息页面更新

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129141514433.png" alt="image-20201129141514433" style="zoom:50%;" />

个人信息界面：

- 由页面统一调配API，获取后端的昵称、邮箱、地址、性别、头像、生日、个性签名等信息。

- 侧栏添加头像、邮箱、昵称显示的。

- 主页信息显示，并增加点击控件，为每条信息单独修改。

- 头像界面显示头像，支持修改。

- 安全界面，直接获取邮箱填充，不用用户自己输入，然后可验证修改密码。

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129141541116.png" alt="image-20201129141541116" style="zoom:50%;" />

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129141552664.png" alt="image-20201129141552664" style="zoom:50%;" />

他人信息界面（新增）：

- 添加他人信息栏，显示昵称、粉丝关注以及邮箱生日地址性别个性签名等。背后的图片即为头像。
-  右边为这个人发的微博。

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129141528430.png" alt="image-20201129141528430" style="zoom:50%;" />



#### 关注列表更新

关注列表页面分为关注和被关注：

- 关注即following
- 被关注即follower

两者均在同一个页面，通过传入不同的`query`内容，即可获取不同的`follow_view`来判断是`following`还是`follower`。

```html
<v-btn text color="primary" @click="change">
        <router-link :to="{path:'/follow',query:{follow_view:true}}"   >Following</router-link>
      </v-btn>
      <v-btn text color="primary" @click="change">
        <router-link :to="{path:'/follow',query:{follow_view:false}}" >Followers</router-link>
      </v-btn>
```

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129142359189.png" alt="image-20201129142359189" style="zoom: 33%;" />

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129142410891.png" alt="image-20201129142410891" style="zoom:33%;" />

### 5.3 前后端运行

在前端完成交互逻辑的初步开发后，需要与后端进行联调。这里简单描述联调时本地运行前后端的方式。

#### 本地部署运行后端

在拉取后端代码后，在后端目录下运行如下命令:

```shell
python manage.py makemigrations app1 app2 ...

python manage.py migrate

python manage.py runserver
```

runserver后，可以看到输出的本地url。在本地测试时，前端vue.config.js的proxy配置中的target要修改为这个本地url：

```
System check identified no issues (0 silenced).
November 13, 2020 - 13:36:45
Django version 3.1.2, using settings 'danbo_backend.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

#### 本地运行前端(dev)

拉取前端代码后，在前端目录下运行如下命令（要先安装npm)：

```
npm install
npm run serve
```

也可以运行`vue ui`使用vue-cli图形化界面热加载运行前端，具体步骤略。

运行后端和前端后，便可以在本地进行测试/调试。



## 6 产品展示

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129144440573.png" alt="image-20201129144440573" style="zoom:33%;" />

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129142023625.png" alt="image-20201129142023625" style="zoom:33%;" />

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129142410891.png" alt="image-20201129142410891" style="zoom:33%;" />

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129142004537.png" alt="image-20201129142004537" style="zoom:33%;" />

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129142010968.png" alt="image-20201129142010968" style="zoom:33%;" />

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129141528430.png" alt="image-20201129141528430" style="zoom:50%;" />

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129141541116.png" alt="image-20201129141541116" style="zoom:50%;" />

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129141552664.png" alt="image-20201129141552664" style="zoom:50%;" />

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\image-20201129141514433.png" alt="image-20201129141514433" style="zoom:50%;" />

<img src="D:\复旦\计算机课程\大四上\软件工程化开发\project\Software-Engineering-Project---Danbo\Sprint2文档\release_horse.png" style="zoom:50%;" />