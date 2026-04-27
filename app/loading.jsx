export default function Loading() {
  return (
    <div className="min-h-screen bg-light-bg flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-primary-navy/20 border-t-primary-navy rounded-full animate-spin" />
        <p className="mt-4 text-text-muted">Loading...</p>
      </div>
    </div>
  );
}
