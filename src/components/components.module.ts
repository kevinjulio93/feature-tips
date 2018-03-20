import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FeatureTipComponent } from './feature-tip/feature-tip';

@NgModule({
    declarations: [FeatureTipComponent],
    imports: [IonicModule.forRoot(FeatureTipComponent)],
    exports: [FeatureTipComponent]
})
export class ComponentsModule {}
