import * as minio from 'minio'

var s3Client = new minio.Client({
    endPoint: 'localhost',
    port: 9000,
    secure: false,
    accessKey: 'SXO8VW2OFKKP2OG7AC85',
    secretKey: 'CKWSSgrUgvfUMTaNBkB63exet4WW+uNhQvi91Bc3',
})

s3Client.traceOn();
s3Client.getObject('test', 'passwd', function (e, dataStream) {
    if (e) {
        return console.log(e);
    }
    dataStream.on('data', function (data) {
        console.log(data.toString());
    });
    dataStream.on('error', function (e) {
        console.log(e);
    });
});

