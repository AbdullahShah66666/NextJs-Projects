import { comments } from "@/app/route-handlers/data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  if (index !== 1) {
    comments[index].text = text;

    return Response.json(comments[index]);
  } else {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      status: 404,
      headers: {
        "Context-Type": "application/json",
      },
    });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  if (index !== 1) {
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
  } else {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
