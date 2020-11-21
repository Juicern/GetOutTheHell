# GetOutTheHell
事件起因：2020年新冠肺炎大爆发，导致各大高校封闭管理，出校需申请后获得门禁码才可出校。

然而当秋季学期开学时，中国大陆地区的疫情已被控制，理论上无需封闭管理，但学校因为一些都懂的原因，依然采取封闭式管理。

具体可以参考知乎的这个问题：[如何看待河海大学不允许学生出校门，教职工却可以随意进出？](https://www.zhihu.com/question/407901391)

因对学校此举极为不满，且学校申请出校的小程序充满bug，故在9月初，开发了这个为对付南京某211的一刀切封闭管理，而做出来的门禁码生成小程序。

>下载[微信小程序开发软件](https://mp.weixin.qq.com/cgi-bin/wx)，注册一个小程序，然后将此项目代码导入即可使用 

> 使用前需在project.config.json中修改appid的值，应为自己创建的小程序的appid

![](https://github.com/Ricky-Chu/GetOutTheHell/blob/master/image-appid.png)

软件打开界面如下： 

<img width="270" height="480" src="https://github.com/Ricky-Chu/GetOutTheHell/blob/master/image-index.png"/>

点击“获取头像”后即可得到当前用户头像。

<img width="270" height="480" src="https://github.com/Ricky-Chu/GetOutTheHell/blob/master/image-face.png"/>

将其余信息填写完成后，点击“开始制作”，便可生成门禁码。

<img width="270" height="480" src="https://github.com/Ricky-Chu/GetOutTheHell/blob/master/image-result.png"/>

> 注：因采用了某种技术，生成的界面与学校官方的没有任何差别，有需要的朋友可以放心使用
