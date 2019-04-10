if (process.argv.length < 2) {
  console.log('Usage: node inputFileName');
  process.exit(1);
}

var fs = require('fs');
var inputFileName = process.argv[2];
var outputFileName = inputFileName + ".tmp";

var out = fs.createWriteStream(outputFileName);
var slide = 0;
var subSlide = 1;

out.write(`[//]: # (${slide++})\n`);

var ignoreLine = false;
fs.readFileSync(inputFileName).toString().split('\n').forEach(function (line) {

	  if (ignoreLine || line.startsWith("[//]:")) {
	      ignoreLine = false;

	  } else if ("---" === line) {
			    out.write("---\n\n");
			    out.write(`[//]: # (${++slide})\n`);
			    ignoreLine = true;
				subSlide = 1;

			} else if ("--" === line) {
			        out.write("--\n\n");
			        out.write(`[//]: # (${slide}/${++subSlide})\n`);
			        ignoreLine = true;

			} else {
			    ignoreLine = false;
			    out.write(line + '\n');
			}
});

fs.rename(outputFileName, inputFileName, function (err) {
  if (err) throw err;
  console.log('done!');
});

