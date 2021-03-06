// @ts-check
import { CapitalizationDropdown, EditDataPage, nthDropdownButtonCssSelector } from '../editData.page';

export const editDataTextPage = new class EditDataTextPage extends EditDataPage {
  constructor(urlPath) {
    super(urlPath);
    this.dropdown_capitalization = new CapitalizationDropdown(this.get(nthDropdownButtonCssSelector(1)).selector);
    super.nameElements();
  }
}();
