"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/fnord.git",
			"test": "fnord-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Confuse the list making it randomize.
	@end-module-documentation

	@include:
		{
			"plough": "plough"
		}
	@end-include
*/

const plough = require( "plough" );

const fnord = function fnord( list ){
	/*;
		@meta-configuration:
			{
				"list:required": [
					"*",
					"..."
				]
			}
		@end-meta-configuration
	*/

	list = plough( arguments );

	for( let index = ( list.length - 1 ); index > 0; index-- ){
		let randomIndex = Math.floor( Math.random( ) * ( index + 1 ) );

		let temporary = list[ index ];

		list[ index ] = list[ randomIndex ];

		list[ randomIndex ] = temporary;
	}

	return list;
};

module.exports = fnord;
