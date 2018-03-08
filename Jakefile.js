(function(){
	"use strict";

	desc("Default build");
	task("default", ["version"], function(){
		console.log("\nBuild OK");
	});

	// var EXPECTED_NODE_VERSION = 'v6.11.2';
	desc("Check Node Version");
	task("version", function(){
		console.log("Checking node version");
		var packageJSON = require('./package.json');
		var EXPECTED_NODE_VERSION = 'v' + packageJSON.engines.node;
		var actualVersion = process.version;
		if(actualVersion !== EXPECTED_NODE_VERSION){
			fail("Node version does not match; expected " 
				+ EXPECTED_NODE_VERSION + " but was " 
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