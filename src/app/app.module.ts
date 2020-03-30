import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { PostComponent } from './features/post/post.component';
import { AddPostComponent } from './features/add-post/add-post.component';
import { PostListingComponent } from './features/post-listing/post-listing.component';
import { CommentComponent } from './features/comment/comment.component';
import { CommentListingComponent } from './features/comment-listing/comment-listing.component';
import { AddCommentComponent } from './features/add-comment/add-comment.component';
import { LoginComponent } from './features/login/login.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ProfileComponent } from './features/profile/profile.component';
import { PersonService } from './_service/person.service';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    PostComponent,
    AddPostComponent,
    PostListingComponent,
    CommentComponent,
    CommentListingComponent,
    AddCommentComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
