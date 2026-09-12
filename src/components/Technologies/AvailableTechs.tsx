import React from 'react';

const AvailableTechs = ({ technologies }) => {
    console.log(technologies, 'techs from available techs');
    return <div> {
        technologies.map((technology) => {
            return <div>
                {technology.tech}
            </div>
        })
        }
    </div>;

};

export default AvailableTechs;