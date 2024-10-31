import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-grade-selection-modal',
  templateUrl: './grade-selection-modal.component.html',
  styleUrls: ['./grade-selection-modal.component.scss']
})
export class GradeSelectionModalComponent {
  @Input() isOpen: boolean = false;
  @Output() selectGrade = new EventEmitter<number>();
  @Output() closeModal = new EventEmitter<void>();

  grades = Array.from({ length: 11 }, (_, i) => i + 1);

  onSelectGrade(grade: number): void {
    this.selectGrade.emit(grade);
    this.closeModal.emit(); // Close modal after selection
  }

  onClose(): void {
    this.closeModal.emit();
  }
}
