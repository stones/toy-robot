import LineByLineReader = require('line-by-line');
import * as fs from 'fs';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Service } from 'typedi';

@Service()
export class FileReader {

	public createStreamFromPath(path: string): Observable<unknown> {

		if (!fs.existsSync(path)) {
			console.log('File could not be found');
			process.exit();
		}

		const lineReader: LineByLineReader = new LineByLineReader(path);

		const end$: Observable<unknown> = fromEvent(lineReader, 'close');

		return fromEvent(lineReader, 'line').pipe(takeUntil(end$));
	}
}
