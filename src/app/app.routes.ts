import { Routes } from '@angular/router';
import { AboutComponent } from './Component/Mabout/about.component';

import { HomeComponent } from './Component/home/home.component';
import { ProjectComponent } from './Component/project/project.component';
import { ExperinceComponent } from './Component/experince/experince.component';



export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },


    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: 'experince',
        component: ExperinceComponent
    }
   
];
