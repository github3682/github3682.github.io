(function (window) {
  'use strict';

  function Sky(option) {
  		this.Img = option.sky;
        this.ImgW = option.sky.width;
        this.ImgH = option.sky.height;
        this.skySpeed = -0.2;
        this.Y = 0;
        this.X = option.x;
        
  }

  Sky.prototype = {
    constructor: Sky,
    draw:function(delta){
    	 // 绘制天空背景
        context.drawImage(this.imgList, skyX1, skyY);
        

        // 计算天空背景的坐标
        this.X += this.skySpeed * delta;
       
        if(this.X <= -this.skyImgW) {
          this.X += this.skyImgW * 2;
          // 此处不能使用 skyX1 = skyImgW;
          // 因为：skyX1不会与skyImgW完全相同，可能会存在一点偏差
        }
        
    }


  };

  window.Sky = Sky;
})(window);