/* EBSBAN·云端黑名单系统 */
/* Copyright (C) 2020 MCEBS & fly6022 All right reserved. */

var json

window.onload = function blacklist_json () {
    var url = "blacklist.json"
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.send(null);
    request.onload = function() {
        if (request.status == 200) {
            json = eval(JSON.parse(request.responseText));
            for (let i = 0; i < json.blacklist.length; i++) {
                id = json.blacklist[i].id
                console.log(id); 
                }
            }
        }
    }

    setTimeout(function() {
    console.log(json);
    }, 1000)


function search() {
    
    search_value = document.getElementById('ebsban').value;

    switch (search_value) {
            
            case '0':
            case 'test':
                document.getElementById("ban").innerHTML = "<b><font color='SpringGreen'>查询成功！</font></b>" + "<br>" + "<b>BAN ID:</b>" + json.blacklist[0].id + "<br>" + "<b>QQ号:</b>" + json.blacklist[0].qq + "<br>" + "<b>记录日期:</b>" + json.blacklist[0].date + "<br>" + "<b>有效期至:</b>" + json.blacklist[0].validity + "<br>" + "<b>云黑名单等级:</b>" + json.blacklist[0].level + "<br>" + "<b>事件记录:</b>" + json.blacklist[0].note + "<font color='red'><b>【重度违规，建议提高警惕】</b></font>" + "<br>" + "<b>证实情况:</b>" + json.blacklist[0].confirm + "<br>" + "<b>证据链接:</b>" + json.blacklist[0].evidence + "<br>" + "<b>查询结果来自:</b>" + json.blacklist[0].from + "<b>备注:</b>" + json.blacklist[0].remark + "<b>数据源哈希值</b>：" + json.blacklist[0].from;
                break;

            default:
                document.getElementById("ban").innerHTML ="<font color='red'><b>查询失败！</b></font><br>请检查您输入的信息是否正确或者该信息从未录入。";

    }
}

// 统计插件

document.write ('<script type="text/javascript" src="https://js.users.51.la/19873803.js"></script>');