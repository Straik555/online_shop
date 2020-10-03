import React, {useEffect} from "react";
import {connect} from 'react-redux';

import {fetchPhones} from "../../actions";

const Phones = (props, {phones}) => {
    console.log('p', phones)
    useEffect(() => {
        props.fetchPhones();
    })

    return <p>Phones</p>
}

const mapStateToProps = ({phones}) => {
    return phones
}

const mapDispatchToProps = {
    fetchPhones
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones);