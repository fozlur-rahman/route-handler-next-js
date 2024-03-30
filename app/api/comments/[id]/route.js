import comments from "@/app/data/comments";

export const GET = async ({ params }) => {
    const commentId = params.id;
    const commentIndex = comments.findIndex(
        (comment) => comment.id === parseInt(commentId)
    );
    if (commentIndex) {
        return Response.json(comments[commentIndex]);
    }
    return Response.json(comments);
};

export const PATCH = async (request, { params }) => {
    const updatedComment = await request.json();
    const commentId = params.id;
    const commentIndex = comments.findIndex(
        (comment) => comment.id === parseInt(commentId)
    );
    comments[commentIndex].text = updatedComment.text;
    return Response.json({
        ...comments[commentIndex],
        message: "Updated",
    });
};

export const DELETE = async (request, { params }) => {
    const commentId = params.id;
    const commentIndex = comments.findIndex(
        (comment) => comment.id === parseInt(commentId)
    );
    const deleteComment = comments[commentIndex];
    comments.splice(commentIndex, 1);

    return Response.json({
        ...deleteComment,
        message: "Deleted",
    });
};
