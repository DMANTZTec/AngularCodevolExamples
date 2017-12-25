import { Component } from '@angular/core';
import {PaginatePipe, PaginationService} from 'ng2-pagination';

@Component ({
   selector: 'my-app',
   template:
    '<ul>
         <li *ngFor = "let item of collection | paginate: {
            itemsPerPage: 5, currentPage: p }"> ... </li>
      </ul>
      <pagination-controls (pageChange) = "p = $event"></pagination-controls>
   '
})
export class AppComponent { }