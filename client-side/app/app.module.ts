import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route,RouterModule } from '@angular/router';
import { UtilsModule } from './utils.module/utils.module';
import { RTBModule } from './rtb.module/rtb.module';
import { AppComponent } from './rtb.components/app.component';

var routes: Route[]=[    
  {path:'', redirectTo:'dashboard',pathMatch:'full'},  
];

@NgModule({
  imports: [BrowserModule,
            RouterModule.forRoot(routes), 
            UtilsModule, 
            RTBModule
           ],
  declarations: [AppComponent                      
                ],
  bootstrap: [AppComponent,
             ],
  providers: [ 
             ],
})
export class AppModule { }