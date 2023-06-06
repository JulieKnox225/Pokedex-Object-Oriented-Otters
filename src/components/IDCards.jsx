import avatar from "/images/default-profile-pic.jpg"

export const IDCards = (props) => {
  return (
    <div className="id-card">
        <img className="avatar-for-search" src={avatar} />
        <div className='card--stats'>
            <p className='id--fullName'>{props.firstName} {props.lastName}</p>
            <p>{props.email}</p>
            <p className='id--degree'>{props.degree}</p>
            <p>{props.additionalInfo}</p>
            <p>{props.experience}</p>
            <p>{props.achievments}</p>
            <p>{props.skills}</p>
        
        </div>
    </div>
  )
}
