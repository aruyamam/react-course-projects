console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
  title: 'Shibainu',
  subtitle: 'shiba-shiba'
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Andrew',
  age: 26
};
function getLocation(location) {
  if (location) {
    return location;
  }
  else {
    return 'Unkonwn';
  }
}
var userName = 'Mike';
var userAge = 26;
var userLocation = 'New York'
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>    
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
