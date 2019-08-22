/**
 * 自定义工具方法
 */
var $customTools = (function() {
    // 放置方法功能
    var funcs = {
        template: template
    };
   /**
    * 模板替换
    * @param {string} dom 目标标签（模板）的内容（innerHTML）
    * @param {json} data 传入的数据
    */
    function template(dom, data) {
        // /s任何空白字符，包括空格、制表符、换页符等 <=> [ \f\n\r\t\v]
        // /S任何非空白字符 <=> [^ \f\n\r\t\v]
        // ^匹配输入字符串的开始位置，在方括号表达式中表示不接受方括号内的字符集合
        // +匹配字符1次或多次
        // 只有+时会默认开启贪婪模式，即根据前导字符尽可能多的去匹配内容，匹配不成功时才会回溯
        // 在+/?/*/{min, max}的后面再加上一个?可以开启懒惰模式，正则引擎尽可能少的重复匹配字符
        // 在+/?/*/{min, max}的后面再加上一个+可以开启独占模式，正则引擎尽可能长的匹配字符，匹配不成功不会回溯
        var replaceDom = dom.replace(/\{\{([\s\S]+?)\}\}/g, function($0, $1) {
            return data[$1] || '';
        });
        return replaceDom;
    }
    
    return funcs;
})();