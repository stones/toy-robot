const path: string = process.argv[2];

if (path) {
	console.log(path);
} else {
	console.log('Please specify a path');
}
