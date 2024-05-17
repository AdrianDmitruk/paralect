export function DownIcon({
  color = '#ACADB9',
  className
}: {
  color?: string
  className?: string
}) {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.66663 9L11.8857 14.3306C12.3351 14.7158 12.9982 14.7158 13.4476 14.3306L19.6666 9'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
