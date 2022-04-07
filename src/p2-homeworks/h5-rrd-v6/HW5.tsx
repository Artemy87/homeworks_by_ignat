import React from 'react'
import Header from './Header'
import Pages from './Pages'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
                <Header/>
                <Pages/>
        </div>
    )
}

export default HW5
