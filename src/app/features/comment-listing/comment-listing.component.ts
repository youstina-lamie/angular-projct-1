import { Component, OnInit, Output, Input, SimpleChanges } from '@angular/core';
import { CommentService } from 'src/app/_service/comment.service';
import { Comment } from './../../_model/comment';
import { Post } from './../../_model/post';

@Component({
  selector: 'app-comment-listing',
  templateUrl: './comment-listing.component.html',
  styleUrls: ['./comment-listing.component.scss']
})
export class CommentListingComponent implements OnInit {
  @Output()
  comments: Comment[];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.comments = this.commentService.getCommentByPosId(2);
    this.commentService.commentChanged.subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }
  // ispost: boolean = false;

  //   getComment() {
  //     for(const comm of this.comments){
  // if (comm.postId==1)

  //       }
  //     }

  onCommentAdded(newComment: Comment) {
    // this.comments = this.commentService.getAll();
    this.comments.push(newComment);
    console.log('comment list');
  }
}
