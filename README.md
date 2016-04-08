#2016-04-08 14:00
隐藏进度条
更换分享提示图片
修改上下间距，解决第5行排名显示不全的问题
```css
.user-info {
  background-color: #edeae3;
  padding-bottom: 12px;
  padding-top: 16px;
}
```

#2016-04-07 23:25
提交排行榜页面
#2016-04-07 17:00
圆环位置偏移问题
```css
#topLoader {
    margin: 0 auto;
    width: 120px;
    height: 120px;
    position: absolute;
    z-index: 999;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);    /* 50%为自身尺寸的一半 */
    -ms-transform: translate(-50%, -50%);
    -webkit-transform:translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
}
```
#2016-04-07 15：30
修改曲线宽度；修改圆点半径
```js
series: [{
    name: '',
    showInLegend: false,
    color: '#FFFFFF',
    lineWidth:1,
    data: [25315, 0, 0, 0, 9150, 8171, 29824],
    marker : {
        enabled : true,
        radius : 3
    }
}]
```

#2016-04-07 13：30
修改chart margin 解决线图右边距过大的问题
```js
chart: {
    marginRight:20,
    spacingRight: -5,
    borderRadius: 10,
    renderTo: 'chartContainer',
    spacingBottom: 70,
    type: 'area',
    backgroundColor: {
        linearGradient: [0, 0, $(window).width(), chartHeight],
        stops: [
            [0, '#1abe81'],
            [1, '#1896a2']
        ]
    }
},
```
修改步数位置偏移的问题
```js
positioner: function (boxWidth, boxHeight, point) {
    var x = point.plotX;
    var y = 35;
    if((boxWidth - x) > 0 && boxWidth - x < 16) {
      x = x - 16;
    }
    return { x: x, y: y };
}
```
