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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
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

var plough = require("plough");

var fnord = function fnord(list) {
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

	list = plough(arguments);

	for (var index = list.length - 1; index > 0; index--) {
		var randomIndex = Math.floor(Math.random() * (index + 1));

		var temporary = list[index];

		list[index] = list[randomIndex];

		list[randomIndex] = temporary;
	}

	return list;
};

module.exports = fnord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZub3JkLmpzIl0sIm5hbWVzIjpbInBsb3VnaCIsInJlcXVpcmUiLCJmbm9yZCIsImxpc3QiLCJhcmd1bWVudHMiLCJpbmRleCIsImxlbmd0aCIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGVtcG9yYXJ5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxJQUFoQixFQUFzQjtBQUNuQzs7Ozs7Ozs7Ozs7QUFXQUEsUUFBT0gsT0FBUUksU0FBUixDQUFQOztBQUVBLE1BQUssSUFBSUMsUUFBUUYsS0FBS0csTUFBTCxHQUFjLENBQS9CLEVBQWtDRCxRQUFRLENBQTFDLEVBQTZDQSxPQUE3QyxFQUFzRDtBQUNyRCxNQUFJRSxjQUFjQyxLQUFLQyxLQUFMLENBQVlELEtBQUtFLE1BQUwsTUFBbUJMLFFBQVEsQ0FBM0IsQ0FBWixDQUFsQjs7QUFFQSxNQUFJTSxZQUFZUixLQUFNRSxLQUFOLENBQWhCOztBQUVBRixPQUFNRSxLQUFOLElBQWdCRixLQUFNSSxXQUFOLENBQWhCOztBQUVBSixPQUFNSSxXQUFOLElBQXNCSSxTQUF0QjtBQUNBOztBQUVELFFBQU9SLElBQVA7QUFDQSxDQXpCRDs7QUEyQkFTLE9BQU9DLE9BQVAsR0FBaUJYLEtBQWpCIiwiZmlsZSI6ImZub3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJmbm9yZFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZm5vcmQvZm5vcmQuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImZub3JkLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImZub3JkXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZm5vcmQuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJmbm9yZC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENvbmZ1c2UgdGhlIGxpc3QgbWFraW5nIGl0IHJhbmRvbWl6ZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuXG5jb25zdCBmbm9yZCA9IGZ1bmN0aW9uIGZub3JkKCBsaXN0ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibGlzdDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCIqXCIsXG5cdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRsaXN0ID0gcGxvdWdoKCBhcmd1bWVudHMgKTtcblxuXHRmb3IoIGxldCBpbmRleCA9IGxpc3QubGVuZ3RoIC0gMTsgaW5kZXggPiAwOyBpbmRleC0tICl7XG5cdFx0bGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oICkgKiAoIGluZGV4ICsgMSApICk7XG5cblx0XHRsZXQgdGVtcG9yYXJ5ID0gbGlzdFsgaW5kZXggXTtcblxuXHRcdGxpc3RbIGluZGV4IF0gPSBsaXN0WyByYW5kb21JbmRleCBdO1xuXG5cdFx0bGlzdFsgcmFuZG9tSW5kZXggXSA9IHRlbXBvcmFyeTtcblx0fVxuXG5cdHJldHVybiBsaXN0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbm9yZDtcbiJdfQ==
