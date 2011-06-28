Ext.onReady(function() {
  var grid1 = Ext.create('UsersGrid', {
    height: 200,
	
    title: 'Application Users',
	
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
    phone: 'xxx',
	address: 'Portland, OR'
  }, { name: 'name2',
    email: 'bbb',
    phone: '333',
	address: 'Portland, OR'
  },  {
    name: 'name3',
    email: 'ccc',
    phone: '444',
	address: 'Portland, OR'
  },  {
    name: 'name4',
    email: 'ddd',
    phone: '555',
	address: 'Portland, OR'
  },  {
    name: 'name5',
    email: 'eee',
    phone: '666',
	address: 'Portland, OR'
  },  {
    name: 'name6',
    email: 'fff',
    phone: '77',
	address: 'Portland, OR'
  },  {
    name: 'name7',
    email: 'ggg',
    phone: '888',
	address: 'Portland, OR'
  },  {
    name: 'name8',
    email: 'bbb',
    phone: '999',
	address: 'Portland, OR'
  },  {
    name: 'name9',
    email: 'bbb',
    phone: '123',
	address: 'Portland, OR'
  },  {
    name: 'name10',
    email: 'bbb',
    phone: '345',
	address: 'Portland, OR'
  },  {
    name: 'name2',
    email: 'bbb',
    phone: '876',
	address: 'Portland, OR'
  }  
  
  
  ]);
  grid2.store.loadData([{
    name: 'name3',
    email: 'a',
    phone: 'xxx',
	address: 'Portland, OR'
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
