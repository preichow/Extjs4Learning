Ext.onReady(function() {
  Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [ 'name', 'email', 'phone' ]
});

var userStore = Ext.create('Ext.data.Store', {
    model: 'User',
    data: [
        { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
        { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
        { name: 'Homer', email: 'home@simpsons.com', phone: '555-222-1244' },
        { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    ]
});

var grid1 = Ext.create('Ext.grid.Panel', {
    forceFit: true,   
    store: userStore,
    
    height: 100,
    title: 'Application Users',
    columns: [
        {
            text: 'Name',
            width: 100,
            sortable: true,
            hideable: false,
            dataIndex: 'name'
        },
        {
            text: 'Email Address',
            width: 150,
            dataIndex: 'email',
            hidden: true
        },
        {
            text: 'Phone Number',
            flex: 1,
            dataIndex: 'phone'
        }
    ]
});
  
    
  var grid2 = Ext.create('Ext.Panel', {
    title: 'Grid placeholder number 2',
		height: 50
  });
  new Ext.Viewport({
    title: 'Web Application Panel',
    items: [grid1, grid2]
  });
});
