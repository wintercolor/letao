//设置一个全局变量，用来存储地址
var base ;

//实现的功能：
//  1：表单校验
$(function(){
   $("#form").bootstrapValidator({
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          username: {
              validators: {
                notEmpty: {
                    message: '用户名不能为空'
                  },
                  stringLength: {
                    min: 3,
                    max: 8,
                    message: '用户名长度必须在3到8之间'
                  },
                  callback: {
                      message:"用户名错误"
                  }
              }
          },
          password: {
              validators: {
                notEmpty: {
                    message: '密码名不能为空'
                  }, 
                  stringLength: {
                    min: 3,
                    max: 8,
                    message: '密码长度必须在3到8之间'
                  },
                  callback: {
                      message:"密码错误"
                  }
              }
          }
      }
   })
//   实现的功能：表单校验，校验成功就跳转页面
//    校验失败，就bu跳转
$("#form").on('success.form.bv', function (e) {
    e.preventDefault();
    //事先功能：点击重置按钮，数据与内容都清空
    //使用ajax提交逻辑
    $.ajax({
        type:"post",
        data: $('#form').serialize(),
        dataType: 'json',
        url: '/employee/employeeLogin',
        success:function(res){
           if(res.error == 1000) {
            //实现功能：使用插件的方法提交错误的提示信息
            $("#form").data("bootstrapValidator").updateStatus("username", "INVALID", "callback")
           }
           if(res.error == 1001) {
            $("#form").data("bootstrapValidator").updateStatus("password", "INVALID", "callback")
           }
           if(res.success) {
            location.href = 'index.html';
           }
           
        }
    })
})
// /表单重置按钮，实现内容等全部清空操作
$('[type="reset"]').on("click",function(){
    $("#form").data('bootstrapValidator').resetForm();
})

});