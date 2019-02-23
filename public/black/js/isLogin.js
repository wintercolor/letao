//实现功能：判断每一次跳进index页面的时候，是否已经登录过，如果没有登录，就返回login
// 页面，重新登录
$(function(){
    $.ajax({
        type:"get",
        url:'/employee/checkRootLogin',
        dataType:"json",
        success:function(res){
            if(res.error == 400) {
                location.href = "login.html";
            }
        }
    })
})