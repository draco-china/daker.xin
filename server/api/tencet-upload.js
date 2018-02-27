// 引入模块
import {Router} from 'express'
import fs from 'fs'
import multer from 'multer'
import COS from 'cos-nodejs-sdk-v5'
// 创建实例
const router = Router()
var cos = new COS({
  SecretId: 'AKIDOgrrgKW1HQTL3dtDDSddaR7cUp24AjJi',
  SecretKey: 'LVTK5jCVggXLxQGyDMK6g4G3igqsjOxL',
})
var upload = multer({dest: './tmp/'})

// 单文件上传
router.post('/upload/singleFile', upload.single('singleFile'), function (req, res, next) {
  // 文件路径
  var filePath = './' + req.file.path
  // 文件类型
  var temp = req.file.originalname.split('.');
  var fileType = temp[temp.length - 1];
  var lastName = '.' + fileType
  // 构建图片名
  let fileName = Date.now() + lastName;
  fs.rename(filePath, fileName, (err) => {
    if (err) {
      res.end(JSON.stringify({status: '102', msg: '文件写入失败'}))
    } else {
      let localFile = './' + fileName;
      let key = 'Lizpic/' + fileName;
      cos.sliceUploadFile({
        Bucket: 'daker-1252538104',
        Region: 'ap-chengdu',
        Key: key,
        FilePath: localFile
      }, function (err, data) {
        if (err) {
          fs.unlinkSync(localFile)
          res.end(JSON.stringify({status: '101', msg: '上传失败', error: JSON.stringify(err)}))
        } else {
          fs.unlinkSync(localFile);
          var imageSrc = 'https://daker-1252538104.cos.ap-chengdu.myqcloud.com/' + data.Key
          res.end(JSON.stringify({status: '100', msg: '上传成功', imageUrl: imageSrc}))
        }
      })
    }
  })
})


let multerUpload = upload.array('multerFile');
//多个文件上传
router.post('/upload/multerFile', (req, res, next) => {
  multerUpload(req, res, (err) => {
    console.log(req.files)
    if (!!err) {
      res.json({
        code: '2000',
        type: 'multer',
        fileList: [],
        msg: err.message
      })
    }
    let fileList = [];
    req.files.map((elem) => {
      fileList.push({
        originalname: elem.originalname
      })
    })
    res.json({
      code: '0000',
      type: 'multer',
      fileList: fileList,
      msg: ''
    })
  })
})

export default router