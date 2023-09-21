//


export default function CardAmount(props) {
  return (
    <>
      <div className="group">
        <div className="w-[96px] h-[86px] flex-shrink-0 flex justify-center items-center" style={{ borderRadius: '20px', border: '1px', background: '#FFF', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.15)' }}>
          <h3 className="text-[#000] text-[17px] font-semibold leading-normal group-hover:text-[#FF617D]">{props.text}</h3>
        </div>
      </div>
  </>
  )
}