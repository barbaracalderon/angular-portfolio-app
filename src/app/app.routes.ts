import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'education', component: EducationComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', component: HomeComponent},
    { path: '**', component: NotfoundComponent }
];
