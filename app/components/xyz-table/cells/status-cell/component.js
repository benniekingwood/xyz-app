import Component from '@glimmer/component';

export default class StatusCellComponent extends Component {
  get isAvailable() {
    return this.args.status === 'available';
  }
}
