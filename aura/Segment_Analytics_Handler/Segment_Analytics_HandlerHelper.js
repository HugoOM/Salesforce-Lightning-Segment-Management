({
  remote_getCurrentUserInfo: function(cmp) {
    if (!!analytics.user() && !!analytics.user().id()) return Promise.resolve();

    return new Promise(function(resolve, reject) {
      var currentUserInfoAction = cmp.get("c.getCurrentUserInfo");

      currentUserInfoAction.setCallback(this, function(response) {
        if (response.getState() !== "SUCCESS") return; //TODO: Implement error management w/ promise rejection

        var userInfo = response.getReturnValue();

        window.analytics.identify(userInfo.Id, {
          name: userInfo.Name
        });

        resolve();
      });

      $A.enqueueAction(currentUserInfoAction);
    });
  }
});
