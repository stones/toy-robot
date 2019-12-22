import LineByLineReader = require('line-by-line');
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class FileReader {

	public createStreamFromPath(path: string): Observable<unknown> {
		const lineReader: LineByLineReader = new LineByLineReader(path);
		const end$: Observable<unknown> = fromEvent(lineReader, 'close');

		return fromEvent(lineReader, 'line').pipe(takeUntil(end$));
	}
}
