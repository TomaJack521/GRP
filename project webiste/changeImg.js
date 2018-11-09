<script type="text/javascript">
        /*
            定时器做图片的自动切换
        */
        window.onload = Init;//网页加载完成时，调用init
        function Init()
        {
            //定时器,每秒钟触发ShowPicturesInOrder()函数
            window.setInterval("ShowPicturesInOrder()", 1000);
        }

        var imgNum = 1;
        function ShowPicturesInOrder()
        {
            //获取网页中id=myImg的图片对象元素
            var imgObj = document.getElementById("myImg")

            imgObj.src = "img/silders/drone.uav_" + imgNum + ".jpg";
            imgNum++;

            //总共有4张图片，显示第四张图片时，imgNum=4
            //第四张图片显示后，执行imgNum++,imgNum=5
            if (imgNum==3)
            {
                imgNum = 1;//回到了原点
            }
        }

</script>
