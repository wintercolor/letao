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
                  } 
              }
          }
      }
   })
//   实现的功能：表单校验，校验成功就跳转页面
//    校验失败，就bu跳转
$("#form").on('success.form.bv', function (e) {
    e.preventDefault();
    //使用ajax提交逻辑
    $.ajax({
        type:"post",
        data: $('#form').serialize(),
        dataType: 'json',
        url: '/employee/employeeLogin',
        success:function(res){
           if(res.error == 1000) {
               alert("用户名不存在")
           }
           if(res.error == 1001) {
               alert("密码错误");
           }
           if(res.success) {
            location.href = 'index.html';
           }
           
        }
    })
})

});