## demo介绍

这是一个聊天APP

### 安装项目

* `git clone https://github.com/abigaleypc/react-native-demo.git`
* `cd demo`
* `npm install`

### 启动项目

* 进入项目文件夹 `demo` --> `ios`,
* 打开 `demo.xcodeproj` , 启动

### 最终效果

> (它操作得有点慢，这个过程有界面调整和消息传送)

* ![实战结果](https://github.com/abigaleypc/react-native-demo/blob/master/demo/assets/case.gif?raw=true =300x)


### 实现过程

#### 页面切换

页面切换通过导航 `navigator` 切换，该项目由两个页面组成，即 好友列表 和 聊天窗口

在 `index.ios.js` 中

```js
let defaultName = 'FriendsSence'; // 默认进入路由的名称
let defaultComponent = FriendsSence; // 默认进入的窗口

<Navigator
  style={styles.nav}
  initialRoute={{ name: defaultName, component: defaultComponent }}
  configureScene={(route) => {
    return Navigator.SceneConfigs.VerticalDownSwipeJump;
  }}
  renderScene={(route, navigator) => {
    let Component = route.component;
    return <Component
      {...route.params} navigator={navigator} // 将导航传给待渲染的窗口
    />
  }
  }
/>
```

以上将导航传给下一个窗口的原因可以参考：[新手理解Navigator的教程](http://bbs.reactnative.cn/topic/20/%E6%96%B0%E6%89%8B%E7%90%86%E8%A7%A3navigator%E7%9A%84%E6%95%99%E7%A8%8B)

`FriendsSence` 是第一个窗口，即 好友列表，下一个窗口是 `ChatSence` ,即 聊天窗口。

在 `friendSence.js` 中，如何跳转至窗口`ChatSence` 并带上用户的信息呢？

```js
this.props.navigator.push({
  name: 'ChatSence',
  component: ChatSence,
  params: {
    name: rowData.name
  }
})
```

这样就在堆栈里新增一个窗口，返回的话在这个堆栈去掉目前窗口即可，如下：

```js
this.props.navigator.pop();
```

也可以像跳入聊天窗口一样的方法跳入好友列表窗口


#### 列表渲染

列表渲染采用 `ListView`，[参考](http://reactnative.cn/docs/0.39/using-a-listview.html#content)

```js
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
this.state = {
  dataSource: ds.cloneWithRows(msgsData[this.props.name])
}


<ListView
  dataSource={this.state.dataSource}
  renderRow={(rowData) => <Text>{rowData}</Text>}
/>
```


#### 消息队列

```js
this.setState({
  dataSource: this.state.dataSource.cloneWithRows(
    [...this.state.dataSource._dataBlob.s1, 
    ...this.state.inputing])
})
```

* `this.state.inputing` 是需要增加的信息
* `this.state.dataSource._dataBlob.s1` 是原数据

### 过程遇到的问题

* 类规范：引入的类名需首字母大写
* 样式不会继承 所以设置字体大小的话只在header里设置并不会在headerText生效

  ```html
  <View style={styles.header}> 
    <Text style={styles.headerText}>{this.props.title}</Text> 
  </View> 
  ```
* `TouchableHighlight` 按钮文字

  ```html
  <TouchableHighlight>文字</TouchableHighlight> //这么写是会报错的
  ```
  
  应改为

  ```html
  <TouchableHighlight><Text>文字</Text></TouchableHighlight>
  ```
* 用闭包解决 `this` 读取不到的问题

	```html
  <TouchableOpacity style={styles.sendBtn} onPress={this.sendMsg()} >
	```
	  
	应改为
	
	```js
  <TouchableOpacity style={styles.sendBtn} onPress={()=>{this.sendMsg()}} >
	```


  
