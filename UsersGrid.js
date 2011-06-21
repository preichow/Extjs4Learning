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
        hideable: false,
        dataIndex: 'name'
      },
      {
        text: 'Email Address',
        flex: 2,
        dataIndex: 'email'
      },
      {
        text: 'Phone Number',
        flex: 1,
        dataIndex: 'phone'
      }]
    });
		UsersGrid.superclass.initComponent.apply(this,arguments);
  }
});
