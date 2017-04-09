Package.describe({
  name: "tonystevens:timedropper",
  version: "1.0.0",
  summary: "Fancy time picker for text input. A Meteor wrapper for timedropper from Felice Gattuso",
  git: "https://github.com/tonystevens/meteor-timedropper",
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.4.2");
  api.use('jquery@1.11.10', 'client');

  api.addFiles('timedropper.js', 'client');
  api.addFiles('timedropper.css', 'client');
});