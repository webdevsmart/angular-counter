import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export async function wait(time: number) {
  await of(0).pipe(delay(time)).toPromise();
}
