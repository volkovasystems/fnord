
const assert = require( "assert" );
const fnord = require( "./fnord.js" );

assert.deepEqual( fnord( ), [ ], "should return empty array" );

assert.deepEqual( fnord( [ ] ), [ ], "should return empty array" );

assert.ok( fnord( [ 1, 2, 3 ] ) );

assert.ok( fnord( [ 1, 2, 3, [ 4, 5, 6 ] ] ) );

assert.equal( Array.isArray( fnord( [ 1, 2, 3 ] ) ), true, "should be true" );

console.log( "ok" );
