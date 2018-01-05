import { NgModule } from '@angular/core';


// 导入核心模块
import { CoreModule } from './core';

// 导入根路由
import { AppRoutingModule } from './app-routing.module';

// 导入根组件
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
