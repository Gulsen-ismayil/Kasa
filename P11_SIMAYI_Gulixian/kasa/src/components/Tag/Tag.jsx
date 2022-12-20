import './Tag.css'

function Tag({tag}){
  return (
    <ul className='tagBloc' >
        {tag.map((tg,index) =>
        <li key={index} className='tag'>{tg}</li>
        )}
    </ul>
  )
}

export default Tag