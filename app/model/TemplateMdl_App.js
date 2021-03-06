/*
 * File: app/model/TemplateMdl_App.js
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

Ext.define('TemplateMetro.model.TemplateMdl_App', {
    extend: 'Ext.data.Model',

    mixins: {
        persistence: 'cloudLibrary.model.Persistent'
    },
    requires: [
        'Ext.data.Field'
    ],

    idProperty: '_id',

    fields: [
        {
            name: 'id'
        },
        {
            name: '_rev'
        },
        {
            name: 'app_id'
        },
        {
            name: 'cls'
        },
        {
            name: 'icon'
        },
        {
            name: 'application_config'
        },
        {
            name: 'config'
        },
        {
            defaultValue: true,
            name: 'multirunning',
            type: 'boolean'
        },
        {
            name: 'type'
        }
    ],

    constructor: function() {
        var me = this;
        me.processTemplateMdl_App(me);
        me.callParent(arguments);
    },

    processTemplateMdl_App: function(config) {
        this.configureModel(config);

    }

});