/**
 * Created by Administrator on 2017/2/11.
 */
    //拾取E信息
/*
define(function(){
    function TipsInfo(info){
        function canvasDraw(){
            var canvas=document.createElement('canvas');
            canvas.width=100;
            canvas.height=50;
            var ctx=canvas.getContext('2d');
            ctx.fillStyle="#FFF";
            ctx.font='24px serif';
            //ctx.textAlign="center";
            ctx.fillText(info, 16, 30);
            return canvas;
        }
        var moveCanvasInfo=canvasDraw();
        document.body.appendChild(moveCanvasInfo);
        moveCanvasInfo.style.position="fixed";
        moveCanvasInfo.style.left="50%";
        moveCanvasInfo.style.top="40%";
        moveCanvasInfo.style.transform=" translate(-50%,-50%)";
        moveCanvasInfo.style.visibility="hidden";

        this.canvasInfo=moveCanvasInfo;
    }
    TipsInfo.prototype={
        constructor: TipsInfo,
        showInfo: function(){
            this.canvasInfo.style.visibility="visible";
        },
        hideInfo: function(){
            this.canvasInfo.style.visibility="hidden";
        }
    };

    return {
        TipsInfo: TipsInfo
    };
});*/
