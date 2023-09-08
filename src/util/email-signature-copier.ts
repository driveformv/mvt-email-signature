export class EmailSignatureCopier {
  private element: HTMLElement;
  constructor(element: HTMLElement) {
    this.element = element;
  }

  copy() {
    this.setEditableAndFocus();
    this.copyContent();
    this.clearSelection();
  }

  private setEditableAndFocus() {
    this.element.contentEditable = 'true';
    this.element.focus();
  }

  private copyContent() {
    document.execCommand('selectAll');
    document.execCommand('copy');
    this.element.contentEditable = 'false';
  }

  private clearSelection() {
    const selection = getSelection();
    if (selection) {
      selection.empty();
    }
  }
}
