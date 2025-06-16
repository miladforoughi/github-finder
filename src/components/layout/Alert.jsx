import { use, useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

const Alert = () => {
  const { alert } = useContext(AlertContext)
  return (
    alert !== null && (
      <p className='flex items-start mb-4 space-x-2'>
        {alert.type === 'error' && (
          <svg
            className='w-6 h-6 text-red-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='12' cy='12' r='12' fill='#FECDD3'></circle>
            <path d='M8 8l8 8M16 8l-8 8' stroke='#B91c1c' strokeWidth='2' />
          </svg>
        )}
        <p
          className='flex-1 text-base font-semibold loading-7'
          style={{ color: '#B91c1c ' }}
        >
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  )
}

export default Alert
