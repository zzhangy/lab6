var projects = require('../projects.json');

exports.projectInfo = function(req, res) { 
	var projectID = parseInt(req.params.id);
	console.log("The project ID is: " + projectID);
  	
  	var project = projects[projectID-1]; // of by one, our first project has index 0
  	res.json(project);
}