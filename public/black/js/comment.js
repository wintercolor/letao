//实现的功能：
// 判断ajax发送请求的方式以及状态
$(document).ajaxStart(function(){
    NProgress.start();
});
$(document).ajaxStop(function(){
    setTimeout(function(){
        NProgress.done();
    },2000);
});

//实现的功能：点击对应的a标签。显示对应的背景色变化等
$(".lt_slide .pageF li a").click(function(){
    $(this).next().stop().slideToggle();
})

$(function(){
   
    
    $(".lt_mian .tops .left").click(function(){
       $(".lt_slide").toggleClass("hiddenmenu");
       $(".lt_mian").toggleClass("hidemen");
       $(".lt_mian .tops").toggleClass("hiddeeen");
    });
    
    //模态框的显示
    $(".lt_mian .tops .right").click(function(){
        $(".modal").modal("show");
    });
    // 确认退出，发送ajax请求
    $(".sure").click(function(){
        $.ajax({
            url:"/employee/employeeLogout",
            type:"get",
            dataType:"json",
            success:function(res){
               if(res.success) {
                   location.href = "login.html";
               }
               
            }
        })
    });


})
