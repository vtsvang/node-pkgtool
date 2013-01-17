describe "expand", ->

  beforeEach ( done ) ->
    exec "#{ __binaryPath } .tmp/successful expand", ( err, stdout, stderr ) =>
      @pkg = require path.join __tmpDir, "successful", "package.json"
      done()

  it "should expand missing dependencies from node_modules", ->
    @pkg.dependencies
      .should.have.property "foo", "0.0.1"