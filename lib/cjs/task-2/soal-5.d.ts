type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
};
declare const comments: IComment[];
declare function countTotalComments(comment: IComment): number;
declare const totalComments: number;
