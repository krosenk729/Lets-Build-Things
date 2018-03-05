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