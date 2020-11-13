# 前端交互说明文档

## 一、 简介

本项目采用前后端分离的开发和部署方式。前端使用Axios向后端发送请求和接收响应。

## 二、配置

以下配置已经包含在前端sprint1.5版本(2020.11.13)的代码中：
1. Axios安装步骤略
2. Axios安装完成后，在main.js中加入以下代码段来将Axios插件引入：
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
3. 配置Proxy，在vue.config.js中加入以下代码段
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


## 三、Axios使用方法

根据我们的引入方式，调用axios时我们使用`this.axios`。

#### 1. 发送GET请求
由于后端API目前都用POST方式请求，所以这部分不详细解释。
```javascript
this.axios.get("/user/XXXX")	//后端API
        .then((response) => {	//处理响应
          console.log(response);
        })
        .catch(function (error) {	//处理错误
          console.log(error);
        });
```

#### 2. 发送POST请求
  这里以前端登录组件的方法代码为例：
  由于后端API目前全部要求请求使用*HTTP协议的`multipart/form-data`格式*，所以我们要先定义一个`FormData`对象，将请求报文数据中的键值对加入`FormData`对象中，然后发送请求。

  为了使得各个methods函数更加简洁，对于一个API，我们使用2个不同的函数发送请求和接收响应(`req_XXX`和`ack_XXX`)

  在编写发送请求和处理响应的代码前，一定要先阅读后端API文档！！！在处理响应时，部分后端API会在数据字典的`data`中包含前端需要的信息，请注意data中的数据类型和内容。
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


## 四、测试方法

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
