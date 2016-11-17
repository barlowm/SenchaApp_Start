/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('VistA.Surgery.view.main.Main', {
	extend: 'Ext.Panel',
	xtype: 'app-main',

	layout: "border",
	bodyBorder: false,
	defaults: {
		collapsible: false,
		split: true,
		bodyPadding: 15,
		margin: '0'
	},
	items: [
		{
			title: 'Header',
			id: "SurgeryHeaderPanel",
			region: 'north',
			collapsed: true,
			margin: '0 0 5 0',
			hideCollapseTool : true,
			title: "<abbr title=\"Veterans Health Information Systems & Technology Architecture\">VistA</abbr> Surgery"		
		},
		{
			title: 'west',
			id: "SurgeryInfoPanel",
			region: 'west',
			width: "20%",
			margin: '0 5px 5px 10px',
			bodyPadding: 10,

			html: "Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. Here is some text. ",
			border: true
		},		
		{
			title: 'east',
			id: "SurgeryMainPanel",
			region: 'center',
			width: "80%",
			margin: '0 10 5 5',
			bodyPadding: 10,
			html: "Here is some text",
			border: true
		},
		{
			title: 'South Region',
			id: "SurgeryFooterPanel",
			region: 'south',
			margin: '5 0 0 0',
			collapsed: true,
			hideCollapseTool : true
		}
	]
});
