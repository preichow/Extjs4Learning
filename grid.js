Ext.onReady(function() {
  Ext.MessageBox.alert('test', 'Test Message is here');
  new Ext.Panel({
    width: 400,
    height: 200,
    renderTo: 'place-for-grid',
    title: 'Web Application Panel'
  });
});