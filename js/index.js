
  (function () {
    Tools.setSize();
    // 加载页面就发送ajax
    Tools.ajax({
      url:"../php/info.php",
      type:"get",
      success:function (data) {
        data = JSON.parse(data);
        //个人信息
        var str = template("selfInfo",data.personal[0]);
        var oLeft = Tools.getElem(".left");
        var infoUl = Tools.getElem("ul",oLeft[0]);
        infoUl[0].innerHTML = str;
      //  开发技术栈
        var html = template("stack",data.personal[0]);
        // console.log(html);
        var stackContent = Tools.getElem(".stack-content");
        stackContent[0].innerHTML = html;
      //  工作经历
        console.log(data.personal[0].workExperience);
        var express = template("Exp",data.personal[0]);
        // console.log(express)
        var jobExp = Tools.getElem(".job-exp");
        jobExp[0].innerHTML = express;
      //  项目经历
        console.log(data.personal[0].projectExperience[1].responsibility);
        var proExp = template("sb",data.personal[0]);
        // console.log(proExp);
        var proContent = Tools.getElem(".pro-content");
        proContent[0].innerHTML = proExp;
      }
    })
  })();