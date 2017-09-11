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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZub3JkLnN1cHBvcnQuanMiXSwibmFtZXMiOlsicGxvdWdoIiwicmVxdWlyZSIsImZub3JkIiwibGlzdCIsImFyZ3VtZW50cyIsImluZGV4IiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wb3JhcnkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxJQUFoQixFQUFzQjtBQUNuQzs7Ozs7Ozs7Ozs7QUFXQUEsUUFBT0gsT0FBUUksU0FBUixDQUFQOztBQUVBLE1BQUssSUFBSUMsUUFBVUYsS0FBS0csTUFBTCxHQUFjLENBQWpDLEVBQXNDRCxRQUFRLENBQTlDLEVBQWlEQSxPQUFqRCxFQUEwRDtBQUN6RCxNQUFJRSxjQUFjQyxLQUFLQyxLQUFMLENBQVlELEtBQUtFLE1BQUwsTUFBbUJMLFFBQVEsQ0FBM0IsQ0FBWixDQUFsQjs7QUFFQSxNQUFJTSxZQUFZUixLQUFNRSxLQUFOLENBQWhCOztBQUVBRixPQUFNRSxLQUFOLElBQWdCRixLQUFNSSxXQUFOLENBQWhCOztBQUVBSixPQUFNSSxXQUFOLElBQXNCSSxTQUF0QjtBQUNBOztBQUVELFFBQU9SLElBQVA7QUFDQSxDQXpCRDs7QUEyQkFTLE9BQU9DLE9BQVAsR0FBaUJYLEtBQWpCIiwiZmlsZSI6ImZub3JkLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZm5vcmRcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiZm5vcmQvZm5vcmQuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiZm5vcmQuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJmbm9yZFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9mbm9yZC5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwiZm5vcmQtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRDb25mdXNlIHRoZSBsaXN0IG1ha2luZyBpdCByYW5kb21pemUuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xyXG5cclxuY29uc3QgZm5vcmQgPSBmdW5jdGlvbiBmbm9yZCggbGlzdCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibGlzdDpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcIipcIixcclxuXHRcdFx0XHRcdFwiLi4uXCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0bGlzdCA9IHBsb3VnaCggYXJndW1lbnRzICk7XHJcblxyXG5cdGZvciggbGV0IGluZGV4ID0gKCBsaXN0Lmxlbmd0aCAtIDEgKTsgaW5kZXggPiAwOyBpbmRleC0tICl7XHJcblx0XHRsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSggKSAqICggaW5kZXggKyAxICkgKTtcclxuXHJcblx0XHRsZXQgdGVtcG9yYXJ5ID0gbGlzdFsgaW5kZXggXTtcclxuXHJcblx0XHRsaXN0WyBpbmRleCBdID0gbGlzdFsgcmFuZG9tSW5kZXggXTtcclxuXHJcblx0XHRsaXN0WyByYW5kb21JbmRleCBdID0gdGVtcG9yYXJ5O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZub3JkO1xyXG4iXX0=
//# sourceMappingURL=fnord.support.js.map
