import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBuyComponent } from './book-buy.component';

describe('BookBuyComponent', () => {
  let component: BookBuyComponent;
  let fixture: ComponentFixture<BookBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookBuyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
