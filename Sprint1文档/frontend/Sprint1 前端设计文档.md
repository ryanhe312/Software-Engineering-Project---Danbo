# Sprint1 前端设计文档

前端人员有四名同学，分别是宁晨然、王洪、李兆炀、王锐。

## 前端简介

前端开发使用了vue.js的框架，并且结合vuetify组件库开发。我们将Sprint1需要开发的网页框架分为了四个页面，分别是：

- 登陆注册（王锐负责）
- 主页（宁晨然负责）
- 关注人列表（李兆炀负责）
- 个人信息（王洪负责）

### 登陆注册

首先在未登录状态进入的是登陆注册的页面：

- 登陆页面时，

（王锐自己填充一下）



### 主页

登陆后会进入主页，主页的设计思想即分享与动态：

- 顶部为danbo的封面页面，有几个之后需要实现的功能，比如following动态和hot热点。包括搜索栏、收藏栏、交流沟通栏等需要之后完善。
- 左侧栏为个人信息，以简洁为主，显示个人名字、头像、签名等基础信息。可以通过following/followers跳转。
- 中间部分为分享平台，可以发表自己的分享动态，并且默认显示了my zone状态，可以查看自己之前发的动态（这个设计之后可能修改）。
- 右侧栏为实时热点栏，会动态刷新一下有趣的图片和话题等，具体功能实现将在后期完成。

![image-20201028194055638](\image-20201028194055638.png)

### 关注页面

主页中左侧栏关注人可以点击跳转至关注页面。这里的设计和主页有点类似，可能之后会将消息栏也融入到该页面中，否则该页面比较平淡。这个页面主要是：

- 左侧显示同主页相同。顶部也相同，可以通过顶部跳转回去。
- 中间部分为关注的人的列表，同时显示头像、个人简介等。
- 后续可以将followers同时加入到subtab中。

![image-20201028194106043](\image-20201028194106043.png)

### 个人信息页面

由主页点击进入，顶部继承了主页的danbo封面页面。

- 侧栏为信息选择框，需显示头像、昵称和注册邮箱。现已实现个人信息、头像、安全、关于我们。隐私和设置等待后续商讨后添加功能或删除。

- 个人信息主要是显示已有信息，设置save按键支持修改信息。

- 头像界面显示头像，并提供上传修改。

- 安全界面提供邮箱验证以修改密码。

- 关于我们显示团队信息，后续将添加版本信息

![image-20201028202650047](\image-20201028202650047.png)

![image-20201028202708205](\image-20201028202708205.png)

![image-20201028202726551](\image-20201028202726551.png)

![image-20201028202741491](\image-20201028202741491.png)

![image-20201028202752399](\image-20201028202752399.png)



## 前端实现

### 基本框架

<img src="\image-20201028195911534.png" alt="image-20201028195911534" style="zoom:67%;" />

使用vue.js建立了frontend整个框架，简介一下重要文件夹的作用

`public`：html模板放置位置

`node_modules`：每次`npm install`时会根据`pakage.json`的信息安装所需要的依赖包

`src`：最重要部分

​	`router/index.js`：注册所有需要的页面，每次建立新页面需要更新

​	`views`：页面内容

​		`components`：页面的所需要的组件，写好了放这里

​		`follow/personal/home/sign`等：建立的几个页面

`vue.config.js`：配置页面的入口

##### 单个页面的内容

![image-20201028201233974](\image-20201028201233974.png)

以`Home.vue`为例，`vue.js`的结构主要是上面的`template`和下面的`script`。可以通过`export`的方式，将组件输出出去。`components`主要是导入一下需要使用的组件库，来自于文件夹下其他`vue`文件。`data`部分涉及到后面传参和前后端交互。

```vue
<template>
  ...
</template>

<script>
export default {
  name: "Home",

  components: {
    TopBar: () => import("../components/TopBar"),
    Tweets: () => import("../components/Tweets"),
    SideBar: () => import("../components/SideBar"),
    RightBar: () => import("../components/RightBar"),
  },

  data: () => ({
  }),
};
</script>
```

`router.js`中用来设置路由：所有页面都需要在其中进行注册。

```js
const routes = [
  {
   path: '/',
   name: 'Home',
   component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import('../views/Sign/Sign.vue')
   },
   {
     path:'/follow',
     name:'Follow',
     component: () => import("../views/Follow/Follow.vue")
   },
   {
    path:'/personal',
    name:'personal',
    component: () => import("../views/Personal/Personal.vue")
  },
]
```

## 前端环境配置

#### 需要安装的包

使用前需要使用`npm`，`git`，`node.js`等内容，需要提前安装好，进行环境配置。安装好后，在`frontend`的文件夹下执行命令

```
npm install
```

此命令会根据`package.json`的内容，安装好所有需要的包，存放在`node_modules`里面。这个过程第一次执行可能会花一段时间。

#### 运行

前端单独测试的时候，使用命令

```
npm run serve
```

点击进入跳转的页面，即可实时看到代码所对应的前端页面。

和后端一起测试的时候，需要先执行

```
npm run build
```

进行打包，生成`dist`文件夹

然后在项目文件夹下，执行后端的命令

```
python manage.py runserver
```



