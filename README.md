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
