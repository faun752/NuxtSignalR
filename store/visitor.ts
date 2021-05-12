import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { VisitorInterface } from '~/models/VisitorInterface'

@Module({
  name: 'visitor',
  stateFactory: true,
  namespaced: true
})
export default class Visitor extends VuexModule {
  visitor: VisitorInterface = {} as any

  @Mutation
  public setVisitor(visitor: any) {
    this.visitor = visitor
  }

  @Action({ rawError: true })
  public async getVisitor() {
    let visitor
    try {
      visitor = await $axios.get(process.env.baseUrl + '/visitor/count')
    } catch (error) {
      console.log(error)
    }
    this.setVisitor(visitor?.data)
  }
}
