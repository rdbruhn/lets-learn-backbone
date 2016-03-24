var GarageView = Backbone.View.extend({
  tagName: 'table',

  template: _.template("<tr></tr>"),

  initialize: function(){
    this.listenTo(this.collection, 'change', this.render);
    this.render();
  },

  render: function(){
    this.$el.html('');
    var context = this;
    this.collection.each(function(car){
      context.$el.append(new CarView({model: car}).render());
    });
    $('body').append(this.$el);
  },         

});
