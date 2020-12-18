# Software-Engineering-Project---Danbo

*Created by 你说的都队*

*Team workers:*

*16307110216 何瑞安
17307130178 宁晨然
16307110042 王子仪
17307130132 李兆炀
16307110113 王锐
17307130121 邢书豪
17307130181 王洪*

### 部署方法

1. 将文件中所有127.0.0.1和localhost改成你的服务器IP

2. 在`Danbo-frontend`目录下使用npm构建

```
npm install & npm run build
```

3. 将生成的`dist`文件夹拷贝至网页目录，如`/www/wwwroot`

4. 在Nginx的配置文件中的`http{`}里面添加一项

```
server {
      listen 7890;#监听端口
      server_name xxx.xx.xx.xxx;#服务器IP地址
      location / {
          root   /www/wwwroot/dist;#dist文件夹目录
            try_files $uri $uri/ /index.html;
       }
       location /user {#后端路由转发
            proxy_pass http://xxx.xx.xx.xxx:8000/user;
        } 
        location /blog {#后端路由转发
            proxy_pass http://xxx.xx.xx.xxx:8000/blog;
        } 
        location /media {#后端路由转发
            proxy_pass http://xxx.xx.xx.xxx:8000/media;
        } 
}
```
