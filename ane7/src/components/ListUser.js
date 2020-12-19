import * as React from 'react';
import data from '../users.json';

export default class ListUser extends React.Component {
    render() {
        return (
            <div>
                {data.map((dataJson) => {
                    //if (dataJson.surname === 'Salvador')
                        return (
                            <div>
                                <p>{dataJson.name} {dataJson.surname}</p>
                                <p>{dataJson.dateOfBirth}</p>
                            </div>
                        );
                })}
            </div>
        );
    }
}
