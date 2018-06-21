'use strict';

const 
    path = require('path'),

    abWeb = require('ab-web')
;

class abWeb_Spocky extends abWeb.Ext
{

    constructor(abWeb, extPath)
    { super(abWeb, extPath);
        // this._header = this.uses('header');

        this._layoutPaths = [];
    }



    /* abWeb.Ext Overrides */
    __build(taskName)
    {
        this.console.info('Building...');

        let buildLayoutPromises = [];        
    }

    __onChange(fsPaths, watcherName, eventType)
    {
        this._layoutPaths = fsPaths.layouts;
        console.log('hm', watcherName);
    }

    __parse(config)
    {
        if (!('packages' in config))
            return;

        this._layoutPaths = [];
        for (let fsPath of config.paths)
            layoutPaths.push(path.join(fsPath, 'layouts/*.html'));

        this.watch('layouts', [ 'add', 'unlink', 'change' ], layoutPaths);
    }
    /* / abWeb.Ext Overrides */

}