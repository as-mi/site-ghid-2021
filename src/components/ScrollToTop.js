import { useEffect, useState } from 'react';

// Import FontAwesomeIcons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => { 
    const [offset, setOffset] = useState(0);

    const toTopHandler = (e) => {
        e.preventDefault();

        window.scrollTo({
            top: 0,
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
            <button className={"scrollButton " + (offset > 300 && "show")} onClick={toTopHandler}>
                 <FontAwesomeIcon icon={faAngleUp} className="scroll" />
            </button>
        </>
    );
}

export default ScrollToTop;