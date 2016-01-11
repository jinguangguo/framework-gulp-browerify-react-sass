/**
 * @file
 * @author jinguangguo
 * @date 2016/1/11
 */

exports.mocks = [

    {
        path: '/index.do',
        method: 'GET',
        handler: function (request, reply) {
            reply({
                "code": 0,
                "msg": "success",
                "data": {
                    "message": "hello world"
                }
            });
        }
    }

];