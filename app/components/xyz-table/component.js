import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

/**
 *  This is the Xyz Table Component. It has some basic features such as
 *  a way to select rows and accept custom cell components.
 *
 *  Example Usage:
 *    <XyzTable @columns={{this.columns}} @rows={{@model}} />
 *
 *  Future enhancements:
 *  - port to wrap the Ember Table addon which will bring in
 *  - occulusion and virtualization, amognst many other features
 */
export default class XyzTable extends Component {
  onDownload = () => {};
  @tracked selectedItems = {};
  // allSelected = if selected.length == model.length
  // indeterminate = if selected.length > 0 && selected.length !== model.length
  get rows() {
    return this.args.rows ?? [];
  }

  get columns() {
    return this.args.columns ?? [];
  }
}
