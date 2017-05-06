
const assert = require( "assert" );
const fnord = require( "./fnord.js" );

assert.ok( fnord( [ 1, 2, 3 ] ) );

assert.equal( Array.isArray( fnord( [ 1, 2, 3 ] ) ), true, "should be true" );

console.log( "ok" );
