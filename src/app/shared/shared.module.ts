import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { NgxTextOverflowClampModule } from 'ngx-text-overflow-clamp';

import { OrderByPipe } from 'app/shared/pipes/order-by.pipe';
import { NewlinesPipe } from 'app/shared/pipes/newlines.pipe';
import { ObjectFilterPipe } from 'app/shared/pipes/object-filter.pipe';

import { VarDirective } from 'app/shared/utils/ng-var.directive';
import { DragMoveDirective } from 'app/shared/utils/drag-move.directive';

import { TableTemplateComponent } from 'app/shared/components/table-template/table-template.component';
import { ListConverterPipe } from './pipes/list-converter.pipe';
import { OrgNamePipe } from './pipes/org-name.pipe';
import { TableTemplateUtils } from './utils/table-template-utils';
import { TableDirective } from './components/table-template/table.directive';
import { PublishedPipe } from 'app/shared/pipes/published.pipe';
import { Utils } from './utils/utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_I18N, en_US } from 'ng-zorro-antd';

@NgModule({
  imports: [
    BrowserModule,
    MatProgressBarModule,
    MatSnackBarModule,
    NgxTextOverflowClampModule,
    BrowserAnimationsModule,
    NzPaginationModule,
    NzButtonModule
  ],
  declarations: [
    OrderByPipe,
    NewlinesPipe,
    ObjectFilterPipe,
    PublishedPipe,
    VarDirective,
    DragMoveDirective,
    TableTemplateComponent,
    TableDirective,
    ListConverterPipe,
    OrgNamePipe
  ],
  exports: [
    BrowserModule,
    MatProgressBarModule,
    MatSnackBarModule,
    NgxTextOverflowClampModule,
    OrderByPipe,
    NewlinesPipe,
    ObjectFilterPipe,
    PublishedPipe,
    VarDirective,
    DragMoveDirective,
    TableTemplateComponent,
    ListConverterPipe,
    OrgNamePipe
  ],
  providers: [
    TableTemplateUtils,
    Utils,
    { provide: NZ_I18N, useValue: en_US }
  ]
})

export class SharedModule { }
