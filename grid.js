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
  grid2.store.loadData([{
    name: 'name3',
    email: 'a',
    phone: 'xxx'
  }]);
	//subscribe
	grid1.on('itemdblclick', function(grid,record){
			grid2.store.add(record);
			grid1.store.remove(record);
	});
	grid2.on('itemdblclick', function(grid,record){
			grid1.store.add(record);
			grid2.store.remove(record);
	});
});
