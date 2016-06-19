"use strict";

/*:
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "fnord",
			"path": "fnord/fnord.js",
			"file": "fnord.js",
			"module": "fnord",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/fnord.git",
			"test": "fnord-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@index:
		{
			"plough": "plough",
			"raze": "raze"
		}
	@end-index
*/

if( typeof window == "undefined" ){
	var plough = require( "plough" );
	var raze = require( "raze" );
}

if( typeof window != "undefined" &&
	!( "plough" in window ) )
{
	throw new Error( "plough is not defined" );
}

if( typeof window != "undefined" &&
	!( "raze" in window ) )
{
	throw new Error( "raze is not defined" );
}

var fnord = function fnord( list ){
	/*:
		@meta-configuration:
			{
				"list:required": [
					"*",
					"..."
				]
			}
		@end-meta-configuration
	*/

	var _list = raze( arguments );

	_list = plough( arguments );

	for( var index = _list.length - 1; index > 0; index-- ){
		var randomIndex = Math.floor( Math.random( ) * ( index + 1 ) );

		var temporary = _list[ index ];

		_list[ index ] = _list[ randomIndex ];

		_list[ randomIndex ] = temporary;
	}

	return _list;
};


if( typeof module != "undefined" ){
	module.exports = fnord;
}
