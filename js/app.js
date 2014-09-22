//tormahiri
App = Ember.Application.create();

App.Router.map(function() {
  this.route("makala");
  this.route("app");
  this.resource("python");
this.resource("jsevent");
this.resource("php-da-html-oynax");
this.resource("input-ramkisi");
this.resource("android-url");
this.resource("sql-like")
this.resource("data-design")
this.resource("sublime")
this.resource("css3-ie")

});

App.TormahiriRoute=Ember.Route.extend({

	renderTemplate:function(){

		this.render("appmahiri");
	}
})

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
