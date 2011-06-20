Ext.onReady(function() {
  var grid1 = Ext.create('Ext.Panel', {
    title: 'Grid placeholder',
		html:'Some code <br/> with brakes inside'
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
