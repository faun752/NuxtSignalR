import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Visitor from '~/store/visitor'

let visitorStore: Visitor

function initializeStores(store: Store<any>): void {
  visitorStore = getModule(Visitor, store)
}

export { initializeStores, visitorStore }
