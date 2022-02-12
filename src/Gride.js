import React from "react";

function Gride() {
    const [elemnts, setelement] = React.useState([]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function setUpGridElements() {
        setelement((elements) => {
            elements.map((element) => {
                return <div className="element">{element}</div>;
            });
        });
    }

    React.useEffect(() => {
        setelement((element) => {
            for (let i = 0; i < 10; i++) {
                element.push(getRandomInt(9));
            }
        });
        //setUpGridElements();
    }, []);

    //  const grid = .map((x) => x * 2);

    /* const gridElements = elemnts.map((elemnt) => {
        return <div className="element">{elemnt}</div>;
    });

    console.log(gridElements);*/

    return <div className="grid"></div>;
}

export default Gride;
/**
 * <div className="element">1</div>
            <div className="element">2</div>
            <div className="element">3</div>
            <div className="element">4</div>
            <div className="element">5</div>
            <div className="element">1</div>
            <div className="element">2</div>
            <div className="element">3</div>
            <div className="element">4</div>
            <div className="element">5</div>
 */
