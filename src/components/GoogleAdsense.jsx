import React, { Component } from 'react';

class GoogleAds extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <div>
                <ins className='adsbygoogle'
                     style={{ display: 'inline-block; width:300px; height:90px' }}
                     data-ad-client= 'ca-pub-2063447360053197'
                     data-ad-slot={this.props.slot}>
                </ins>
            </div>

        );
    }
}

export default GoogleAds;