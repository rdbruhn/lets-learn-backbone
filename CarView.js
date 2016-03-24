var CarView = Backbone.View.extend({
 tagName: "tr",

 template: _.template("<td>Make: <%- make %></td>"),
 
 render: function(){
  return this.$el.html(this.template(this.model.attributes));
 }
});
