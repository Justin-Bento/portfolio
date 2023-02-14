interface Uses_Card_Props {
  Headline: string,
  Supporting: string
}

export default function Uses_Card(props: Uses_Card_Props) {
  return (
    <div className="overflow-hidden border rounded-lg border-primary-200">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{props.Headline || "Plantera"}</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{props.Supporting || "Creating technology to empower civilians to explore space on their own terms."}</p>
      </div>
    </div>
  )
}