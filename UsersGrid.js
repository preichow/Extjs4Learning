Ext.define('UsersGrid', {
  extend: 'Ext.grid.Panel',
  initComponent: function() {
    var userStore = Ext.create('Ext.data.Store', {
      model: 'User'
    });
    Ext.apply(this, {
      forceFit: true,
      store: userStore,
      columns: [{
        text: 'Name',
        width: 200,
        sortable: true,
        hideable: true,
        dataIndex: 'name'
      },
      {
        text: 'Email Address',
        flex: 2,
		width: 200,
		sortable: true,
		hideable: true,
        dataIndex: 'email'
      },
      {
        text: 'Phone Number',
        flex: 1,
		width: 200,
		sortable: true,
		hideable: true,
        dataIndex: 'phone'
      },
	  {
        text: 'Address',
        flex: 1,
		sortable: true,
		hideable: true,
		width
        dataIndex: 'address'
      }]
    });
		UsersGrid.superclass.initComponent.apply(this,arguments);
  }
});
