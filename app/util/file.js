var fs = require("fs");
var multiparty = require("multiparty");
module.exports = function (app) {
    app.post("/upload", function (req,res) {
        console.log("img upload start");
        //生成multiparty对象，并配置上传目标路径
        var filePath = './public/upload/file/';
        var imgPath = './public/upload/img/';
        var fileUrl = "../upload/file/";
        var imgUrl = "../upload/img/";
        var form = new multiparty.Form({uploadDir: filePath});
        //上传完成后处理
        form.parse(req, function(err, fields, files) {
            console.log("form start");
            var filesTmp = JSON.stringify(files, null, 2);
            if (err) {
                console.log('parse error: ' + err);
                res.write(JSON.stringify({
                    error:1,
                    message:"上传失败"
                }));
                res.end();
            } else {
                console.log('parse files: ' + filesTmp);
                var inputFile = files.imgFile[0];
                var uploadedPath = inputFile.path;
                var index = inputFile.originalFilename.lastIndexOf(".");
                var ext = inputFile.originalFilename.substring(index);

                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth()+1;
                var day = date.getDate();
                var hour = date.getHours();
                var min = date.getMinutes();

                var fileName = "" + year + month + day + hour + min + parseInt(Math.random()*10) + ext;

                var dstPath = filePath;
                var url = fileUrl;
                if(".jpg.jpeg.gif.png".indexOf(ext)>-1){
                    dstPath = imgPath;
                    url = imgUrl;
                }
                dstPath += fileName;
                //重命名为真实文件名
                //fs.renameSync(files.upload.path, "D:\\min\\nodejsExample2\\tmp\\test.png");
                fs.rename(uploadedPath, dstPath, function (err) {
                    if (err) {
                        console.log('rename error: ' + err);
                    } else {
                        console.log('rename ok');
                    }
                });
                res.write(JSON.stringify({
                    error:0,
                    url:url+fileName,
                    message:"成功"
                }));
                //{"error":0,"message":".....","url":"/img/1111.gif"}
                res.end();
            }
        });
    });
}
