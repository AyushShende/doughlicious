import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div>
      You are not authorized to view this page
      <Link href="/">Back to HomePage</Link>
    </div>
  );
}
