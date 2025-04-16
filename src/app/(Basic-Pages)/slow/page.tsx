// app/slow/page.tsx
export default async function SlowPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 second delay
  return <div>Finally loaded!</div>;
}
