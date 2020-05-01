/* EBSBAN·云端黑名单系统 */
/* Copyright (C) 2020 MCEBS & fly6022 All right reserved. */

function search() {
    
    var search_value = document.getElementById('ebsban').value;
    document.getElementById("ban").innerHTML ="<font color='red'><b>查询失败！</b></font>请检查您输入的信息是否正确或者该信息从未录入。";
   
    
    // data.json 数据库


    window.onload = function() {
        var url = "blacklist.json"
        var request = new XMLHttpRequest();
        request.open("get", url);
        request.send(null);
        request.onload = function() {
            if (request.status == 200) {
                var text = JSON.parse(request.responseText);
            }
        }
    }
    setTimeout(function() { 
        console.log(text);
    }, 1000)

    
    // 云端黑名单总控系统
    switch(search_value) {
            
        case '0':
        case 'test':
            obj = JSON.parse(text); 
            document.getElementById("ban").innerHTML = "<b><font color='SpringGreen'>查询成功！</font></b>" + "<br>" + "<b>BAN ID:</b>" + obj.blacklist[0].id + "<br>" + "<b>QQ号:</b>" + obj.blacklist[0].qq + "<br>" + "<b>记录日期:</b>" + obj.blacklist[0].date + "<br>" + "<b>有效期至:</b>" + obj.blacklist[0].validity + "<br>" + "<b>云黑名单等级:</b>" + obj.blacklist[0].level + "<br>" + "<b>事件记录:</b>" + obj.blacklist[0].note + "<font color='red'><b>【重度违规，建议提高警惕】</b></font>" + "<br>" + "<b>证实情况:</b>" + obj.blacklist[0].confirm + "<br>" + "<b>证据链接:</b>" + obj.blacklist[0].evidence + "<br>" + "<b>查询结果来自:</b>" + obj.blacklist[0].from;
            break;
            
    }
    location = url;
}

// 统计插件
document.write ('<script type="text/javascript" src="https://js.users.51.la/19873803.js"></script>');