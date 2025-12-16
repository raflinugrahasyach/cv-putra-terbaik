export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner Brand Color */}
        <div className="w-12 h-12 border-4 border-slate-200 border-t-brand-600 rounded-full animate-spin"></div>
        <p className="text-slate-500 text-sm font-semibold animate-pulse">Memuat...</p>
      </div>
    </div>
  );
}