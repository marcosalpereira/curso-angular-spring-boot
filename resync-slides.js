if (process.argv.length < 2) {
	console.log('Usage: node inputFileName [[otherFile] ...]');
	process.exit(1);
  }

  var fs = require('fs');
  var slide = 0;
  var subSlide = 1;
  var ignoreLine = false;

  const inputFiles = process.argv.slice(2).sort()

  for (inputFileName of inputFiles) {
	var outputFileName = inputFileName + '.tmp';

	var out = fs.createWriteStream(outputFileName);

	out.write(`[//]: # (${++slide})\n`);

	console.log({slide, inputFileName})

	fs.readFileSync(inputFileName)
	  .toString()
	  .split('\n')
	  .forEach(function(line) {
		if (ignoreLine || line.startsWith('[//]:')) {
		  ignoreLine = false;
		} else if ('---' === line) {
		  out.write('---\n\n');
		  out.write(`[//]: # (${++slide})\n`);
		  ignoreLine = true;
		  subSlide = 1;
		} else if ('--' === line) {
		  out.write('--\n\n');
		  out.write(`[//]: # (${slide}/${++subSlide})\n`);
		  ignoreLine = true;
		} else {
		  ignoreLine = false;
		  out.write(line + '\n');
		}
	  });

	fs.rename(outputFileName, inputFileName, function(err) {
	  if (err) throw err;
	});
	subSlide = 1;
}
console.log('done!');
