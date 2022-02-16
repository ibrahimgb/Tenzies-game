import React from "react";

function Gride(props) {
    const [elemnts, setelement] = React.useState([]);
    const [score, setScore] = React.useState(0);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function fill() {
        for (let i = 0; i < 10; i++) {
            let newElemnt = {
                id: i,
                content: getRandomInt(10),
                willRoll: true,
            };
            setelement((elements) => [...elements, newElemnt]);
        }

        console.log("starting");
    }

    function reFill() {
        setelement((elements) => {
            for (let i = 0; i < 10; i++) {
                if (elements[i].willRoll) {
                    elements[i].content = getRandomInt(10);
                }
            }
            return elements;
        });

        console.log("refilling");
    }

    function changeState(i) {
        setelement((element) => {
            element[i].willRoll = !element[i].willRoll;

            return [...element];
        });
    }

    React.useEffect(() => {
        fill();
    }, []);

    React.useEffect(() => {
        reFill();
    }, [props.change]);

    React.useEffect(() => {
        setScore((s) => s++);
        console.log("update");
    }, [elemnts]);
    console.log(elemnts);
    const gridElements = elemnts.map((element) => {
        return (
            <div
                key={element.id}
                className={element.willRoll ? "element" : "element green"}
                onClick={() => changeState(element.id)}
            >
                {" "}
                {element.content}
            </div>
        );
    });

    console.log(elemnts);

    return <div className="grid">{gridElements}</div>;
}

export default Gride;
