import { action, makeObservable, observable } from 'mobx';
import CommonApiService from '../ApiServices/CommonApiService';

class CommonAppStore {
  users = [];
  metric = 0;
  metrics = [];
  chartData = [];
  chartLabel = [];

  constructor() {
    makeObservable(this, {
      users: observable,
      metrics: observable,
      metric: observable,
      chartData: observable,
      chartLabel: observable,
      getUsers: action,
      getData: action,
      
    });
  }
  async getUsers() {
    await CommonApiService.getUsers().then((result) => (this.users = result));
  }
  async getData() {
    await CommonApiService.getData().then((result) => {
      this.metrics = result;
      this.chartData = this.metrics.map((a) => a.counts);
      this.chartLabel = this.metrics.map((a) => a.days);
    });

    await CommonApiService.getRRMetric().then((result) => {
      this.metric = result;
    });
  }
}

export default new CommonAppStore();
