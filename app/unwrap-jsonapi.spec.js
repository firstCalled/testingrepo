var unwrap = require('../../app/unwrap-jsonapi')

describe('unwrap-jsonapi', function() {

	//SUCH HINTERY:
	// think of the most basic, simple case to start with
	// - what does the function look like?
	// - remember the first test in fizzbuzz?
	// - what happens when you pass in nothing?
	// - what happens when you pass in an empty object?
	//...


	// this is just a silly test, but check out the syntax!
	it('explodes with awesomeness', function() {
		//
		unwrap({ super: 'input' }).should.eql('totalBazinga')
	})
})