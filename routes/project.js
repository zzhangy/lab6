var projects = require('../projects.json');

exports.projectInfo = function(req, res) { 
	var projectID = parseInt(req.params.id);
	console.log("The project ID is: " + projectID);
  	
  	var project = projects[projectID];
  	res.json(project);
}