
export const PriceType = (props) => {
    const {priceType} = props;
  return (
    <span className='uppercase font-bold px-3 py-1 bg-[#fa6763] text-[#2e3b46] rounded-2xl text-sm hover:text-[#fa6763] hover:bg-white'>{priceType}</span>
  )
}
