const Data = ({ names, getInfo }) => {
    let userObj = {
        name: 'Kate',
        age: 30,
        work: 'IT'
    };

    getInfo(userObj);

    return (
        <ul>
            {names.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
};

export default Data;




