global.fs = require( "fs" )
global.path = require( "path" )
global.wrench = require( "wrench" )
global.rc = require( "runtime-configuration" )
global.sinon = require( "sinon" )
global.request = require( "request" )
global.exec = require('child_process').exec
global.pkgtool = require( "../index.coffee" )
global.shld = require( "should" )


global.__testsRootDir = __dirname
global.__tmpDir = path.join(fs.realpathSync( path.join( __dirname, ".." ) ), ".tmp")
global.__binaryPath = path.join( __dirname, "..", "bin", "pkgtool" )

global.__fixturesPaths = {
  successful: path.join( __testsRootDir, "fixtures", "packages", "successful.json" ),
  foo: path.join( __testsRootDir, "fixtures", "packages", "node_modules", "foo", "package.json" ),
  publishConfig: path.join( __testsRootDir, "fixtures", "packages", "publishConfig.json" ),
  broken: path.join( __testsRootDir, "fixtures", "packages", "broken.json" ),
  nodeModules: path.join( __testsRootDir, "fixtures", "packages", "node_modules" )
}

global.helpers = {
  Packages: require( "./helpers/packages" )
}