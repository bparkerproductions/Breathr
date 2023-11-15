export default function Checkbox({ className = '', ...props }) {
  return (
    <input
      {...props}
      type="checkbox"
      className={
        'rounded bg-neutral-200 border-neutral-400 text-blue-600 shadow-sm focus:ring-blue-500' +
        className
      }
    />
  )
}
