// app/slow/page.tsx
export default async function SlowPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 second delay
  return (
    <h1 className='w-full text-center text-black text-3xl font-semibold py-2'>
      Finally loaded!
    </h1>
  );
}
