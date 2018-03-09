'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
  title: 'Shibainu',
  subtitle: 'shiba-shiba'
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Andrew',
  age: 26
};
function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unkonwn';
  }
}
var userName = 'Mike';
var userAge = 26;
var userLocation = 'New York';
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    getLocation(user.location)
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
