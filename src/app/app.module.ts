import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {VirtualScrollContext} from './virtual-scroll-context';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ScrollingModule as ExperimentalScrollingModule} from '@angular/cdk-experimental/scrolling';
import {CommonModule} from '@angular/common';
import {ErrorService} from './errorService';
import {VirtualScrollService} from "./virtual-scroll.service";


@NgModule({
  declarations: [
    VirtualScrollContext
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
    CommonModule,
    ExperimentalScrollingModule
  ],
  entryComponents: [VirtualScrollContext],
  bootstrap: [VirtualScrollContext],
  providers: [VirtualScrollService, ErrorService],

})
export class AppModule {}
