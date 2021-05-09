import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { VisitorCount } from '~/models/VisitorCount'

@Module({
  name: 'visitor',
  stateFactory: true,
  namespaced: true
})
export default class Visitor extends VuexModule {
  visitorCount: VisitorCount = {} as any

  @Mutation
  private setVisitorCount(visitorCount: any) {
    this.visitorCount = visitorCount
  }

  @Action({ rawError: true })
  public async getVisitorCount() {
    let visitorCount
    try {
      visitorCount = await $axios.get(process.env.baseUrl + '/visitor/count')
    } catch (error) {
      console.log(error)
    }
    this.setVisitorCount(visitorCount?.data)
  }
}
