import ws from './binance'
import { Observable } from 'rxjs'
import { share, tap } from 'rxjs/operators'

import { debugName } from './helpers'

export default Observable.create(async observer => {
  await ws.connected
  ws.hook('my_trade', order => observer.next(order))
}).pipe(
  tap(debugName('trade')),
  share(),
)
