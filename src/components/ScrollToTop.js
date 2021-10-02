import { useEffect, useState } from 'react';

// Import FontAwesomeIcons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => { 
    const [offset, setOffset] = useState(0);

    const toTopHandler = (e) => {
        e.preventDefault();
        let start_point = document.getElementById("start_point");
        window.scrollTo({
            top: start_point.offsetHeight * 1.1,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        window.onscroll = () => {
          setOffset(window.scrollY);
        }
      }, []);


    return (
        <>
            <button className={"scrollButton " + (offset > document.getElementById("start_point").offsetHeight * 2 && "show")} onClick={toTopHandler}>
                 <FontAwesomeIcon icon={faAngleUp} className="scroll" />
            </button>
        </>
    );
}

export default ScrollToTop;
