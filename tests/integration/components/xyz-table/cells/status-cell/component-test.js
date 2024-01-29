import { module, test } from 'qunit';
import { setupRenderingTest } from 'xyz-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration:component - xyz-table::status-cell', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders properly', async function (assert) {
    assert.expect(3);

    this.set('model', {
      name: 'netsh.exe',
      device: 'Targaryen',
      path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
      status: 'available',
    });

    await render(hbs`<XyzTable::Cells::StatusCell @model={{this.model}} />`);

    assert.strictEqual(
      this.element.querySelector('.status-cell__status').innerText.trim(),
      'Available',
      'The component rendered and the status is Available',
    );
    assert.notStrictEqual(
      this.element.querySelector('.status-cell__badge'),
      null,
      'Available badge is present when status is Available',
    );

    this.set('model', {
      name: 'hi.exe',
      device: 'hello',
      path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
      status: 'scheduled',
    });

    assert.strictEqual(
      this.element.querySelector('.status-cell__badge'),
      null,
      'Available badge is not present when status is scheduled',
    );
  });
});
