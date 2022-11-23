import React from 'react'
import {Helmet} from 'react-helmet'

const MetaData = ({title}) => {
    return(
        <Helmet>
            <title>{`${title} - FiveCodeShop`}</title>
        </Helmet>
    )

}
export default MetaData