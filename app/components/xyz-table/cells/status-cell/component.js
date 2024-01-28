import Component from '@glimmer/component';

export default class StatusCell extends Component {
  get isAvailable() {
    return this.args.model?.status === 'available';
  }
}
