# Comsunny 运营管理后台

## 快速开始

### 安装必须依赖环境：

- 安装[nodejs](https://nodejs.org/en/) >= 8.x

- 安装[Angular-cli](https://github.com/angular/angular-cli) >= 1.4.7
```
npm install -g @angular/cli
```

### 安装可选依赖环境：

- 安装[vscode](https://code.visualstudio.com/)

常用插件推荐：
```
Visual Studio Code Commitizen Support: git commit message书写规范提示模板

Angular5 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout：ng4/5非常不错简写提示插件
```

命令行运行下列命令，快速启动开发服务：

```
git clone http://192.168.126.100/chenwei/operate.git
cd operate
npm install
npm start // 默认浏览器自动访问 http://localhost:6666
```
需要帮助？请先阅读 [开发文档](/docs/getting-started.md) 和 [常见问题](/docs/faq.md)， [约定规范](/docs/promise.md)。


### 脚本命令：

```
start: 启动开发环境

build：打包生产环境

test： 单元测试

lint： 代码检查

e2e： 端到端测试

analyzer： webpack打包优化

release：版本发布（自动添加版本号，自动生成版本日志，打tag，提交到远程仓库）
```

## 兼容性

现代浏览器及 IE11。

## 技术栈

- [Angular-cli](https://github.com/angular/angular-cli) 脚手架
- [Angular4.4+](https://github.com/angular/angular) 核心框架 (方便以后迁移5x)
  1. @angular/core 核心包
  2. @angular/common 共享包
  3. @angular/compiler 编译包
  4. @angular/forms 表单包
  5. @angular/http http包
  6. @angular/router 路由包
  7. @angular/animations 动画包
- [flex-layout](https://github.com/angular/flex-layout) flex布局包
- [ngrx4x](https://github.com/ngrx/store) ngrx状态管理
  1. @ngrx/core ngrx核心包
  2. @ngrx/store ngrx数据包
  3. @ngrx/router-store 路由状态
  4. @ngrx/effects 数据锁包
  5. @ngrx/store-devtools 调试器依赖
- [zone.js](https://github.com/angular/zone.js) 依赖库
- [rxjs](https://github.com/ReactiveX/rxjs) 依赖库
- [typescript](https://github.com/angular/angular) 默认语言
- [karma](https://github.com/angular/angular) 单元测试框架
- [jasmine](https://github.com/angular/angular) 单元测试框架指定测试套件
- [protractor](https://github.com/angular/angular) 集成测试
- [Echarts3](http://echarts.baidu.com/) 图表依赖库
- [scss](http://echarts.baidu.com/) css预处理（本来打算postcss Angular-cli一直不支持自定义，每次去改配置麻烦）

应用架构图
![应用架构图](http://on-img.com/chart_image/5a166576e4b04f355d2fdf26.png)

## 项目目录结构说明

```
root(根目录)
  |
  |--------- src （源文件）
  |
  |--------- dist （发布）
  |
  |--------- node_modules （node包管理）
  |
  |--------- .angular-cli.json （cli配置）
  |
  |--------- protractor.conf （集成测试配置）
  |
  |--------- karma.conf.js （单元测试配置）
  |
  |--------- .gitignore （git不提交的文件）
  |
  |--------- tsconfig.json （typescript编译配置）
  |
  |--------- tslint.json （typescript检查验证配置）
  |
  |--------- e2e （端到端测试放置位置）
  | 
  |--------- docs （文档）
```

## 开发目录结构说明

```
src(开发根目录)
  |
  |--------- app （应用代码）
  |
  |--------- assets（资源目录，样式，字体，图片等其他资源）
  |
  |--------- environments （环境配置）
  |
  |--------- index.html （入口模板）
  |
  |--------- styles.scss （入口样式）
  |
  |--------- main.ts （入口js）
  |
  |--------- polyfills.ts （polyfills）
```





