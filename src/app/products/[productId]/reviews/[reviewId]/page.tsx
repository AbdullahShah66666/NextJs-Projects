//import * as React from "react";

export default async function ReviewId({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { reviewId, productId } = await params; // Destructure the resolved params

  return (
    <div className='flex flex-col justify-center items-center bg-gray-500 text-black'>
      <h1 className='text-lg bg-gray-200 px-4 py-2'>
        Review: {reviewId} of Product: {productId}
      </h1>
    </div>
  );
}
//  const { slug } = await params;

//const reviewId = slug[1];

//console.log(`Review ID: ${reviewId}`);

/*if (slug?.length === 2) {
    return <h1>(slug[0]) and {slug[1]}</h1>;
  }*/
