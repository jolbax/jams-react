import React, { Component } from 'react';

class Album extends Component{
    render(){
        return (
        <section className="album">
            Album page will go here <br/>
            {this.props.match.params.slug} Album will go here
        </section>
        );
    }
}

export default Album;