/*
 * File: app/controller/TemplateCnt_tpl.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TemplateMetro.controller.TemplateCnt_tpl', {
    extend: 'Ext.app.Controller',

    mixins: {
        mix: 'MetroMixin.controller.TemplateCnt_tpl'
    },

    controllers: [
        'MainCnt'
    ],
    models: [
        'TemplateMdl_App',
        'TemplateMdl_AppPreference'
    ],
    stores: [
        'TemplateStr_RunningWidget',
        'TemplateStr_Apps',
        'TemplateStr_AppPreferences'
    ],

    tplCnt_initialize: function(application) {

    },

    tplCnt_deInitialize: function(application) {

    },

    tplCnt_dismiss: function() {

    },

    tplCnt_getCountRunningWdg: function() {

    },

    tplCnt_getCountAvailableWdg: function() {

    },

    onLaunch: function() {

        //Ext.create('TemplateMetro.view.AppWindow_tpl', {renderTo: Ext.getBody()}).show();

        var appRef = CloudCommon.getAppRef(this.$className);
        appRef = (appRef.app)?appRef.app:null;
        var main_cnt = this.getMainCntController();



        var preloader = Ext.createByAlias("widget.metropreloader");
        preloader.show(); //Show Preloader
        preloader.updateText(CloudCommon.getTranslationFor(appRef.name,"MSG_LOADING"));

        if(appRef && main_cnt)
        {
            if(typeof main_cnt.onInit === "function") main_cnt.onInit(this.tplCnt_initialize,appRef,this);
            else this.tplCnt_initialize(appRef);
        }
    }

});
