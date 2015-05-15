;(function($, window) {

  function WackyMorningDJ(args) {
    this.args = args;
    var hostname = location.hostname;
    this.ws = new WebSocket("ws://" + hostname + ":" + this.args.port);
    this.ws.onmessage = this.onMessage.bind(this);
    this.ws.onopen = this.onOpen.bind(this);
    this.init();
  };

  WackyMorningDJ.prototype = {
    init: function() {
      var self = this;
      $(document.body).on("click", function(event) {
        var $node = $(event.target);
        if ($node.attr("type") == "button") {
          var id = $node.data("id");
          console.log("Clicked: " + id);
          self.ws.send(id);
        }
      })
    },

    onOpen: function() {
      console.log("Connection opened.");
    },

    onMessage: function(message) {
      console.log("Received manifest");
      var manifest = JSON.parse(message.data);
      this.constructMenu(manifest);
    },

    constructMenu: function(manifest) {
      var container = $("#container");
      for (var groupName in manifest) {
        var group = manifest[groupName];
        var title = $("<h1>").text(groupName);
        var section = $("<section>").append(title)

        for (var title in group) {
          var id = group[title];
          var button = $("<button>")
                       .attr("type", "button")
                       .attr("class", "btn btn-lg btn-primary btn-block")
                       .attr("data-id", id)
                       .text(title);
          section.append(button);
        }
        section.appendTo(container);
      }
    },
  };

  window.WackyMorningDJ = WackyMorningDJ;
})(jQuery, window);
