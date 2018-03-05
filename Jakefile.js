(function(){
	"use strict";

	desc("Default build");
	task("default", function(){
		console.log("\nBuild OK");
	});

	desc("Does things that you can test");
	task("bark", function(){
		console.log("\n\nWoof, woof");
	});
}());