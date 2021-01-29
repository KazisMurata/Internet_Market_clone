import React from 'react';
import Sidebar from './Sidebar';
import SimpleSlider from '../Common/SliderSlick';

const Layout: React.FC = ({children}) => (
    <div className='view-container'>
        <div className='container'>
            <SimpleSlider /> 
            <div className='row'>
                 
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default Layout;