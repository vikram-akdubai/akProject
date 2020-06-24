import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomecontainerComponent} from './homecontainer/homecontainer.component';


const routes: Routes = [
  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  }, 
  { 
    path: 'blog', 
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) 
  },
  {
    path: 'homePage',     component: HomecontainerComponent
  },
  {
    path: '',     component: HomecontainerComponent
  },
  { path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'pagenotfound', loadChildren: () => import('./pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule) },
  { path: 'coronalive', loadChildren: () => import('./coronalive/coronalive.module').then(m => m.CoronaliveModule) },
  { path: 'blogone', loadChildren: () => import('./blogone/blogone.module').then(m => m.BlogoneModule) },
  { path: 'coronafacts', loadChildren: () => import('./coronafacts/coronafacts.module').then(m => m.CoronafactsModule) },
  { path: 'blogthree', loadChildren: () => import('./blogthree/blogthree.module').then(m => m.BlogthreeModule) },
  { path: 'aboutus', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'termsofuse', loadChildren: () => import('./termsofuse/termsofuse.module').then(m => m.TermsofuseModule) },
  { path: 'privacy', loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyModule) },
  { path: 'career', loadChildren: () => import('./career/career.module').then(m => m.CareerModule) },
  { path: 'joinnow', loadChildren: () => import('./joinnow/joinnow.module').then(m => m.JoinnowModule) },
  { path: 'doctorreg', loadChildren: () => import('./doctorreg/doctorreg.module').then(m => m.DoctorregModule) },
  { path: 'docprofile', loadChildren: () => import('./docprofile/docprofile.module').then(m => m.DocprofileModule) },
  { path: 'blog4', loadChildren: () => import('./blog4/blog4.module').then(m => m.Blog4Module) },
  { path: 'covidguideline', loadChildren: () => import('./covidguideline/covidguideline.module').then(m => m.CovidguidelineModule) },
  { path: 'clinicDetails', loadChildren: () => import('./clinic-details/clinic-details.module').then(m => m.ClinicDetailsModule) },
  { path: 'contactus', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
