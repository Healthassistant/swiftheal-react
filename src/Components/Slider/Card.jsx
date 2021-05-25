import './card.scss';
const Card = (props) => {
    let classnames=["card",props.variant].join(' ');
    return (
        <div className={classnames}>
            <div className="img">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="text">
                <span className="name">{props.name}</span>
                <span className="qualification">{props.qualification}</span>
                <span className="specialisation">{props.specialisation}</span>
                <a className="link" href={props.link}>View profile</a>
            </div>
        </div>
    )
}

export default Card;