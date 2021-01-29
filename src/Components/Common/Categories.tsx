import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import classNames from 'classnames';
import { getCategories, getActiveCategoryId } from './Selectors';

const Categories: React.FC = ({ categories, activeCategoryId }: any) => {
    console.log('activeCategoryId', activeCategoryId);

    const renderCategory = (category: { id: string; name: string; }, index: string | number | null | undefined) => {
        function propEq(name: string, value: any) {
            return function (obj: any) {
                return obj[name] === value;
            };
        };
        const getActiveState = propEq('id', activeCategoryId);

        const linkClass = classNames({
            'list-group-item': true,
            'active': getActiveState(category)
        });

        return (
            <Link to={`/categories/${category.id}`} key={index} className={linkClass}>
                {category.name}
            </Link>
        );
    };

    const renderAllCategory = () => {
        const linkClass = classNames({
            'list-group-item': true,
            'active': activeCategoryId == null || undefined ? true : false
        });

        return (
            <Link to='/' className={linkClass}>All</Link>
        )
    };

    return (
        <div className='well'>
            <h4>Brand</h4>
            <div className='list-group'>
                {renderAllCategory()}
                {categories.map((category: any, index: number) => renderCategory(category, index))}
            </div>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => ({
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownProps)
})

export default withRouter(connect(mapStateToProps, null)(Categories));

// export default compose(
//     withRouter,
//     connect(mapStateToProps, null)
// )(Categories);