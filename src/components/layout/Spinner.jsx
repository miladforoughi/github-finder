import spinner from './assets/spinner.gif'

const Spinner = () => {
  return (
    <div className='w-100 mt-20 text-center'>
      <img
        width={180}
        className='text-center mx-auto'
        src={spinner}
        alt='Loading ...'
      />
    </div>
  )
}

export default Spinner
