// import * as datacomment from './data_comment';
type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
}
const comments: IComment[] = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
]

function countTotalComments(comment: IComment): number {
    let totalCount = 1; // Count the current comment
    if (comment.replies) {
      for (const reply of comment.replies) {
        totalCount += countTotalComments(reply); // Recursively count replies
      }
    }
    return totalCount;
  }
  
  const totalComments = comments.reduce((total, comment) => total + countTotalComments(comment), 0);
  
  console.log("Total komentar:", totalComments);