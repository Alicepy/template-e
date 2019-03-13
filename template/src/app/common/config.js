/**
 * @file require config and app entry
 * @Author: zhangxuelian
 * @Date: 2017-09-13 11:14:46
 * @Last Modified by: chenpeiyu
 * @Last Modified time: 2019-03-13 09:39:48
 **/
require.config({
    baseUrl: "",
    /* urlArgs:"v=" + (new Date()).getTime(), */
    urlArgs:"v=2.0.20180703",
    paths: {
        "angular": "lib/angular/angular",
        "angular-bindonce": "lib/angular/bindonce",
        "angular-animate": "lib/angular/angular-animate",
        "angular-couch-potato": "lib/angular/angular-couch-potato",
        "angular-shiro": "lib/angular/angular-shiro",
        "angular-ui-router": "lib/angular/angular-ui-router/release/angular-ui-router",
        "angular-table":"lib/angular-table-master/dist/angular-table.min",
        'angular-cookies': "lib/angular/angular-cookies.min",
        "jquery": "lib/jquery/jquery-1.10.2.min",
        "jquery-1.8.3": "lib/jquery/jquery-1.8.3",
        "jquery-ui": "lib/jquery-ui/jquery-ui",
        "lodash": "lib/lodash/dist/lodash",
        "restangular": "lib/restangular/dist/restangular",
        "angular-ui-bootstrap-tpls": "lib/angular-ui-bootstrap/ui-bootstrap-tpls-0.12.0",
        "angular-ui-tree": "lib/angular-ui-tree-master/dist/angular-ui-tree-forie8",
        'artDialog': 'lib/artDialog/js/dialog-plus-min'
    },
    shim: {
        "angular": {
            deps: ['jquery'],
            exports: "angular"
        },
        "angular-ui-router": [
            "angular"
        ],
        "angular-cookies":[
            "angular"
        ],
        "angular-ui-bootstrap-tpls": [
            "angular"
        ],
        "angular-couch-potato": [
            "angular"
        ],
        "restangular": [
            "angular",
            "lodash"
        ],
        "jquery-ui": [
            "jquery"
        ],
        "artDialog":["jquery"]
    },
    packages:[{
		name : 'app',
		location : 'app'
	},{
		name : 'common',
		location : 'bower_components/common'
	},{
		name : 'services',
		location : 'bower_components/common/services'
	},{
		name : 'filters',
		location : 'bower_components/common/filters'
	},{
		name : 'directives',
		location : 'bower_components/common/directives'
	},{
        name : 'lib',
        location : 'lib'
    }]
});

//indexOf for IE8
if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function(elt /*, from*/)
    {
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = (from < 0) ? Math.ceil(from) : Math.floor(from);
    if (from < 0)
        from += len;
    for (; from < len; from++){
        if (from in this && this[from] === elt)
        return from;
    }
    return -1;
    };
}
//indexOf for IE8
if(!Array.prototype.lastIndexOf){
    Array.prototype.lastIndexOf=function(item){
        var len = this.length;
        for(var i = len; i >= 0; i--){
            if(this[i] === item){
                return len-i;
            }
        }
        return -1;
    }
}
