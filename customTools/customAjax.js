var cAjax = (function() {
    // 放置方法功能
    var funcs = {
        get: get,
        post: post
    };
    var xmlhttp;
    if(window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // IE5, IE6
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    /**
     * GET请求
     * @param {*} url 
     * @param {*} data 
     * @param {*} isAsync 
     * @param {*} success 
     * @param {*} error 
     */
    function get(url, data, isAsync, success, error) {
        var _data = null;
        if(data) {
            _data = data;
        }
        xmlhttp.open('GET', url, isAsync);
        xmlhttp.send(_data);
        state_Change(success, error);
    }
    /**
     * POST请求
     * @param {string} url 请求地址
     * @param {boolean} isAsync 是否异步
     */
    function post(url, data, isAsync, success, error) {
        var _data = null;
        if(data) {
            _data = data;
        }
        xmlhttp.open('POST', url, isAsync);
        xmlhttp.send(_data);
        state_Change(success, error);
    }
    /**
     * 
     * @param {*} success 
     * @param {*} error 
     */
    function state_Change(success, error) {
        // loaded === 4
        if(xmlhttp.readyState === 4) {
            // OK === 200
            if(xmlhttp.status === 200) {
                success();
            } else {
                error();
            }
        }
    }

    return funcs;
})();