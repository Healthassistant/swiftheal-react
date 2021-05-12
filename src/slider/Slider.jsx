import './slider.scss';
import Card from './Card';
import { useEffect, useState } from 'react';
import {CircularProgress} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import axios from 'axios';
const Slider = () => {
    const [move, set_move] = useState(0);
    const [doctor_list,set_doctor_list] = useState([]);
    const [n_cards,set_n_cards] = useState(0);
    const card_width = 260;
    let variant="small";
    let i=0;
    const displacement = 150;
    // Api calls
    useEffect(() => {
        axios.get("http://192.168.43.190:8000/doctor/top_doctors/").then(res => {
            if(res.status==200)
            {
                set_doctor_list(res.data);
                console.log(res.data);
                set_n_cards(res.data.length);
            }
        }).catch(err => {
            console.log(err.message, err.status)
        })
    },[])


    // Slider
    const move_slider = (e) => {
        let direction = parseInt(e.target.getAttribute('direction'));
        console.log(e.target)
        let displace = move + direction * displacement;
        console.log(displace,move,direction,displacement);
        console.log(n_cards);
        if (displace > 0)
            set_move(0);
        else if (displace < -(card_width * n_cards - window.innerWidth))
            set_move(0);
        else set_move(displace);
    }
    return (
        <div className="slider_wrapper">
            <button className="control left" onClick={move_slider} direction="-1"><ChevronLeftIcon onClick={move_slider} direction="-1" /></button>
            <div className="slider" style={{ "transform": `translate(${move + "px"},0)` }}>

                {n_cards?doctor_list.map((doctor)=>{
                    if(i%2==0)
                    {
                        variant="small";
                    }
                    else{
                        variant="large";
                    }
                    i++;
                    return <Card img={"http://192.168.43.190:8000"+doctor.Photo} link={"http://localhost:8000"+doctor.Photo} specialisation={doctor.Area_of_Specialisation} key={doctor.Doctor_ID} name={doctor.Name} variant={variant} qualification = {doctor.Qualification}/>
                }):<CircularProgress color="secondary" />}
            </div>
            <button className="control right" onClick={move_slider} direction="+1"><ChevronRightIcon  onClick={move_slider} direction="+1"/></button>
        </div>
    )
}
export default Slider;