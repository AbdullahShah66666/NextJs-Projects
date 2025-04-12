export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  //console.log("slug", slug);

  if (slug?.length === 1) {
    return (
      <h1 className='text-black font-semibold text-lg text-center bg-yellow-300 px-3 py-1'>
        Viewing Slug 1: {slug[0]}
      </h1>
    );
  } else if (slug?.length === 2) {
    return (
      <div className='flex flex-row justify-evenly items-center bg-gray-500'>
        <h1 className='text-black font-semibold text-lg bg-yellow-300 px-3 py-1'>
          Viewing Slug [0]:{slug[0]}
        </h1>
        <h1 className='text-black font-semibold text-lg bg-yellow-300 px-3 py-1'>
          Viewing Slug [1]: {slug[1]}
        </h1>
      </div>
    );
  } else if (slug?.length > 2) {
    return (
      <div className='flex flex-row flex-wrap gap-3 justify-evenly content-center min-h-screen bg-gray-500'>
        {slug?.map((item, index) => (
          <h1
            className='text-black font-semibold text-lg bg-yellow-300 px-3 py-1'
            key={index}
          >
            Slug {index + 1}: &nbsp;{item}
          </h1>
        ))}
      </div>
    );
  }

  return <h1>Docs Home Page</h1>;
}
