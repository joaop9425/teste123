import { JsonPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgFor, JsonPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  tests = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.test();
  }

  test(): void {
    this.http.get('assets/test.json').subscribe((res: any) => {
      this.tests = res;
    });
  }
}
