# Automated Build 

### Like Legos For Code.
##### But legos that automatically build themselves continuously 

Try The Code on Your Conputer
------

1. Install [Git](http://git-scm.com/downloads)
1. Install [Node.js](https://nodejs.org/en/) to have Node and npm set up
1. Clone the latest code `git clone https://github.com/krosenk729/Lets-Build-Things.git`
1. Navigate to the project root using `cd Lets-Build-Things`
1. Delete the `.git` directory so you start fresh if you choose to later commit the repo
1. Type `npm install` to install the latest code dependencies 
1. Run `node build.js` 


Building and Testing
--------------------

To build (and test):

1. Run `./jake.sh karma` (Unix/Mac) or `jake karma` (Windows) to start the Karma server.
1. Start the browsers you want to test and point each one at `http://localhost:9876`.
1. Run `./jake.sh` (Unix/Mac) or `jake` (Windows) every time you want to build and test. Alternatively, use `./watch.sh` (Unix/Mac) or `watch` (Windows) to automatically run `jake` whenever files change.

Add the `loose=true` parameter to relax Node and browser version checking.

To run the app for manual testing:
1. Run `./jake.sh run` (Unix/Mac) or `jake run` (Windows).


Continuous Integration
----------------------

To set up each development workstation:

1. Choose an easy-to-type name for the development workstation, such as `dev1`. Put a label on the machine with this name so you don't forget it--you'll use it when you integrate.
2. *On the integration machine*, run `git branch <name>` to create a branch for the development workstation.
3. Clone the integration machine's repository to the development workstation. (The steps here depend on your network configuration. Talk to your local Git expert.)
4. *On the development workstation,* run `git checkout <name>` to switch to the development branch.
5. Now you can build and test as described above.

To integrate:

1. Run `./ci.sh usage` (Unix/Mac) or `ci usage` (Windows) for instructions.


Who What Where Why?
------

Thanks to help from: 

+ Code School https://www.codeschool.com/screencasts/let-s-code-javascript-the-automated-build || http://www.letscodejavascript.com/v3/comments/how_to/3 || https://github.com/jamesshore/automatopia
+ PhantomJS http://phantomjs.org/ 
+ JSTest http://jstest.jcoglan.com/
+ 