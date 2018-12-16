var a = new Array();
var b = new Array();
var all = 100;
var ai = 1;
var id = null;
id = setInterval(function() {
    if (ai >= all) {
        clearInterval(id);
    }
    $.get('https://mall.10046.mi.com/fanscard/getPhoneList', {
        "page_num": ai++,
        "city_id": xxx,
        "search": "",
        "goods_id": 2172300003,
        "jumpcode": "xxx"
    }, function(data, status) {
        console.log(ai + "come");
        if (data.data == "") {
            return;
        }
        a[ai] = new Array();
        b[ai] = new Array();
        $.each(data.data, function(index, value) {
            a[ai][index] = new Array(10);
            b[ai][index] = value;
            console.log(value);
            //console.log(value.length);
            for (var i = 0, l = value.length; i < l; i++) {
                var char = parseInt(value.charAt(i));
                //console.log(char);
                if (a[ai][index][char] == undefined) {
                    a[ai][index][char] = 1;
                } else {
                    a[ai][index][char]++;
                }
            }
        })
        console.log(ai + "done");
    })
}, 600);
