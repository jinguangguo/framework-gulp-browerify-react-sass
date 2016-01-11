/**
 * @file
 * @author jinguangguo
 * @date 2016/1/11
 */

let _parseUrl = function (url) {

    var temp = url.split('#');

    temp[0] = temp[0].split('?');


    var query = {};
    var queryStr = temp[0][1];

    if (queryStr) {
        queryStr = queryStr.split('&');
        $(queryStr).each(function (index, item) {
            var _temp = item.split('=');
            query[_temp[0]] = decodeURIComponent(_temp[1]);
        });
    }

    return {
        query: query
    };
};

export const url = {

    parseUrl: _parseUrl

};