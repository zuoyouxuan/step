#2016-04-07 13：30
修改chart margin 解决线图右边距过大的问题
```js
chart: {
    marginLeft:5,
    marginRight:10,
    // spacingLeft: 5,
    // // spacingRight: -5,
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
}
```
