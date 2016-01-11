/**
 * @file
 * @author jinguangguo
 * @date 2016/1/11
 */

import {url} from './common/url';

require('./components/Toast/Toast');

window.toast('xxxx', {
    timeout: 2000
});

console.log(url.parseUrl());
