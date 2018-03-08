(function(){
	"use strict";
	var semver = require('semver');

	desc("Default build");
	task("default", ["version"], function(){
		console.log("\nBuild OK");
	});

	desc("Check Node Version");
	task("version", function(){
		console.log("Checking node version");

		var packageJSON = require('./package.json');
		var expectedVersion = packageJSON.engines.node;

		var actualVersion = process.version;
		if(semver.neq(actualVersion, expectedVersion)){
			fail("Node version does not match; expected " 
				+ expectedVersion + " but was " 
				+ actualVersion
				);
		}
	});


	desc("Does things that you can test");
	task("bark", function(){
		console.log("\n\nWoof, woof");
	});

	// run using jake awesome[foo,bar,baz] qux=zoobie frang=asdf
	desc("This is an awesome task.");
	task("awesome", function (a, b, c) {
		console.log(a, b, c);
		console.log(process.env.qux, process.env.frang);

		jake.addListener('complete', function () {
		  process.exit();
		});
	});

}());