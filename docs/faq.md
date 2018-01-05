# 常见问题

## 关于git Commit 规范提交问题
> vscode 可以安装 Visual Studio Code Commitizen Support插件来规范书写commit 信息

提交格式
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
**注意**：
1. <type>(<scope>): <subject>： type是强制性，scope是选的，subject是一个简单标题
2. <body> 写详细描述 可选
3. <footer> 一般放关闭bug描述和关闭的编号

### Visual Studio Code Commitizen Support使用

#### 第一步：选择类型
```
build: 影响构建系统或外部依赖关系的更改（示例范围：gulp, broccoli, npm）
ci: 更改我们的配置文件和脚本（示例范围：Travis, Circle, BrowserStack, SauceLabs）
docs: 仅文档更改，比如README, CHANGELOG, CONTRIBUTE等等
feat: 一个新功能
fix: 一个错误修复
perf: 一个性能优化的代码，比如提升性能、体验
refactor: 重构，既不修复错误也不添加功能
style: 不改变代码逻辑，仅仅修改代码风格（空格，格式化，分号分号等）
test: 添加缺失测试或更正现有测试（测试用例，包括单元测试、集成测试等）
chore: 其他，例如发布版 chore(release): 
```
#### 第二步：填写作用域范围 【denote the scope of this change(optional)】

可选的作用域（暂定）：

1. common: 公共模块，index.html, css，fonts，images
2. core：核心模块，对应core文件夹
3. shared：共享模块，对应shared文件夹
4. simple：UI组件模块，对应simple文件夹
5. layout: 布局模块，对应feature/layout
6. dashborad: 控制台，对应feature/dashborad
7. channel：通道管理，对应feature/channel
5. financial：账务管理，对应feature/channel
6. merchant：商户管理，对应feature/merchant
7. exception: 预警与异常，对应feature/exception
8. settings: 系统设置，对应feature/settings
8. login: 登录模块，对应feature/login

不涉及具体业务的补充说明：

1. packaging 用于package.json修改
2. docs 更新文档 对应docs文件夹

#### 第三步 写一个简短的描述 【write a short imperative tense description of the change】

提交格式：

> 文件名<功能>：文件内容操作描述

注意用词规范：

对文件操作

- 添加：添加一个文件使用  添加user模块
- 移动：移动文件夹到某一个地方 带上从哪里移动到哪里即可 **注意**位置和上面的作用域挂钩
- 删除：删除文件
- 更改：重命名 从什么名字重命名为什么名字 xxx重命名为yyy

对文件内容操作

- 新增：新增一个功能使用（需要带上具体的功能）
- 重构：重构一个功能代码
- 修改：修改或者改进一个功能代码
- 修复：修复一个功能bug
- 移除：注释代码，屏蔽功能，删除代码



功能：（可选，无法描述的功能，可以不填）
- 模块（模块 通用）
- 组件（组件 通用）
- 服务（服务 通用）
- 路由（路由 通用）
- 指令（指令 通用）
- 配置（配置 通用）
- 管道（管道 通用）
- 动画（动画 通用）
- 模板（组件模板 组件关联）
- 样式（组件样式 组件关联）
- 接口（typescipt）
- 状态（状态管理）

```
举例：一个user业务模块

文件操作

添加user模块，组件，服务，路由，指令，配置文件

删除user模块

移动user服务 从core到user

更改user接口 user.ts重命名为user.type.ts

文件内容操作

user组件 新增验证用户名功能

user组件 重构全部 | 重构初始化方法

user模板 修改搜索功能结构

user服务 修复手机号正则表达式错误

user样式 移除:hsot样式
```

#### 第四步 提供一个较长描述的 用|断开 【provide a longer description of the chane optional use | to break new line】

如果上一步无法描述清楚，你可以在这里写详细的内容。可选的


#### 第五步 列出任何突发情况 【list any breaking changes(optional)】

备注，可选的

#### 第六步 关于关闭bug的描述 【list any issues closed by this change(optional) E.g #31, #34】

关于bug描述的，对应的bug编号（和公司bug管理系统相关）

```
已经修复 #130,#134
```

