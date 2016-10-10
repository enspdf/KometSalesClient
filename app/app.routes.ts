import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/Index/index.component';

import { AuthorComponent } from './components/Author/index.component';
import { NewAuthorComponent } from './components/Author/new.component';
import { DeleteAuthorComponent } from './components/Author/delete.component';
import { EditAuthorComponent } from './components/Author/edit.component';

import { ParqueaderoComponent } from './components/Parqueadero/index.component';
import { NewParqueaderoComponent } from './components/Parqueadero/new.component';
import { DeleteParqueaderoComponent } from './components/Parqueadero/delete.component';
import { EditParqueaderoComponent } from './components/Parqueadero/edit.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'author',
        children: [
            {
                path: '',
                component: AuthorComponent
            },
            {
                path: 'new',
                component: NewAuthorComponent
            },
            {
                path: 'delete/:id',
                component: DeleteAuthorComponent
            },
            {
                path: 'edit/:id',
                component: EditAuthorComponent
            }
        ]
    },
    {
        path: 'parqueaderos',
        children: [
            {
                path: '',
                component: ParqueaderoComponent
            },
            {
                path: 'new',
                component: NewParqueaderoComponent
            },
            {
            path: 'delete/:id',
                component: DeleteParqueaderoComponent
            },
            {
                path: 'edit/:id',
                component: EditParqueaderoComponent
            }
        ]
    }
];

export const appRouterProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
