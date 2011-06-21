Ext.onReady(function() {
  var grid1 = Ext.create('UsersGrid', {
    height: 200,
    title: 'Application Users'
  });
  var grid2 = Ext.create('UsersGrid', {
    title: 'Other Users',
    height: 200
  });
  new Ext.Panel({
    renderTo: 'place-for-grid',
    title: 'Web Application Panel',
    items: [grid1, grid2]
  });
  //loading some data to grid 1
  grid1.store.loadData([{
    name: 'name1',
    email: 'aaa',
    phone: 'xxx'
  },
  {
    name: 'name2',
    email: 'bbb',
    phone: '333'
  }]);
});
