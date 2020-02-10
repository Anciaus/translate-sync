import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { LandingComponent } from '@app/home/components';
import { HomeRoutingModule } from '@app/home/home-routing.module';
import { LandingService } from '@app/home/services';

import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [LandingService]
})
export class HomeModule {}
