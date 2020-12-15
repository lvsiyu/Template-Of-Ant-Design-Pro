# 后台管理模板
当前项目为后台管理系统前端项目模板，所采用前端基础架构为React，生态圈为Ant Design Pro及umi等阿里旗下应用框架体系。

## 安装环境搭建及依赖程序下载
本项目运行需要依赖于node.js服务框架以及推荐使用yarn管理器，下载方式如下所示

#### nodejs下载
安装nodejs并配置环境，nodejs下载地址：[https://nodejs.org/zh-cn/download/](https://nodejs.org/zh-cn/download/)

#### yarn包管理器安装
通过npm指令下载安装yarn，进入cmd输入：

```bash
npm install -g yarn
```


## 克隆远程仓库至本地
当环境搭建完成后需要将远程文件克隆至所对应的文件夹下

#### 使用git命令克隆项目
克隆远程仓库至本地（xxx为当前git项目对应地址）

```bash
git clone xxx
```

## 项目安装及构建
当项目已经克隆成功后需要安装项目运行的依赖项（node_modules），找到项目，进入项目根目录，使用命令

```bash
yarn
```

或者

```bash
yarn install
```

## 项目运行
当项目依赖项安装好后，使用命令（如下命令）启动node服务，运行项目,启动成功后，根据控制台提示地址，在浏览器中输入对应链接即可查看项目

```bash
yarn start
```

## 项目基本配置
项目中很多使用了antd默认的配置项，需要修改成自己项目的内容

#### 左侧菜单标题修改
根目录中config文件夹下defaultsetting.js文件，修改title字段

#### 左侧菜单logo修改
根目录中src文件夹下assets文件夹中，替换loge.svg文件

#### 浏览器页签图标更换
根目录中public文件夹下替换favicon.ico文件

#### 修改项目主题及基本配置
根目录中config文件夹下修改defaultSettings.js文件

#### 路由添加及修改
根目录中config文件夹下修改routes.js文件

#### 配置请求反向代理
根目录中config文件夹下修改proxy.js文件

#### 配置请求拦截
根目录中utils文件夹下修改request.js

## 项目打包及发行
项目开发完成后，需要将项目通过webpack打包成静态文件，然后发送至测试环境或者生产环境的服务下，需要使用以下命令在根目录生成dist以供发布

```bash
npm run build
```

## 更多生态及帮助
当前项目所用框架繁多，并使用了eslint,jest,stylelint等众多代码校验及单元测试检查工具，请确保代码的严谨性，否则无法提交代码

参考链接：[antd](https://ant.design/index-cn)，[antd pro](https://pro.ant.design/index-cn)，[antd charts](https://charts.ant.design/)，[umi](https://umijs.org/zh-CN/docs)，[eslint](https://eslint.org/)，[jest](https://jestjs.io/)，[stylelint](https://stylelint.io/)，[webpack](https://webpack.js.org/)...

