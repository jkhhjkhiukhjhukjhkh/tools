var max = new Array();
var avg = new Array();
var maxx = 0;
var path = "";
for (var ii = 2; ii < a.length; ii++) {
    for (var iii = 0; iii < a[ii].length; iii++) {
        var avgc = 0;
        for (var iiii = 0; iiii < a[ii][iii].length; iiii++) {
            if (a[ii][iii][iiii] == undefined) {
                continue;
            } else {
                avgc++;
            }
            if (max[a[ii][iii][iiii]] == undefined) {
                max[a[ii][iii][iiii]] = new Array();
            }
            var item = new Array();
            item[0] = a[ii][iii][iiii];
            item[1] = "" + ii + iii + iiii;
            item[2] = b[ii][iii];
            max[a[ii][iii][iiii]].push(item);
            if (a[ii][iii][iiii] > maxx) {
                maxx = a[ii][iii][iiii];
                console.log('found');
                path = "" + ii + iii + iiii
            }
        }
        if (avg[avgc] == undefined) {
            avg[avgc] = new Array();
        } else {
            var tmp = new Array();
            tmp[0] = "" + ii + iii;
            tmp[1] = b[ii][iii];
            avg[avgc].push(tmp)
        }
    }
}
