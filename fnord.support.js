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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZub3JkLnN1cHBvcnQuanMiXSwibmFtZXMiOlsicGxvdWdoIiwicmVxdWlyZSIsImZub3JkIiwibGlzdCIsImFyZ3VtZW50cyIsImluZGV4IiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wb3JhcnkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxJQUFoQixFQUFzQjtBQUNuQzs7Ozs7Ozs7Ozs7QUFXQUEsUUFBT0gsT0FBUUksU0FBUixDQUFQOztBQUVBLE1BQUssSUFBSUMsUUFBVUYsS0FBS0csTUFBTCxHQUFjLENBQWpDLEVBQXNDRCxRQUFRLENBQTlDLEVBQWlEQSxPQUFqRCxFQUEwRDtBQUN6RCxNQUFJRSxjQUFjQyxLQUFLQyxLQUFMLENBQVlELEtBQUtFLE1BQUwsTUFBbUJMLFFBQVEsQ0FBM0IsQ0FBWixDQUFsQjs7QUFFQSxNQUFJTSxZQUFZUixLQUFNRSxLQUFOLENBQWhCOztBQUVBRixPQUFNRSxLQUFOLElBQWdCRixLQUFNSSxXQUFOLENBQWhCOztBQUVBSixPQUFNSSxXQUFOLElBQXNCSSxTQUF0QjtBQUNBOztBQUVELFFBQU9SLElBQVA7QUFDQSxDQXpCRDs7QUEyQkFTLE9BQU9DLE9BQVAsR0FBaUJYLEtBQWpCIiwiZmlsZSI6ImZub3JkLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImZub3JkXCIsXG5cdFx0XHRcInBhdGhcIjogXCJmbm9yZC9mbm9yZC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZm5vcmQuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZm5vcmRcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Zub3JkLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZm5vcmQtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDb25mdXNlIHRoZSBsaXN0IG1ha2luZyBpdCByYW5kb21pemUuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IHBsb3VnaCA9IHJlcXVpcmUoIFwicGxvdWdoXCIgKTtcblxuY29uc3QgZm5vcmQgPSBmdW5jdGlvbiBmbm9yZCggbGlzdCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiKlwiLFxuXHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bGlzdCA9IHBsb3VnaCggYXJndW1lbnRzICk7XG5cblx0Zm9yKCBsZXQgaW5kZXggPSAoIGxpc3QubGVuZ3RoIC0gMSApOyBpbmRleCA+IDA7IGluZGV4LS0gKXtcblx0XHRsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSggKSAqICggaW5kZXggKyAxICkgKTtcblxuXHRcdGxldCB0ZW1wb3JhcnkgPSBsaXN0WyBpbmRleCBdO1xuXG5cdFx0bGlzdFsgaW5kZXggXSA9IGxpc3RbIHJhbmRvbUluZGV4IF07XG5cblx0XHRsaXN0WyByYW5kb21JbmRleCBdID0gdGVtcG9yYXJ5O1xuXHR9XG5cblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZub3JkO1xuIl19
//# sourceMappingURL=fnord.support.js.map
