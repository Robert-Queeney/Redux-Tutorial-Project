import React from 'react';
import Photo from './photo';


const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
            {/* need to loop over the JSON and return just the photo */}
            {this.props.posts.map((post, index)=> <Photo {...this.props} key={index} i={index} post={post}/>)}
            </div>

        )
    }
})

export default PhotoGrid; 