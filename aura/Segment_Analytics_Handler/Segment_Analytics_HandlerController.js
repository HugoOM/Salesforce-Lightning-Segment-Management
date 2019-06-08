({
  handleSegmentEvent: function(cmp, evt) {
    var segmentMethod = evt.getParam("type");

    if (!segmentMethod)
      return console.error(
        '[Segment Analytics Handler] Missing Required Event Param "type"'
      );

    if (!window.analytics[segmentMethod])
      return console.error(
        "[Segment Analytics Handler] Unknown Segment Method ",
        segmentMethod
      );

    var methodParameters = evt.getParam("params");

    window.analytics[segmentMethod].apply(null, methodParameters);
  },
  handleRouteChange: function(cmp, evt, helper) {
    helper.remote_getCurrentUserInfo(cmp).then(function() {
      window.analytics.page(null, window.location.pathname);
    });
  }
});
