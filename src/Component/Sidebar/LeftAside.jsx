import React, { Suspense } from 'react';
import Categories from '../Categories/Categories';
import CircularText from '../Loading/CircularText ';


const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<CircularText
                text="INTERSTELLER"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
            />}>
                <Categories></Categories>
            </Suspense>

        </div>
    );
};

export default LeftAside;