import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array';

/**
 *  This is the Xyz Table Component. It has some basic features such as
 *  a way to select rows and accept custom cell components.
 *
 *  Example Usage:
 *    <XyzTable @columns={{this.yourcolumns}} @rows={{@yourdata}} @download={{this.yourDownloadFn}} />
 *
 *  Future enhancements:
 *  - port to wrap the Ember Table addon which will bring in
 *  - occlusion and virtualization, amongst many other features
 */
export default class XyzTable extends Component {
  /** @property {Ember.Array} - the selected items */
  @tracked selectedItems = A([]);

  /** @property {Ember.Array} rows - the model list to be displayed in the table */
  get rows() {
    return this.args.rows ?? [];
  }

  get columns() {
    return this.args.columns ?? [];
  }

  get selectedTitle() {
    return this.selectedItems.length > 0
      ? `Selected ${this.selectedItems.length}`
      : 'None Selected';
  }

  get isAllSelected() {
    return this.selectedItems.length === this.args.rows.length;
  }

  set isAllSelected(value) {} // do nothing

  get isIndeterminate() {
    return (
      this.selectedItems.length > 0 &&
      this.selectedItems.length !== this.args.rows.length
    );
  }

  /**
   * This function will check for the passed in action
   * and will call the method passing in the selected
   * items as a parameter.
   *
   * @function onDownloadClick
   */
  @action
  onDownloadClick() {
    // if a download function will provided...
    if (this.args.download) {
      this.args.download(
        this.args.rows.filter((row, index) =>
          this.selectedItems.includes(index),
        ),
      );
    } else {
      // default table behavior could be here for downloading
    }
  }

  @action
  onRowCheckboxClick(id) {
    if (this.selectedItems.includes(id)) {
      this.selectedItems = this.selectedItems.filter(
        (selectedId) => selectedId !== id,
      );
    } else {
      this.selectedItems.pushObject(id);
    }
  }

  @action
  onSelectAllClick() {
    // if all selected, remove all from selected list
    if (this.selectedItems.length === this.args.rows.length) {
      this.selectedItems.clear();
    } else {
      // add all to selected list
      this.args.rows.forEach((item, index) => {
        this.selectedItems.addObject(index);
      });
    }
  }
}
